package models

import "time"

type Usuario struct {
	Documento       string    `json:"documento" db:"documento"`
	Contraseña      string    `json:"contraseña" db:"contraseña"`
	Nombres         string    `json:"nombres" db:"nombres"`
	Apellidos       string    `json:"apellidos" db:"apellidos"`
	Celular         string    `json:"celular" db:"celular"`
	FechaNacimiento time.Time `json:"fecha_nacimiento" db:"fecha_nacimiento"`
	Sexo            string    `json:"sexo" db:"sexo"`
}
