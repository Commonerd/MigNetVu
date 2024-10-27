package postgres

import (
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"

	"gorm.io/gorm"
)

type organizationRepository struct {
	db *gorm.DB
}

func NewOrganizationRepository(db *gorm.DB) repository.OrganizationRepository {
	return &organizationRepository{db: db}
}

func (r *organizationRepository) FindAll(page, limit int) ([]entity.Organization, int64, error) {
	var organizations []entity.Organization
	var total int64

	offset := (page - 1) * limit

	err := r.db.Model(&entity.Organization{}).Count(&total).Error
	if err != nil {
		return nil, 0, err
	}

	err = r.db.Offset(offset).Limit(limit).Find(&organizations).Error
	if err != nil {
		return nil, 0, err
	}

	return organizations, total, nil
}

func (r *organizationRepository) FindByID(id uint) (*entity.Organization, error) {
	var org entity.Organization
	err := r.db.First(&org, id).Error
	if err != nil {
		return nil, err
	}
	return &org, nil
}

func (r *organizationRepository) Create(org *entity.Organization) error {
	return r.db.Create(org).Error
}

func (r *organizationRepository) Update(org *entity.Organization) error {
	return r.db.Save(org).Error
}

func (r *organizationRepository) Delete(id uint) error {
	return r.db.Delete(&entity.Organization{}, id).Error
}

func (r *organizationRepository) FindByRegistrantID(registrantID uint) ([]entity.Organization, error) {
	var organizations []entity.Organization
	err := r.db.Where("registrant_id = ?", registrantID).Find(&organizations).Error
	return organizations, err
}