package models

import (
	"time"

	"gorm.io/gorm"
)

type Connection struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	SourceID     uint           `json:"sourceId" binding:"required"`
	SourceType   string         `json:"sourceType" binding:"required"` // "migrant" or "organization"
	TargetID     uint           `json:"targetId" binding:"required"`
	TargetType   string         `json:"targetType" binding:"required"` // "migrant" or "organization"
	Strength     int            `json:"strength" binding:"required,min=1,max=5"`
	Type         string         `json:"type" binding:"required"` // "friend", "mentor", "collaborator", etc.
	CreatedAt    time.Time      `json:"createdAt"`
	UpdatedAt    time.Time      `json:"updatedAt"`
	DeletedAt    gorm.DeletedAt `json:"deletedAt,omitempty" gorm:"index"`
}