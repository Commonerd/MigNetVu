import { Migrant, Organization } from "./types";

export const mockMigrants: Migrant[] = [
  {
    id: 1,
    name: "Kim Minjun",
    nationality: "Korean",
    ethnicity: "Korean",
    latitude: 37.5665,
    longitude: 126.978,
    migrationYear: 2015,
    age: 35,
    occupation: "Software Engineer",
    education: "Bachelor's in Computer Science",
    languagesSpoken: ["Korean", "English"],
    connections: [
      { targetId: 2, targetType: "migrant", strength: 4, type: "friend" },
      {
        targetId: 1,
        targetType: "organization",
        strength: 3,
        type: "professional",
      },
    ],
  },
  {
    id: 2,
    name: "Liu Wei",
    nationality: "Chinese",
    ethnicity: "Han Chinese",
    latitude: 31.2304,
    longitude: 121.4737,
    migrationYear: 2010,
    age: 40,
    occupation: "Business Analyst",
    education: "Master's in Finance",
    languagesSpoken: ["Mandarin", "English"],
    connections: [
      { targetId: 3, targetType: "migrant", strength: 2, type: "colleague" },
      {
        targetId: 1,
        targetType: "organization",
        strength: 3,
        type: "business",
      },
    ],
  },
  {
    id: 3,
    name: "John Smith",
    nationality: "American",
    ethnicity: "Caucasian",
    latitude: 40.7128,
    longitude: -74.006,
    migrationYear: 2008,
    age: 45,
    occupation: "Marketing Manager",
    education: "Bachelor's in Marketing",
    languagesSpoken: ["English", "Spanish"],
    connections: [
      { targetId: 4, targetType: "migrant", strength: 5, type: "friend" },
      {
        targetId: 2,
        targetType: "organization",
        strength: 2,
        type: "business",
      },
    ],
  },
  {
    id: 4,
    name: "Sophie Dupont",
    nationality: "French",
    ethnicity: "European",
    latitude: 48.8566,
    longitude: 2.3522,
    migrationYear: 2017,
    age: 29,
    occupation: "Fashion Designer",
    education: "Bachelor's in Fashion Design",
    languagesSpoken: ["French", "English"],
    connections: [
      { targetId: 5, targetType: "migrant", strength: 3, type: "colleague" },
      {
        targetId: 3,
        targetType: "organization",
        strength: 4,
        type: "cultural",
      },
    ],
  },
  {
    id: 5,
    name: "Ali Hassan",
    nationality: "Egyptian",
    ethnicity: "Arab",
    latitude: 30.0444,
    longitude: 31.2357,
    migrationYear: 2012,
    age: 32,
    occupation: "Civil Engineer",
    education: "Master's in Civil Engineering",
    languagesSpoken: ["Arabic", "English"],
    connections: [
      { targetId: 6, targetType: "migrant", strength: 4, type: "friend" },
      {
        targetId: 4,
        targetType: "organization",
        strength: 3,
        type: "professional",
      },
    ],
  },
  {
    id: 6,
    name: "Maria Fernandez",
    nationality: "Mexican",
    ethnicity: "Latino",
    latitude: 19.4326,
    longitude: -99.1332,
    migrationYear: 2018,
    age: 30,
    occupation: "Teacher",
    education: "Bachelor's in Education",
    languagesSpoken: ["Spanish", "English"],
    connections: [
      {
        targetId: 1,
        targetType: "organization",
        strength: 4,
        type: "professional",
      },
      { targetId: 7, targetType: "migrant", strength: 5, type: "friend" },
    ],
  },
  {
    id: 7,
    name: "Ahmed Al-Sayed",
    nationality: "Jordanian",
    ethnicity: "Arab",
    latitude: 31.9632,
    longitude: 35.9308,
    migrationYear: 2019,
    age: 29,
    occupation: "Doctor",
    education: "Bachelor's in Medicine",
    languagesSpoken: ["Arabic", "English"],
    connections: [
      {
        targetId: 2,
        targetType: "organization",
        strength: 3,
        type: "business",
      },
      { targetId: 6, targetType: "migrant", strength: 5, type: "friend" },
    ],
  },
  {
    id: 8,
    name: "Olga Ivanova",
    nationality: "Russian",
    ethnicity: "Slavic",
    latitude: 55.7558,
    longitude: 37.6173,
    migrationYear: 2012,
    age: 36,
    occupation: "Engineer",
    education: "Master's in Mechanical Engineering",
    languagesSpoken: ["Russian", "English"],
    connections: [
      { targetId: 4, targetType: "migrant", strength: 3, type: "colleague" },
      {
        targetId: 1,
        targetType: "organization",
        strength: 2,
        type: "cultural",
      },
    ],
  },
  {
    id: 9,
    name: "Linh Nguyen",
    nationality: "Vietnamese",
    ethnicity: "Vietnamese",
    latitude: 21.0285,
    longitude: 105.8542,
    migrationYear: 2016,
    age: 28,
    occupation: "Accountant",
    education: "Bachelor's in Accounting",
    languagesSpoken: ["Vietnamese", "English"],
    connections: [
      {
        targetId: 4,
        targetType: "organization",
        strength: 3,
        type: "business",
      },
      { targetId: 9, targetType: "migrant", strength: 4, type: "friend" },
    ],
  },
  {
    id: 10,
    name: "Rajesh Kumar",
    nationality: "Indian",
    ethnicity: "South Asian",
    latitude: 28.6139,
    longitude: 77.209,
    migrationYear: 2014,
    age: 34,
    occupation: "Data Scientist",
    education: "Master's in Data Science",
    languagesSpoken: ["Hindi", "English"],
    connections: [
      {
        targetId: 5,
        targetType: "organization",
        strength: 4,
        type: "professional",
      },
      { targetId: 10, targetType: "migrant", strength: 3, type: "colleague" },
    ],
  },
  {
    id: 11,
    name: "Aisha Mbeki",
    nationality: "South African",
    ethnicity: "African",
    latitude: -26.2041,
    longitude: 28.0473,
    migrationYear: 2011,
    age: 39,
    occupation: "Social Worker",
    education: "Bachelor's in Social Work",
    languagesSpoken: ["Zulu", "English"],
    connections: [
      {
        targetId: 5,
        targetType: "organization",
        strength: 5,
        type: "community",
      },
      { targetId: 6, targetType: "migrant", strength: 3, type: "friend" },
    ],
  },
  {
    id: 12,
    name: "Ivan Petrov",
    nationality: "Bulgarian",
    ethnicity: "Eastern European",
    latitude: 42.6977,
    longitude: 23.3219,
    migrationYear: 2013,
    age: 33,
    occupation: "IT Specialist",
    education: "Bachelor's in Information Technology",
    languagesSpoken: ["Bulgarian", "English"],
    connections: [
      { targetId: 7, targetType: "migrant", strength: 3, type: "friend" },
      {
        targetId: 5,
        targetType: "organization",
        strength: 4,
        type: "cultural",
      },
    ],
  },
  {
    id: 13,
    name: "Sara Rossi",
    nationality: "Italian",
    ethnicity: "European",
    latitude: 41.9028,
    longitude: 12.4964,
    migrationYear: 2020,
    age: 25,
    occupation: "Graphic Designer",
    education: "Bachelor's in Graphic Design",
    languagesSpoken: ["Italian", "English"],
    connections: [
      {
        targetId: 8,
        targetType: "organization",
        strength: 4,
        type: "cultural",
      },
      { targetId: 3, targetType: "migrant", strength: 3, type: "colleague" },
    ],
  },
  {
    id: 14,
    name: "Mika Tanaka",
    nationality: "Japanese",
    ethnicity: "Japanese",
    latitude: 35.6895,
    longitude: 139.6917,
    migrationYear: 2021,
    age: 27,
    occupation: "Content Creator",
    education: "Bachelor's in Media Studies",
    languagesSpoken: ["Japanese", "English"],
    connections: [
      { targetId: 9, targetType: "migrant", strength: 3, type: "colleague" },
      {
        targetId: 1,
        targetType: "organization",
        strength: 4,
        type: "professional",
      },
    ],
  },
  {
    id: 15,
    name: "Carlos Garcia",
    nationality: "Spanish",
    ethnicity: "European",
    latitude: 40.4168,
    longitude: -3.7038,
    migrationYear: 2010,
    age: 42,
    occupation: "Architect",
    education: "Master's in Architecture",
    languagesSpoken: ["Spanish", "English"],
    connections: [
      { targetId: 6, targetType: "migrant", strength: 3, type: "colleague" },
      {
        targetId: 5,
        targetType: "organization",
        strength: 5,
        type: "business",
      },
    ],
  },
];

