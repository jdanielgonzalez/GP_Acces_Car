package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/camilocorreaUdeA/web_server_2/models"
)

func (c *Controller) CrearUsuario(body []byte) (int64, error) {
	nuevoUsuario := &models.Usuario{}
	err := json.Unmarshal(body, nuevoUsuario)
	if err != nil {
		log.Printf("Error al crear un nuevo usuario: %s", err.Error())
		return 0, fmt.Errorf("Error al crear un nuevo usuario: %s", err.Error())
	}

	valoresColumnas := map[string]interface{}{
		"documento":        nuevoUsuario.Documento,
		"contraseña":       nuevoUsuario.Contraseña,
		"nombres":          nuevoUsuario.Nombres,
		"apellidos":        nuevoUsuario.Apellidos,
		"celular":          nuevoUsuario.Celular,
		"fecha_nacimiento": nuevoUsuario.FechaNacimiento,
		"sexo":             nuevoUsuario.Sexo,
	}

	nuevoId, err := c.repo.Create(context.Background(), crearQuery, valoresColumnas)
	if err != nil {
		log.Printf("Error al crear un nuevo usuario: %s", err.Error())
		return 0, fmt.Errorf("Error al crear un nuevo usuario: %s", err.Error())
	}

	return nuevoId, nil
}
