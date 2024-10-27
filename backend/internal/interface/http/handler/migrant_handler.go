package handler

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/usecase"
)

type MigrantHandler struct {
	migrantUseCase usecase.MigrantUseCase
}

func NewMigrantHandler(uc usecase.MigrantUseCase) *MigrantHandler {
	return &MigrantHandler{
		migrantUseCase: uc,
	}
}

func (h *MigrantHandler) GetMigrants(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))

	migrants, total, err := h.migrantUseCase.GetMigrants(page, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch migrants"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": migrants,
		"meta": gin.H{
			"total": total,
			"page":  page,
			"limit": limit,
		},
	})
}

func (h *MigrantHandler) GetMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	migrant, err := h.migrantUseCase.GetMigrant(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Migrant not found"})
		return
	}

	c.JSON(http.StatusOK, migrant)
}

func (h *MigrantHandler) CreateMigrant(c *gin.Context) {
	var migrant entity.Migrant
	if err := c.ShouldBindJSON(&migrant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	migrant.RegistrantID = userID

	if err := h.migrantUseCase.CreateMigrant(&migrant); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create migrant"})
		return
	}

	c.JSON(http.StatusCreated, migrant)
}

func (h *MigrantHandler) UpdateMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var migrant entity.Migrant
	if err := c.ShouldBindJSON(&migrant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	migrant.ID = uint(id)

	if err := h.migrantUseCase.UpdateMigrant(&migrant, userID); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update migrant"})
		return
	}

	c.JSON(http.StatusOK, migrant)
}

func (h *MigrantHandler) DeleteMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	userID := c.GetUint("userID")
	if err := h.migrantUseCase.DeleteMigrant(uint(id), userID); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete migrant"})
		return
	}

	c.Status(http.StatusNoContent)
}