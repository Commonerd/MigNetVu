package repository

import "migrant-network-api/internal/domain/entity"

type ConnectionRepository interface {
	FindAll(page, limit int) ([]entity.Connection, int64, error)
	FindByID(id uint) (*entity.Connection, error)
	Create(connection *entity.Connection) error
	Delete(id uint) error
	FindBySourceID(sourceID uint, sourceType string) ([]entity.Connection, error)
	FindByTargetID(targetID uint, targetType string) ([]entity.Connection, error)
}