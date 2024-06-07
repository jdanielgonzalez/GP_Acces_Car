package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	// Cargar las variables de entorno desde el archivo .env
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error cargando el archivo .env: %v", err)
	}

	// Obtener la cadena de conexión desde las variables de entorno
	connStr := os.Getenv("DATABASE_URL")
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error al abrir la base de datos: %v", err)
	}
	defer db.Close()

	// Verificar la conexión a la base de datos
	err = db.Ping()
	if err != nil {
		log.Fatalf("No se pudo conectar a la base de datos: %v", err)
	}

	// Insertar los datos en la tabla autos
	_, err = db.Exec(`
        INSERT INTO autos (placa, motor, transmision, combustible, modelo, marca, observacion, kilometraje, linea, categoria)
        VALUES 
        ('LFWO690', 'MOT789123', 'Automatica', 'Gasolina', 2023, 'Mercedes-Benz', 'Interior espacioso y lujoso con asientos de cuero y detalles en madera.', 11000, 'S-Class', NULL)
    `)
	if err != nil {
		log.Fatalf("Error insertando los datos: %v", err)
	}

	fmt.Println("Datos insertados exitosamente")
}
