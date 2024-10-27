package entity

import "time"

type Connection struct {
	ID         uint      `json:"id"`
	SourceID   uint      `json:"sourceId"`
	SourceType string    `json:"sourceType"`
	TargetID   uint      `json:"targetId"`
	TargetType string    `json:"targetType"`
	Strength   int       `json:"strength"`
	Type       string    `json:"type"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}