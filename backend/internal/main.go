package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

var db *gorm.DB

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Printf("Error loading .env file: %v", err)
	}

	// Initialize database connection
	initDB()

	// Setup router
	r := gin.Default()

	// CORS middleware
	r.Use(corsMiddleware())

	// Routes
	api := r.Group("/api/v1")
	{
		// Auth routes
		auth := api.Group("/auth")
		{
			auth.POST("/register", handlers.Register)
			auth.POST("/login", handlers.Login)
			auth.POST("/refresh", handlers.RefreshToken)
		}

		// Protected routes
		protected := api.Group("/")
		protected.Use(authMiddleware())
		{
			// Migrant routes
			migrants := protected.Group("/migrants")
			{
				migrants.GET("/", handlers.GetMigrants)
				migrants.GET("/:id", handlers.GetMigrant)
				migrants.POST("/", handlers.CreateMigrant)
				migrants.PUT("/:id", handlers.UpdateMigrant)
				migrants.DELETE("/:id", handlers.DeleteMigrant)
			}

			// Organization routes
			orgs := protected.Group("/organizations")
			{
				orgs.GET("/", handlers.GetOrganizations)
				orgs.GET("/:id", handlers.GetOrganization)
				orgs.POST("/", handlers.CreateOrganization)
				orgs.PUT("/:id", handlers.UpdateOrganization)
				orgs.DELETE("/:id", handlers.DeleteOrganization)
			}

			// Connection routes
			connections := protected.Group("/connections")
			{
				connections.GET("/", handlers.GetConnections)
				connections.POST("/", handlers.CreateConnection)
				connections.DELETE("/:id", handlers.DeleteConnection)
			}
		}
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	r.Run(":" + port)
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}