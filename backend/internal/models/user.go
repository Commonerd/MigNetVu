package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	Email        string         `json:"email" gorm:"unique" binding:"required,email"`
	Password     string         `json:"-" binding:"required,min=8"`
	Name         string         `json:"name" binding:"required"`
	Role         string         `json:"role" binding:"required"` // "admin" or "user"
	CreatedAt    time.Time      `json:"createdAt"`
	UpdatedAt    time.Time      `json:"updatedAt"`
	DeletedAt    gorm.DeletedAt `json:"deletedAt,omitempty" gorm:"index"`
}