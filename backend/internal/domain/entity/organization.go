package entity

import "time"

type Organization struct {
	ID             uint      `json:"id"`
	Name           string    `json:"name"`
	Latitude       float64   `json:"latitude"`
	Longitude      float64   `json:"longitude"`
	FoundationYear int       `json:"foundationYear"`
	Type           string    `json:"type"`
	Mission        string    `json:"mission"`
	Services       []string  `json:"services"`
	ContactInfo    string    `json:"contactInfo"`
	RegistrantID   uint      `json:"registrantId"`
	CreatedAt      time.Time `json:"createdAt"`
	UpdatedAt      time.Time `json:"updatedAt"`
}