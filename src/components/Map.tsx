import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Migrant,
  Organization,
  EntityType,
  Connection,
  FilterOptions,
} from "../types";
import { mockMigrants, mockOrganizations } from "../mockData";

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Map: React.FC = () => {
  const { t } = useTranslation();
  const [migrants, setMigrants] = useState<Migrant[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    nationality: "all",
    ethnicity: "all",
    connectionType: "all",
    entityType: "all",
    yearRange: [1900, 2023],
  });
  const [centralityType, setCentralityType] = useState<string>("none");


  useEffect(() => {
    setMigrants(mockMigrants);
    setOrganizations(mockOrganizations);
  }, []);

  const getEntityById = (
    id: number,
    type: EntityType
  ): Migrant | Organization | undefined => {
    return type === "migrant"
      ? migrants.find((m) => m.id === id)
      : organizations.find((o) => o.id === id);
  };

  const getConnectionColor = (type: Connection["type"]) => {
    switch (type) {
      case "friend":
        return "blue";
      case "colleague":
        return "green";
      case "family":
        return "red";
      case "professional":
        return "purple";
      case "cultural":
        return "orange";
      default:
        return "gray";
    }
  };

  const getEdges = () => {
    const edges: [number, number, string, number][][] = [];
    const addEdges = (entity: Migrant | Organization) => {
      entity.connections.forEach((connection) => {
        if (
          filters.connectionType === "all" ||
          connection.type === filters.connectionType
        ) {
          const target = getEntityById(
            connection.targetId,
            connection.targetType
          );
          if (target) {
            edges.push([
              [entity.latitude, entity.longitude],
              [target.latitude, target.longitude],
              getConnectionColor(connection.type),
              connection.strength,
            ]);
          }
        }
      });
    };

    if (filters.entityType === "all" || filters.entityType === "migrant") {
      migrants.forEach((migrant) => {
        if (
          (filters.nationality === "all" ||
            migrant.nationality === filters.nationality) &&
          (filters.ethnicity === "all" ||
            migrant.ethnicity === filters.ethnicity) &&
          migrant.migrationYear >= filters.yearRange[0] &&
          migrant.migrationYear <= filters.yearRange[1]
        ) {
          addEdges(migrant);
        }
      });
    }

    if (filters.entityType === "all" || filters.entityType === "organization") {
      organizations.forEach((org) => {
        if (
          org.foundationYear >= filters.yearRange[0] &&
          org.foundationYear <= filters.yearRange[1]
        ) {
          addEdges(org);
        }
      });
    }

    return edges;
  };

  const handleFilterChange = (
    key: keyof FilterOptions,
    value: string | number[]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredMigrants = migrants.filter(
    (migrant) =>
      (filters.nationality === "all" ||
        migrant.nationality === filters.nationality) &&
      (filters.ethnicity === "all" ||
        migrant.ethnicity === filters.ethnicity) &&
      migrant.migrationYear >= filters.yearRange[0] &&
      migrant.migrationYear <= filters.yearRange[1]
  );

  const filteredOrganizations = organizations.filter(
    (org) =>
      org.foundationYear >= filters.yearRange[0] &&
      org.foundationYear <= filters.yearRange[1]
  );

  const uniqueNationalities = Array.from(
    new Set(migrants.map((m) => m.nationality))
  );
  const uniqueEthnicities = Array.from(
    new Set(migrants.map((m) => m.ethnicity))
  );

  // Utility function to calculate shortest path using BFS
const bfsShortestPath = (startId: number, connectionsMap: { [id: number]: number[] }) => {
  const queue: [number, number][] = [[startId, 0]]; // [nodeId, distance]
  const distances: { [id: number]: number } = { [startId]: 0 };
  const visited = new Set<number>([startId]);

  while (queue.length > 0) {
    const [current, dist] = queue.shift()!;
    connectionsMap[current].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        distances[neighbor] = dist + 1;
        queue.push([neighbor, dist + 1]);
      }
    });
  }

  return distances;
};


