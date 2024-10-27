package models

import (
	"time"

	"gorm.io/gorm"
)

type Organization struct {
	ID             uint           `json:"id" gorm:"primaryKey"`
	Name           string         `json:"name" binding:"required"`
	Latitude       float64        `json:"latitude" binding:"required"`
	Longitude      float64        `json:"longitude" binding:"required"`
	FoundationYear int            `json:"foundationYear" binding:"required"`
	Type           string         `json:"type" binding:"required"`
	Mission        string         `json:"mission"`
	Services       []string       `json:"services" gorm:"type:text[]"`
	ContactInfo    string         `json:"contactInfo"`
	RegistrantID   uint          `json:"registrantId" binding:"required"`
	CreatedAt      time.Time      `json:"createdAt"`
	UpdatedAt      time.Time      `json:"updatedAt"`
	DeletedAt      gorm.DeletedAt `json:"deletedAt,omitempty" gorm:"index"`
}