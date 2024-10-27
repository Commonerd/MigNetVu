export interface Migrant {
  id: number;
  name: string;
  nationality: string;
  ethnicity: string;
  latitude: number;
  longitude: number;
  migrationYear: number;
  connections: Connection[];
  age: number;
  occupation: string;
  education: string;
  languagesSpoken: string[];
  registrantId: string;
}

export interface Organization {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  foundationYear: number;
  connections: Connection[];
  type: string;
  mission: string;
  services: string[];
  contactInfo: string;
  registrantId: string;
}

export interface Connection {
  targetId: number;
  targetType: "migrant" | "organization";
  strength: number; // 1 to 5
  type: "friend" | "colleague" | "family" | "professional" | "cultural";
}

export type EntityType = "migrant" | "organization";

export type FilterOptions = {
  nationality: string;
  ethnicity: string;
  connectionType: string;
  entityType: string;
  yearRange: [number, number];
};
