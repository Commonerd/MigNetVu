package config

import (
	"os"
	"sync"
)

type Config struct {
	FrontendBaseURL         string
	FrontendCallbackURL    string
	FrontendResetPasswordURL string
}

var (
	config *Config
	once   sync.Once
)

func GetConfig() *Config {
	once.Do(func() {
		config = &Config{
			FrontendBaseURL:         getEnvOrDefault("FRONTEND_BASE_URL", "http://localhost:3000"),
			FrontendCallbackURL:    getEnvOrDefault("FRONTEND_CALLBACK_URL", "http://localhost:3000/auth/callback"),
			FrontendResetPasswordURL: getEnvOrDefault("FRONTEND_RESET_PASSWORD_URL", "http://localhost:3000/reset-password"),
		}
	})
	return config
}

func getEnvOrDefault(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}