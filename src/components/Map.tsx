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
          filteredMigrants.map((migrant) => (
            <Marker
              key={`migrant-${migrant.id}`}
              position={[migrant.latitude, migrant.longitude]}
            >
              <Popup>
                <div>
                  <h2 className="text-lg font-bold">{migrant.name}</h2>
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
                </div>
              </Popup>
            </Marker>
          ))}
        {(filters.entityType === "all" ||
          filters.entityType === "organization") &&
          filteredOrganizations.map((org) => (
            <Marker
              key={`org-${org.id}`}
              position={[org.latitude, org.longitude]}
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
          ))}
        {getEdges().map((edge, index) => (
          <Polyline
            key={index}
            positions={edge.slice(0, 2) as [number, number][]}
            color={edge[2] as string}
            weight={2}
            opacity={(edge[3] as number) * 0.16 + 0.2}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
