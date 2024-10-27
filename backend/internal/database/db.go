package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"migrant-network-api/internal/models"
)

func InitDB() (*gorm.DB, error) {
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	// Auto-migrate the schemas
	err = db.AutoMigrate(
		&models.User{},
		&models.Migrant{},
		&models.Organization{},
		&models.Connection{},
	)
	if err != nil {
		return nil, err
	}

	log.Println("Database migration completed")
	return db, nil
}