const calculateCentrality = () => {
  const centrality: { [id: number]: number } = {};
  const connectionsMap: { [id: number]: number[] } = {};

  // Build a connections map
  [...migrants, ...organizations].forEach((entity) => {
    connectionsMap[entity.id] = entity.connections.map(
      (connection) => connection.targetId
    );
  });

  switch (centralityType) {
    case "degree":
      for (const id in connectionsMap) {
        centrality[id] = connectionsMap[id].length;
      }
      break;
      case "betweenness":
        // Initialize betweenness centrality values to 0
        for (const id in connectionsMap) {
          centrality[id] = 0;
        }
  
        // Calculate betweenness centrality for each node
        for (const startId in connectionsMap) {
          const shortestPaths: { [id: number]: number[][] } = {};
          const distances: { [id: number]: number } = {};
          const queue: number[] = [Number(startId)];
          const predecessors: { [id: number]: number[] } = {};
  
          // Initialize distances and paths
          Object.keys(connectionsMap).forEach((id) => {
            distances[Number(id)] = Infinity;
            shortestPaths[Number(id)] = [];
            predecessors[Number(id)] = [];
          });
  
          distances[Number(startId)] = 0;
          shortestPaths[Number(startId)].push([Number(startId)]);
  
          // BFS to find shortest paths
          while (queue.length > 0) {
            const current = queue.shift()!;
            connectionsMap[current].forEach((neighbor) => {
              if (distances[neighbor] === Infinity) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
              }
              if (distances[neighbor] === distances[current] + 1) {
                predecessors[neighbor].push(current);
              }
            });
          }
  
          const dependency: { [id: number]: number } = {};
  
          Object.keys(predecessors).forEach((id) => {
            dependency[Number(id)] = 0;
          });
  
          // Accumulate dependencies by backtracking from each node
          const nodes = Object.keys(predecessors).map(Number).sort((a, b) => distances[b] - distances[a]);
  
          nodes.forEach((w) => {
            predecessors[w].forEach((v) => {
              const fraction = (1 + dependency[w]) / predecessors[w].length;
              dependency[v] += fraction;
            });
  
            if (w !== Number(startId)) {
              centrality[w] += dependency[w];
            }
          });
        }
  
        // Normalize the betweenness centrality scores
        const totalNodes = Object.keys(connectionsMap).length;
        Object.keys(centrality).forEach((id) => {
          centrality[Number(id)] /= (totalNodes - 1) * (totalNodes - 2);
        });
  
        break;
    case "closeness":
      for (const id in connectionsMap) {
        const distances = bfsShortestPath(Number(id), connectionsMap);
        const totalDistance = Object.values(distances).reduce((acc, d) => acc + d, 0);
        centrality[id] = totalDistance > 0 ? 1 / totalDistance : 0; // Closeness formula
      }
      break;
    case "eigenvector":
      // Implement Eigenvector Centrality calculation logic here
      break;
    default:
      break;
  }

  return centrality;
};

  
  const centralityValues = calculateCentrality();

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="p-4 bg-white">
        <div className="flex flex-wrap gap-4">
          <select
            value={filters.entityType}
            onChange={(e) => handleFilterChange("entityType", e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">{t("allEntityTypes")}</option>
            <option value="migrant">{t("migrant")}</option>
            <option value="organization">{t("organization")}</option>
          </select>
          {filters.entityType !== "organization" && (
            <>
              <select
                value={filters.nationality}
                onChange={(e) =>
                  handleFilterChange("nationality", e.target.value)
                }
                className="p-2 border rounded"
              >
                <option value="all">{t("allNationalities")}</option>
                {uniqueNationalities.map((nationality) => (
                  <option key={nationality} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </select>
              <select
                value={filters.ethnicity}
                onChange={(e) =>
                  handleFilterChange("ethnicity", e.target.value)
                }
                className="p-2 border rounded"
              >
                <option value="all">{t("allEthnicities")}</option>
                {uniqueEthnicities.map((ethnicity) => (
                  <option key={ethnicity} value={ethnicity}>
                    {ethnicity}
                  </option>
                ))}
              </select>
            </>
          )}
          <select
            value={filters.connectionType}
            onChange={(e) =>
              handleFilterChange("connectionType", e.target.value)
            }
            className="p-2 border rounded"
          >
            <option value="all">{t("allConnectionTypes")}</option>
            <option value="friend">{t("friend")}</option>
            <option value="colleague">{t("colleague")}</option>
            <option value="family">{t("family")}</option>
            <option value="professional">{t("professional")}</option>
            <option value="cultural">{t("cultural")}</option>
          </select>
          <div>
            <label>{t("yearRange")}: </label>
            <input
              type="number"
              value={filters.yearRange[0]}
              onChange={(e) =>
                handleFilterChange("yearRange", [
                  parseInt(e.target.value),
                  filters.yearRange[1],
                ])
              }
              className="w-20 p-2 border rounded"
            />
            <span> - </span>
            <input
              type="number"
              value={filters.yearRange[1]}
              onChange={(e) =>
                handleFilterChange("yearRange", [
                  filters.yearRange[0],
                  parseInt(e.target.value),
                ])
              }
              className="w-20 p-2 border rounded"
            />
          </div>
            <select
            value={centralityType}
            onChange={(e) => setCentralityType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="none">{t("selectCentrality")}</option>
            <option value="degree">{t("degreeCentrality")}</option>
            <option value="betweenness">{t("betweennessCentrality")}</option>
            <option value="closeness">{t("closenessCentrality")}</option>
            <option value="eigenvector">{t("eigenvectorCentrality")}</option>
          </select>
        </div>
      </div>
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={2}
        style={{ height: "calc(100% - 60px)", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {(filters.entityType === "all" || filters.entityType === "migrant") &&
          filteredMigrants.map((migrant) => {
            const size = centralityType !== "none" ? (centralityValues[migrant.id] || 0) * 5 + 10 : 10; // Degree 중심성에 따라 크기 조정
            return (
              <Marker
                key={`migrant-${migrant.id}`}
                position={[migrant.latitude, migrant.longitude]}
                icon={L.divIcon({
                  className: 'custom-marker',
                  html: `<div style="width: ${size}px; height: ${size}px; background-color: red; border-radius: 50%;"></div>`, // Example of a circular marker
                  iconSize: [size, size]
                })}
              >
                <Popup>
                  <h2 className="text-lg font-bold">{migrant.name}</h2>
                  <p>{t("centrality")}: {centralityValues[migrant.id] || 0}</p>
                  <p>
                    {t("nationality")}: {migrant.nationality}
                  </p>
                  <p>
                    {t("ethnicity")}: {migrant.ethnicity}
                  </p>
                  <p>
                    {t("migrationYear")}: {migrant.migrationYear}
                  </p>
                  <p>
                    {t("age")}: {migrant.age}
                  </p>
                  <p>
                    {t("occupation")}: {migrant.occupation}
                  </p>
                  <p>
                    {t("education")}: {migrant.education}
                  </p>
                  <p>
                    {t("languagesSpoken")}: {migrant.languagesSpoken.join(", ")}
                  </p>
              </Popup>
            </Marker>
          );
        })}
        {(filters.entityType === "all" ||
          filters.entityType === "organization") &&
          filteredOrganizations.map((org) => {
            const size = centralityType !== "none" ? centralityValues[org.id] || 0 : 10; // Default size
            return (
            <Marker
              key={`org-${org.id}`}
              position={[org.latitude, org.longitude]}
              icon={L.divIcon({
                className: 'custom-marker',
                html: `<div style="width: ${size}px; height: ${size}px; background-color: blue; border-radius: 50%;"></div>`, // Example of a circular marker
                iconSize: [size, size]
              })}
            >
              <Popup>
                <div>
                  <h2 className="text-lg font-bold">{org.name}</h2>
                  <p>
                    {t("foundationYear")}: {org.foundationYear}
                  </p>
                  <p>
                    {t("type")}: {org.type}
                  </p>
                  <p>
                    {t("mission")}: {org.mission}
                  </p>
                  <p>
                    {t("services")}: {org.services.join(", ")}
                  </p>
                  <p>
                    {t("contactInfo")}: {org.contactInfo}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
        {getEdges().map((edge, index) => (
          <Polyline
            key={index}
            positions={edge.slice(0, 2) as unknown as [number, number][]}
            color={edge[2] as unknown as string}
            weight={2}
            opacity={(edge[3] as unknown as number) * 0.16 + 0.2}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
