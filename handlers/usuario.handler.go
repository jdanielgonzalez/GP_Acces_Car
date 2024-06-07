package handlers

import (
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/jdanielgonzalez/GP_Acces_Car/controllers"
)

type HandlerUsuarios struct {
	controller *controllers.Controller
}

func NewHandlerUsuarios(controller *controllers.Controller) (*HandlerUsuarios, error) {
	if controller == nil {
		return nil, fmt.Errorf("se requiere un controlador no nulo para instanciar un handler de usuarios")
	}
	return &HandlerUsuarios{
		controller: controller,
	}, nil
}

func (hc *HandlerUsuarios) CrearUsuario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("Error al leer el cuerpo de la solicitud: %s", err.Error())
			http.Error(w, "Error al leer el cuerpo de la solicitud", http.StatusBadRequest)
			return
		}

		nuevoId, err := hc.controller.CrearUsuario(body)
		if err != nil {
			log.Println("Error al crear un nuevo usuario:", err.Error())
			http.Error(w, "Error al crear un nuevo usuario", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusCreated)
		io.WriteString(w, fmt.Sprintf("ID del nuevo usuario: %d", nuevoId))
	})
}
