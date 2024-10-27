package usecase

import (
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"
)

type ConnectionUseCase interface {
	GetConnections(page, limit int) ([]entity.Connection, int64, error)
	GetConnection(id uint) (*entity.Connection, error)
	CreateConnection(connection *entity.Connection) error
	DeleteConnection(id uint) error
	GetConnectionsBySource(sourceID uint, sourceType string) ([]entity.Connection, error)
	GetConnectionsByTarget(targetID uint, targetType string) ([]entity.Connection, error)
}

type connectionUseCase struct {
	connRepo repository.ConnectionRepository
}

func NewConnectionUseCase(repo repository.ConnectionRepository) ConnectionUseCase {
	return &connectionUseCase{
		connRepo: repo,
	}
}

func (uc *connectionUseCase) GetConnections(page, limit int) ([]entity.Connection, int64, error) {
	return uc.connRepo.FindAll(page, limit)
}

func (uc *connectionUseCase) GetConnection(id uint) (*entity.Connection, error) {
	return uc.connRepo.FindByID(id)
}

func (uc *connectionUseCase) CreateConnection(connection *entity.Connection) error {
	if connection.Strength < 1 || connection.Strength > 5 {
		return errors.New("connection strength must be between 1 and 5")
	}
	return uc.connRepo.Create(connection)
}

func (uc *connectionUseCase) DeleteConnection(id uint) error {
	return uc.connRepo.Delete(id)
}

func (uc *connectionUseCase) GetConnectionsBySource(sourceID uint, sourceType string) ([]entity.Connection, error) {
	return uc.connRepo.FindBySourceID(sourceID, sourceType)
}

func (uc *connectionUseCase) GetConnectionsByTarget(targetID uint, targetType string) ([]entity.Connection, error) {
	return uc.connRepo.FindByTargetID(targetID, targetType)
}