package repository

import "migrant-network-api/internal/domain/entity"

type OrganizationRepository interface {
	FindAll(page, limit int) ([]entity.Organization, int64, error)
	FindByID(id uint) (*entity.Organization, error)
	Create(org *entity.Organization) error
	Update(org *entity.Organization) error
	Delete(id uint) error
	FindByRegistrantID(registrantID uint) ([]entity.Organization, error)
}