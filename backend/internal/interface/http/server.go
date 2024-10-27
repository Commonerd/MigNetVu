package http

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"migrant-network-api/internal/config"
	"migrant-network-api/internal/interface/http/handler"
	"migrant-network-api/internal/usecase"
)

type Server struct {
	migrantUseCase usecase.MigrantUseCase
	router         *gin.Engine
	config         *config.Config
}

func NewServer(migrantUseCase usecase.MigrantUseCase) *Server {
	return &Server{
		migrantUseCase: migrantUseCase,
		router:         gin.Default(),
		config:         config.GetConfig(),
	}
}

func (s *Server) Start() {
	s.setupRoutes()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	s.router.Run(":" + port)
}

func (s *Server) setupRoutes() {
	s.router.Use(s.corsMiddleware())

	migrantHandler := handler.NewMigrantHandler(s.migrantUseCase)

	api := s.router.Group("/api/v1")
	{
		migrants := api.Group("/migrants")
		{
			migrants.GET("/", migrantHandler.GetMigrants)
			migrants.GET("/:id", migrantHandler.GetMigrant)
			migrants.POST("/", migrantHandler.CreateMigrant)
			migrants.PUT("/:id", migrantHandler.UpdateMigrant)
			migrants.DELETE("/:id", migrantHandler.DeleteMigrant)
		}
	}
}

func (s *Server) corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", s.config.FrontendBaseURL)
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}