package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/jdanielgonzalez/GP_Acces_Car/models"
	"github.com/jdanielgonzalez/GP_Acces_Car/repository"
)

var (
	crearQuery = "INSERT INTO usuarios (documento, contrasena, nombres, apellidos, celular, fecha_nacimiento, sexo, correo) VALUES (:documento, :contrasena, :nombres, :apellidos, :celular, :fecha_nacimiento, :sexo, :correo) RETURNING documento"
)

type Controller struct {
	repo repository.Repository[models.Usuario]
}

func NewController(repo repository.Repository[models.Usuario]) (*Controller, error) {
	if repo == nil {
		return nil, fmt.Errorf("para un controlador es necesario un repositorio valido")
	}
	return &Controller{
		repo: repo,
	}, nil
}

func (c *Controller) CrearUsuario(body []byte) (int64, error) {
	nuevoUsuario := &models.Usuario{}
	err := json.Unmarshal(body, nuevoUsuario)
	if err != nil {
		log.Printf("Error al crear un nuevo usuario: %s", err.Error())
		return 0, fmt.Errorf("Error al crear un nuevo usuario: %s", err.Error())
	}

	valoresColumnas := map[string]interface{}{
		"documento":        nuevoUsuario.Documento,
		"contrasena":       nuevoUsuario.Contrasena,
		"nombres":          nuevoUsuario.Nombres,
		"apellidos":        nuevoUsuario.Apellidos,
		"celular":          nuevoUsuario.Celular,
		"fecha_nacimiento": nuevoUsuario.FechaNacimiento,
		"sexo":             nuevoUsuario.Sexo,
		"correo":           nuevoUsuario.Correo,
	}

	nuevoId, err := c.repo.Create(context.Background(), crearQuery, valoresColumnas)
	if err != nil {
		log.Printf("Error al crear un nuevo usuario: %s", err.Error())
		return 0, fmt.Errorf("Error al crear un nuevo usuario: %s", err.Error())
	}

	return nuevoId, nil
}
