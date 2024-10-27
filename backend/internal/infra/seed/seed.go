package seed

import (
	"encoding/json"
	"log"
	"migrant-network-api/internal/domain/entity"
	"os"
	"time"

	"gorm.io/gorm"
)

type Seeder struct {
	db *gorm.DB
}

func NewSeeder(db *gorm.DB) *Seeder {
	return &Seeder{db: db}
}

func (s *Seeder) SeedAll() error {
	if err := s.SeedUsers(); err != nil {
		return err
	}
	if err := s.SeedMigrants(); err != nil {
		return err
	}
	if err := s.SeedOrganizations(); err != nil {
		return err
	}
	return s.SeedConnections()
}

func (s *Seeder) SeedUsers() error {
	var users = []map[string]interface{}{
		{
			"email":    "admin@example.com",
			"password": "$2a$10$IYqgqxo3Yq3Qf/YQzZGa8.WB33RpL3P5w5Gh5BxfY8fBZOXWkqz2y", // "password123"
			"name":     "Admin User",
			"role":     "admin",
		},
		{
			"email":    "user@example.com",
			"password": "$2a$10$IYqgqxo3Yq3Qf/YQzZGa8.WB33RpL3P5w5Gh5BxfY8fBZOXWkqz2y",
			"name":     "Regular User",
			"role":     "user",
		},
	}

	for _, user := range users {
		if err := s.db.Create(user).Error; err != nil {
			return err
		}
	}

	log.Println("Users seeded successfully")
	return nil
}

func (s *Seeder) SeedMigrants() error {
	migrants := []entity.Migrant{
		{
			Name:            "Fatima Al-Najjar",
			Nationality:     "Egyptian",
			Ethnicity:       "Korean",
			Latitude:        30.0444,
			Longitude:       31.2357,
			MigrationYear:   2010,
			Age:             34,
			Occupation:      "Journalist",
			Education:       "Bachelor's in Journalism",
			LanguagesSpoken: []string{"Korean", "Arabic", "English"},
			RegistrantID:    1,
			CreatedAt:       time.Now(),
			UpdatedAt:       time.Now(),
		},
		{
			Name:            "Kim Min-ho",
			Nationality:     "Korean",
			Ethnicity:       "Korean",
			Latitude:        37.5665,
			Longitude:       126.9780,
			MigrationYear:   2015,
			Age:             29,
			Occupation:      "Software Engineer",
			Education:       "Master's in Computer Science",
			LanguagesSpoken: []string{"Korean", "English", "Japanese"},
			RegistrantID:    1,
			CreatedAt:       time.Now(),
			UpdatedAt:       time.Now(),
		},
	}

	for _, migrant := range migrants {
		if err := s.db.Create(&migrant).Error; err != nil {
			return err
		}
	}

	log.Println("Migrants seeded successfully")
	return nil
}

func (s *Seeder) SeedOrganizations() error {
	organizations := []map[string]interface{}{
		{
			"name":           "Korean American Coalition",
			"latitude":       34.0522,
			"longitude":      -118.2437,
			"foundationYear": 1999,
			"type":          "Advocacy",
			"mission":       "Advocate for Korean Americans' rights",
			"services":      []string{"Advocacy", "Education"},
			"contactInfo":   "info@kac.org",
			"registrantId":  1,
		},
	}

	for _, org := range organizations {
		if err := s.db.Create(org).Error; err != nil {
			return err
		}
	}

	log.Println("Organizations seeded successfully")
	return nil
}

func (s *Seeder) SeedConnections() error {
	connections := []map[string]interface{}{
		{
			"sourceId":   1,
			"sourceType": "migrant",
			"targetId":   2,
			"targetType": "migrant",
			"strength":   4,
			"type":       "friend",
		},
		{
			"sourceId":   1,
			"sourceType": "migrant",
			"targetId":   1,
			"targetType": "organization",
			"strength":   5,
			"type":       "member",
		},
	}

	for _, conn := range connections {
		if err := s.db.Create(conn).Error; err != nil {
			return err
		}
	}

	log.Println("Connections seeded successfully")
	return nil
}