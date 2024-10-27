package postgres

import (
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"

	"gorm.io/gorm"
)

type migrantRepository struct {
	db *gorm.DB
}

func NewMigrantRepository(db *gorm.DB) repository.MigrantRepository {
	return &migrantRepository{db: db}
}

func (r *migrantRepository) FindAll(page, limit int) ([]entity.Migrant, int64, error) {
	var migrants []entity.Migrant
	var total int64

	offset := (page - 1) * limit

	err := r.db.Model(&entity.Migrant{}).Count(&total).Error
	if err != nil {
		return nil, 0, err
	}

	err = r.db.Offset(offset).Limit(limit).Find(&migrants).Error
	if err != nil {
		return nil, 0, err
	}

	return migrants, total, nil
}

func (r *migrantRepository) FindByID(id uint) (*entity.Migrant, error) {
	var migrant entity.Migrant
	err := r.db.First(&migrant, id).Error
	if err != nil {
		return nil, err
	}
	return &migrant, nil
}

func (r *migrantRepository) Create(migrant *entity.Migrant) error {
	return r.db.Create(migrant).Error
}

func (r *migrantRepository) Update(migrant *entity.Migrant) error {
	return r.db.Save(migrant).Error
}

func (r *migrantRepository) Delete(id uint) error {
	return r.db.Delete(&entity.Migrant{}, id).Error
}

func (r *migrantRepository) FindByRegistrantID(registrantID uint) ([]entity.Migrant, error) {
	var migrants []entity.Migrant
	err := r.db.Where("registrant_id = ?", registrantID).Find(&migrants).Error
	return migrants, err
}