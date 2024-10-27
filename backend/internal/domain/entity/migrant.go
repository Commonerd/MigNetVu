package entity

import "time"

type Migrant struct {
	ID              uint      `json:"id"`
	Name            string    `json:"name"`
	Nationality     string    `json:"nationality"`
	Ethnicity       string    `json:"ethnicity"`
	Latitude        float64   `json:"latitude"`
	Longitude       float64   `json:"longitude"`
	MigrationYear   int       `json:"migrationYear"`
	Age             int       `json:"age"`
	Occupation      string    `json:"occupation"`
	Education       string    `json:"education"`
	LanguagesSpoken []string  `json:"languagesSpoken"`
	RegistrantID    uint      `json:"registrantId"`
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
}