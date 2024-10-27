package usecase

import (
	"errors"
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/domain/repository"
)

type OrganizationUseCase interface {
	GetOrganizations(page, limit int) ([]entity.Organization, int64, error)
	GetOrganization(id uint) (*entity.Organization, error)
	CreateOrganization(org *entity.Organization) error
	UpdateOrganization(org *entity.Organization, userID uint) error
	DeleteOrganization(id, userID uint) error
}

type organizationUseCase struct {
	orgRepo repository.OrganizationRepository
}

func NewOrganizationUseCase(repo repository.OrganizationRepository) OrganizationUseCase {
	return &organizationUseCase{
		orgRepo: repo,
	}
}

func (uc *organizationUseCase) GetOrganizations(page, limit int) ([]entity.Organization, int64, error) {
	return uc.orgRepo.FindAll(page, limit)
}

func (uc *organizationUseCase) GetOrganization(id uint) (*entity.Organization, error) {
	return uc.orgRepo.FindByID(id)
}

func (uc *organizationUseCase) CreateOrganization(org *entity.Organization) error {
	return uc.orgRepo.Create(org)
}

func (uc *organizationUseCase) UpdateOrganization(org *entity.Organization, userID uint) error {
	existing, err := uc.orgRepo.FindByID(org.ID)
	if err != nil {
		return err
	}

	if existing.RegistrantID != userID {
		return errors.New("unauthorized to modify this organization")
	}

	return uc.orgRepo.Update(org)
}

func (uc *organizationUseCase) DeleteOrganization(id, userID uint) error {
	existing, err := uc.orgRepo.FindByID(id)
	if err != nil {
		return err
	}

	if existing.RegistrantID != userID {
		return errors.New("unauthorized to delete this organization")
	}

	return uc.orgRepo.Delete(id)
}