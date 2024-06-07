package main

import (
	"log"
	"net/http"

	"github.com/jdanielgonzalez/GP_Acces_Car/controllers"
	"github.com/jdanielgonzalez/GP_Acces_Car/handlers"
	"github.com/jdanielgonzalez/GP_Acces_Car/models"
	"github.com/jdanielgonzalez/GP_Acces_Car/repository"
	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"
)

/*
vamos a implementar un servidor para una aplicacion ficticia que registra los
comentarios que se hacen en una red social
*/
func main() {

	conn, err := ConectarDB("postgres://postgres.lculrvhbuckpiauukcow:gpacar2024*@aws-0-us-west-1.pooler.supabase.com:6543/postgres", "postgres")
	if err != nil {
		log.Fatalln("error conectando a la base de datos", err.Error())
	}

	bd, err := repository.NewRepository[models.Usuario](conn)
	if err != nil {
		log.Fatalln("fallo al crear una instancia de repositorio", err.Error())
	}

	controller, err := controllers.NewController(bd)
	if err != nil {
		log.Fatalln("fallo al crear una instancia de controller", err.Error())
	}

	handler, err := handlers.NewHandlerUsuarios(controller)
	if err != nil {
		log.Fatalln("fallo al crear una instancia de handler", err.Error())
	}

	mux := http.NewServeMux()
	mux.HandleFunc("POST /crearusuario", handler.CrearUsuario())
	log.Fatal(http.ListenAndServe(":8081", mux))
}

func ConectarDB(url, driver string) (*sqlx.DB, error) {
	pgUrl, _ := pq.ParseURL(url)
	db, err := sqlx.Connect(driver, pgUrl)
	if err != nil {
		log.Printf("fallo la conexion a PostgreSQL, error: %s", err.Error())
		return nil, err
	}

	log.Printf("Nos conectamos bien a la base de datos db: %#v", db)
	return db, nil
}
