package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"migrant-network-api/internal/models"
	"migrant-network-api/internal/services"
)

func GetMigrants(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))

	migrants, total, err := services.GetMigrants(page, limit)
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

func GetMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	migrant, err := services.GetMigrantByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Migrant not found"})
		return
	}

	c.JSON(http.StatusOK, migrant)
}

func CreateMigrant(c *gin.Context) {
	var migrant models.Migrant
	if err := c.ShouldBindJSON(&migrant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	migrant.RegistrantID = userID

	if err := services.CreateMigrant(&migrant); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create migrant"})
		return
	}

	c.JSON(http.StatusCreated, migrant)
}

func UpdateMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	var migrant models.Migrant
	if err := c.ShouldBindJSON(&migrant); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetUint("userID")
	if !services.CanModifyMigrant(uint(id), userID) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Not authorized to modify this migrant"})
		return
	}

	migrant.ID = uint(id)
	if err := services.UpdateMigrant(&migrant); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update migrant"})
		return
	}

	c.JSON(http.StatusOK, migrant)
}

func DeleteMigrant(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	userID := c.GetUint("userID")
	if !services.CanModifyMigrant(uint(id), userID) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Not authorized to delete this migrant"})
		return
	}

	if err := services.DeleteMigrant(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete migrant"})
		return
	}

	c.Status(http.StatusNoContent)
}