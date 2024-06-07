package controllers

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"

	"github.com/jdanielgonzalez/GP_Acces_Car/models"
	"github.com/jdanielgonzalez/GP_Acces_Car/repository"
)

var (
	crearQuery        = "INSERT INTO usuarios (documento, contrasena, nombres, apellidos, celular, fecha_nacimiento, sexo, correo) VALUES (:documento, :contrasena, :nombres, :apellidos, :celular, :fecha_nacimiento, :sexo, :correo) RETURNING documento"
	inicioSesionQuery = "SELECT * FROM usuarios WHERE correo = $1"
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

func (c *Controller) IniciarSesion(body []byte) (bool, error) {
	credenciales := struct {
		Correo     string `json:"correo"`
		Contrasena string `json:"contrasena"`
	}{}

	err := json.Unmarshal(body, &credenciales)
	if err != nil {
		return false, fmt.Errorf("error al decodificar las credenciales: %s", err.Error())
	}

	// Consultar la base de datos para obtener el usuario por correo electrónico
	usuario, err := c.repo.Read(context.Background(), inicioSesionQuery, credenciales.Correo)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil // El correo no existe en la base de datos
		}
		return false, fmt.Errorf("error al consultar la base de datos: %s", err.Error())
	}

	// Verificar si el usuario no existe o la contraseña no coincide
	if usuario == nil || usuario.Contrasena != credenciales.Contrasena {
		return false, nil // El usuario no existe o la contraseña es incorrecta
	}

	// Autenticación exitosa
	return true, nil
}
