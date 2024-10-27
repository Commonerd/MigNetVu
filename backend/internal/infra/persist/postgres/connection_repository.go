package postgres

import (
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"

	"gorm.io/gorm"
)

type connectionRepository struct {
	db *gorm.DB
}

func NewConnectionRepository(db *gorm.DB) repository.ConnectionRepository {
	return &connectionRepository{db: db}
}

func (r *connectionRepository) FindAll(page, limit int) ([]entity.Connection, int64, error) {
	var connections []entity.Connection
	var total int64

	offset := (page - 1) * limit

	err := r.db.Model(&entity.Connection{}).Count(&total).Error
	if err != nil {
		return nil, 0, err
	}

	err = r.db.Offset(offset).Limit(limit).Find(&connections).Error
	if err != nil {
		return nil, 0, err
	}

	return connections, total, nil
}

func (r *connectionRepository) FindByID(id uint) (*entity.Connection, error) {
	var connection entity.Connection
	err := r.db.First(&connection, id).Error
	if err != nil {
		return nil, err
	}
	return &connection, nil
}

func (r *connectionRepository) Create(connection *entity.Connection) error {
	return r.db.Create(connection).Error
}

func (r *connectionRepository) Delete(id uint) error {
	return r.db.Delete(&entity.Connection{}, id).Error
}

func (r *connectionRepository) FindBySourceID(sourceID uint, sourceType string) ([]entity.Connection, error) {
	var connections []entity.Connection
	err := r.db.Where("source_id = ? AND source_type = ?", sourceID, sourceType).Find(&connections).Error
	return connections, err
}

func (r *connectionRepository) FindByTargetID(targetID uint, targetType string) ([]entity.Connection, error) {
	var connections []entity.Connection
	err := r.db.Where("target_id = ? AND target_type = ?", targetID, targetType).Find(&connections).Error
	return connections, err
}