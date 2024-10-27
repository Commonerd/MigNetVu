package main

import (
	"log"
	"migrant-network-api/internal/infrastructure/persistence/postgres"
	"migrant-network-api/internal/infrastructure/seed"
	"migrant-network-api/internal/interface/http"
	"migrant-network-api/internal/usecase"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Printf("Error loading .env file: %v", err)
	}

	// Initialize database
	db, err := postgres.InitDB()
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	// Seed data if environment is development
	if os.Getenv("APP_ENV") == "development" {
		seeder := seed.NewSeeder(db)
		if err := seeder.SeedAll(); err != nil {
			log.Printf("Error seeding data: %v", err)
		}
	}

	// Initialize repositories
	migrantRepo := postgres.NewMigrantRepository(db)
	orgRepo := postgres.NewOrganizationRepository(db)
	connRepo := postgres.NewConnectionRepository(db)

	// Initialize use cases
	migrantUseCase := usecase.NewMigrantUseCase(migrantRepo)
	orgUseCase := usecase.NewOrganizationUseCase(orgRepo)
	connUseCase := usecase.NewConnectionUseCase(connRepo)

	// Initialize HTTP server
	server := http.NewServer(migrantUseCase, orgUseCase, connUseCase)
	server.Start()
}