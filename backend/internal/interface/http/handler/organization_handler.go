package handler

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/usecase"
)

type OrganizationHandler struct {
	organizationUseCase usecase.OrganizationUseCase
}

func NewOrganizationHandler(uc usecase.OrganizationUseCase) *OrganizationHandler {
	return &OrganizationHandler{
		organizationUseCase: uc,
	}
}

func (h *OrganizationHandler) GetOrganizations(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))

	organizations, total, err := h.organizationUseCase.GetOrganizations(page, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch organizations"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": organizations,
		"meta": gin.H{
			"total": total,
			"page":  page,
			"limit": limit,
		},
	})
}

func (h *OrganizationHandler) GetOrganization(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	organization, err := h.organizationUseCase.GetOrganization(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Organization not found"})
		return
	}

	c.JSON(http.StatusOK, organization)
}

func (h *OrganizationHandler) CreateOrganization(c *gin.Context) {
	var organization entity.Organization
	if err := c.ShouldBindJSON(&organization); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	organization.RegistrantID = userID

	if err := h.organizationUseCase.CreateOrganization(&organization); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create organization"})
		return
	}

	c.JSON(http.StatusCreated, organization)
}

func (h *OrganizationHandler) UpdateOrganization(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var organization entity.Organization
	if err := c.ShouldBindJSON(&organization); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	organization.ID = uint(id)

	if err := h.organizationUseCase.UpdateOrganization(&organization, userID); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update organization"})
		return
	}

	c.JSON(http.StatusOK, organization)
}

func (h *OrganizationHandler) DeleteOrganization(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	userID := c.GetUint("userID")
	if err := h.organizationUseCase.DeleteOrganization(uint(id), userID); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete organization"})
		return
	}

	c.Status(http.StatusNoContent)
}