export const mockOrganizations: Organization[] = [
  {
    id: 1,
    name: "Korean Cultural Center - LA",
    latitude: 34.0622,
    longitude: -118.3026,
    foundationYear: 1980,
    type: "Cultural",
    mission: "Promote Korean culture and support Korean immigrants",
    services: ["Language classes", "Cultural events", "Immigration support"],
    contactInfo: "info@kccla.org",
    connections: [
      { targetId: 1, targetType: "migrant", strength: 3, type: "cultural" },
      {
        targetId: 2,
        targetType: "organization",
        strength: 4,
        type: "professional",
      },
    ],
  },
  {
    id: 2,
    name: "Asian Business Association",
    latitude: 34.0522,
    longitude: -118.2437,
    foundationYear: 1995,
    type: "Business",
    mission: "Support Asian business owners in LA",
    services: ["Business workshops", "Networking events"],
    contactInfo: "contact@abala.org",
    connections: [
      { targetId: 2, targetType: "migrant", strength: 2, type: "business" },
      {
        targetId: 1,
        targetType: "organization",
        strength: 4,
        type: "networking",
      },
    ],
  },
  {
    id: 3,
    name: "New York Immigrant Coalition",
    latitude: 40.7128,
    longitude: -74.006,
    foundationYear: 1990,
    type: "Non-Profit",
    mission: "Advocate for immigrant rights",
    services: ["Legal support", "Advocacy", "Community outreach"],
    contactInfo: "info@nyic.org",
    connections: [
      { targetId: 3, targetType: "migrant", strength: 4, type: "legal" },
      {
        targetId: 4,
        targetType: "organization",
        strength: 2,
        type: "advocacy",
      },
    ],
  },
  {
    id: 4,
    name: "European Immigrant Support Center",
    latitude: 48.8566,
    longitude: 2.3522,
    foundationYear: 2005,
    type: "Cultural",
    mission: "Support European immigrants in France",
    services: ["Cultural events", "Language support"],
    contactInfo: "contact@eisc.org",
    connections: [
      { targetId: 4, targetType: "migrant", strength: 4, type: "cultural" },
      {
        targetId: 5,
        targetType: "organization",
        strength: 3,
        type: "cultural",
      },
    ],
  },
  {
    id: 5,
    name: "African Development Association",
    latitude: 9.0579,
    longitude: 7.4951,
    foundationYear: 2010,
    type: "Non-Profit",
    mission: "Foster development in African immigrant communities",
    services: ["Education", "Health support", "Community building"],
    contactInfo: "contact@ada.org",
    connections: [
      { targetId: 5, targetType: "migrant", strength: 4, type: "community" },
      {
        targetId: 3,
        targetType: "organization",
        strength: 3,
        type: "collaboration",
      },
    ],
  },
  {
    id: 6,
    name: "Middle East Cultural Association",
    latitude: 25.276987,
    longitude: 55.296249,
    foundationYear: 1998,
    type: "Cultural",
    mission: "Promote Middle Eastern culture",
    services: ["Cultural events", "Language classes"],
    contactInfo: "info@meca.org",
    connections: [
      { targetId: 6, targetType: "migrant", strength: 4, type: "cultural" },
      {
        targetId: 3,
        targetType: "organization",
        strength: 3,
        type: "collaboration",
      },
    ],
  },
  {
    id: 7,
    name: "Latin American Business Association",
    latitude: -23.55052,
    longitude: -46.633308,
    foundationYear: 2000,
    type: "Business",
    mission: "Support Latin American businesses",
    services: ["Networking", "Business workshops"],
    contactInfo: "contact@laba.org",
    connections: [
      { targetId: 7, targetType: "migrant", strength: 5, type: "business" },
      {
        targetId: 4,
        targetType: "organization",
        strength: 4,
        type: "networking",
      },
    ],
  },
  {
    id: 8,
    name: "Asian Women’s Resource Center",
    latitude: 34.052235,
    longitude: -118.243683,
    foundationYear: 2005,
    type: "Non-Profit",
    mission: "Empower Asian women",
    services: ["Legal support", "Advocacy"],
    contactInfo: "info@awrc.org",
    connections: [
      { targetId: 8, targetType: "migrant", strength: 4, type: "advocacy" },
      {
        targetId: 7,
        targetType: "organization",
        strength: 2,
        type: "community",
      },
    ],
  },
  {
    id: 9,
    name: "European Cultural Institute",
    latitude: 50.110924,
    longitude: 8.682127,
    foundationYear: 1999,
    type: "Cultural",
    mission: "Promote European cultural exchanges",
    services: ["Cultural festivals", "Language exchange"],
    contactInfo: "contact@eci.org",
    connections: [
      { targetId: 5, targetType: "migrant", strength: 3, type: "cultural" },
      {
        targetId: 6,
        targetType: "organization",
        strength: 2,
        type: "collaboration",
      },
    ],
  },
  {
    id: 10,
    name: "African Diaspora Association",
    latitude: -1.292066,
    longitude: 36.821945,
    foundationYear: 2010,
    type: "Community",
    mission: "Support African diaspora",
    services: ["Job training", "Cultural events"],
    contactInfo: "contact@ada.org",
    connections: [
      { targetId: 10, targetType: "migrant", strength: 5, type: "community" },
      {
        targetId: 5,
        targetType: "organization",
        strength: 3,
        type: "networking",
      },
    ],
  },
];
