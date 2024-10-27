package handler

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"migrant-network-api/internal/domain/entity"
	"migrant-network-api/internal/usecase"
)

type ConnectionHandler struct {
	connectionUseCase usecase.ConnectionUseCase
}

func NewConnectionHandler(uc usecase.ConnectionUseCase) *ConnectionHandler {
	return &ConnectionHandler{
		connectionUseCase: uc,
	}
}

func (h *ConnectionHandler) GetConnections(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))
	sourceID := c.Query("sourceId")
	sourceType := c.Query("sourceType")
	targetID := c.Query("targetId")
	targetType := c.Query("targetType")

	var connections []entity.Connection
	var total int64
	var err error

	if sourceID != "" && sourceType != "" {
		sid, _ := strconv.ParseUint(sourceID, 10, 32)
		connections, err = h.connectionUseCase.GetConnectionsBySource(uint(sid), sourceType)
	} else if targetID != "" && targetType != "" {
		tid, _ := strconv.ParseUint(targetID, 10, 32)
		connections, err = h.connectionUseCase.GetConnectionsByTarget(uint(tid), targetType)
	} else {
		connections, total, err = h.connectionUseCase.GetConnections(page, limit)
	}

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch connections"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": connections,
		"meta": gin.H{
			"total": total,
			"page":  page,
			"limit": limit,
		},
	})
}

func (h *ConnectionHandler) CreateConnection(c *gin.Context) {
	var connection entity.Connection
	if err := c.ShouldBindJSON(&connection); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.connectionUseCase.CreateConnection(&connection); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create connection"})
		return
	}

	c.JSON(http.StatusCreated, connection)
}

func (h *ConnectionHandler) DeleteConnection(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}

	if err := h.connectionUseCase.DeleteConnection(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete connection"})
		return
	}

	c.Status(http.StatusNoContent)
}