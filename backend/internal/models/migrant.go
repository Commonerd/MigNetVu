package models

import (
	"time"

	"gorm.io/gorm"
)

type Migrant struct {
	ID              uint           `json:"id" gorm:"primaryKey"`
	Name            string         `json:"name" binding:"required"`
	Nationality     string         `json:"nationality" binding:"required"`
	Ethnicity       string         `json:"ethnicity"`
	Latitude        float64        `json:"latitude" binding:"required"`
	Longitude       float64        `json:"longitude" binding:"required"`
	MigrationYear   int           `json:"migrationYear" binding:"required"`
	Age             int           `json:"age" binding:"required"`
	Occupation      string         `json:"occupation"`
	Education       string         `json:"education"`
	LanguagesSpoken []string       `json:"languagesSpoken" gorm:"type:text[]"`
	RegistrantID    uint           `json:"registrantId" binding:"required"`
	CreatedAt       time.Time      `json:"createdAt"`
	UpdatedAt       time.Time      `json:"updatedAt"`
	DeletedAt       gorm.DeletedAt `json:"deletedAt,omitempty" gorm:"index"`
}