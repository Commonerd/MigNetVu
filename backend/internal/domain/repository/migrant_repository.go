package repository

import "migrant-network-api/internal/domain/entity"

type MigrantRepository interface {
	FindAll(page, limit int) ([]entity.Migrant, int64, error)
	FindByID(id uint) (*entity.Migrant, error)
	Create(migrant *entity.Migrant) error
	Update(migrant *entity.Migrant) error
	Delete(id uint) error
	FindByRegistrantID(registrantID uint) ([]entity.Migrant, error)
}