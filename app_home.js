var vEstadoEye = false;
var vVentanaVehiculos = false;
var vVentanaAsistencia = false;
var vVentanaServicios = false;
var vVentanaBuscar = false;
var arrFlujoCard = [
    {
    placa: "abc123",
    titulo: "Chevrolet Onix Turbro", 
    descripcion: "Vehiculo en excelente condiciones",
    transimision: "Manual",
    capacidad: "4 Personas",
    ubicacion: "Medellín, Antioquia",
    precio: "$180.000",
    disponible: {
        estado: "Disponible para tomar ahora",
        fecha: "",
    },
    urlFoto: "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/3107d069-ec8a-4fbf-b72b-9467d6b78b53/v-1679523132/Desktop.webp"
},
{
    placa: "dfr567",
    titulo: "Mazda 3 Gran Touring", 
    descripcion: "Vehiculo Mazda en excelente condiciones",
    transimision: "Automatico",
    capacidad: "4 Personas",
    ubicacion: "Bogotá, Antioquia",
    precio: "$240.000",
    disponible: {
        estado: "Disponible hasta el ",
        fecha: "2024-05-22",
    },
    urlFoto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d012fe15a0bd47fe9bea418a3bec101b.jpg"
},
{
    placa: "wer234",
    titulo: "Kia cerato d34", 
    descripcion: "Vehiculo Kia en excelente condiciones",
    transimision: "Automatico",
    capacidad: "5 Personas",
    ubicacion: "Cali, Antioquia",
    precio: "$220.000",
    disponible: {
        estado: "Disponible para tomar ahora",
        fecha: "",
    },
    urlFoto: "https://www.deagenciapanama.com/wp-content/uploads/2021/09/c3r4to-798x466.png.webp"
}
];
var arrFlujoCardInd = 0;

var imagenes = [
    "img/imgLogin2.png",
    "img/imgLogin.jpg",
    "img/imgLogin2.png",
    "img/imgLogin.jpg"
];

function did(id) { return document.getElementById(id) }
function dqs(qs) { return document.querySelector(qs) }


document.addEventListener("DOMContentLoaded", function () {
    cargarClickPestanias();
    efectosTipoVehiculos();

    did('btn_arrow_next').addEventListener("click", ()=>{
        dqs('.titulo_card_car h1').innerHTML = arrFlujoCard[arrFlujoCardInd].titulo;
        dqs('.d_descripcion_car').innerHTML = arrFlujoCard[arrFlujoCardInd].descripcion;
        dqs('.p_transmision').innerHTML = arrFlujoCard[arrFlujoCardInd].transimision;
        dqs('.p_capacidad').innerHTML = arrFlujoCard[arrFlujoCardInd].capacidad;
        dqs('.p_ubicacion').innerHTML = arrFlujoCard[arrFlujoCardInd].ubicacion;
        dqs('.p_disponibilidad').innerHTML = arrFlujoCard[arrFlujoCardInd].disponible.estado;
        dqs('#img_card_car').src =  arrFlujoCard[arrFlujoCardInd].urlFoto;
        dqs('.ctr_cotizacion_dias2 h4:nth-child(2)').innerHTML = arrFlujoCard[arrFlujoCardInd].precio;
       //arrFlujoCard[arrFlujoCardInd].
       arrFlujoCardInd++;
       if(arrFlujoCardInd == arrFlujoCard.length ){
        arrFlujoCardInd = 0;
    }
    })

    /*
        did('opc_registrar').addEventListener("click",function(event){
    
            dqs('#cont_2').style.display = "none"
            did('cont_3').style.display = "flex"
            dqs('.contenedor_1_2').style.display = "none"
        })
    
        did('opc_iniciar').addEventListener("click", function(){
            dqs('#cont_2').style.display = "flex"
            did('cont_3').style.display = "none"
            dqs('.contenedor_1_2').style.display = "flex"   
        })
    
        did('btn_password_see').addEventListener("click", function(){
    
            if(!vEstadoEye){
                did('btn_password_see').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
              </svg>`
              did('lu_password').type = "text"
            }else{
                did('btn_password_see').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
              </svg>`
              did('lu_password').type = "password"
            }
            vEstadoEye = !vEstadoEye;
        })*/
});
function restablecerFondos(){
    dqs('.cont_etiqueta_principal_Automoviles').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Automoviles > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Camionetas').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Camionetas > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Deportivos').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Deportivos > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Electricos').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Electricos > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Vans').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Vans > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Motocicletas').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Motocicletas > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Buses').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Buses > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Camiones').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Camiones > div').classList.remove('classHover2');
    
}

function efectosTipoVehiculos() {
    dqs('.cont_etiqueta_principal_Automoviles').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Automoviles').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Automoviles > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Camionetas').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Camionetas').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Camionetas > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Deportivos').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Deportivos').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Deportivos > div').classList.add('classHover2');

    })

    dqs('.cont_etiqueta_principal_Electricos').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Electricos').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Electricos > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Vans').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Vans').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Vans > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Motocicletas').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Motocicletas').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Motocicletas > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Buses').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Buses').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Buses > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Camiones').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Camiones').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Camiones > div').classList.add('classHover2');
    })
}

function cargarClickPestanias() {
    did('btn_vehiculos').addEventListener("click", function () {

        if (!vVentanaVehiculos) {
            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaVehiculos = true;
                did('i_vehiculos').classList.remove("bi-caret-down-fill")
                did('i_vehiculos').classList.add("bi-caret-up-fill");
                did('i_vehiculos').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_vehiculos').style.display = "block"
            }, 500)
        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_vehiculos').classList.remove("bi-caret-up-fill")
            did('i_vehiculos').classList.add("bi-caret-down-fill");
            did('i_vehiculos').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_vehiculos').style.display = "none"
            vVentanaVehiculos = false;

        }

    })

    did('btn_asistencia').addEventListener("click", function () {
        if (!vVentanaAsistencia) {
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaAsistencia = true;
                did('i_asistencia').classList.remove("bi-caret-down-fill")
                did('i_asistencia').classList.add("bi-caret-up-fill");
                did('i_asistencia').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_asistencia').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_asistencia').classList.remove("bi-caret-up-fill")
            did('i_asistencia').classList.add("bi-caret-down-fill");
            did('i_asistencia').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_asistencia').style.display = "none"
            vVentanaAsistencia = false;

        }

    })


    did('btn_servicios').addEventListener("click", function () {
        if (!vVentanaServicios) {

            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaServicios = true;
                did('i_servicios').classList.remove("bi-caret-down-fill")
                did('i_servicios').classList.add("bi-caret-up-fill");
                did('i_servicios').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_servicios').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_servicios').classList.remove("bi-caret-up-fill")
            did('i_servicios').classList.add("bi-caret-down-fill");
            did('i_servicios').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_servicios').style.display = "none"
            vVentanaServicios = false;

        }
    })

    did('btn_buscar').addEventListener("click", function () {
        if (!vVentanaBuscar) {

            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaBuscar = true;
                did('i_buscar').classList.remove("bi-caret-down-fill")
                did('i_buscar').classList.add("bi-caret-up-fill");
                did('i_buscar').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_buscar').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_buscar').classList.remove("bi-caret-up-fill")
            did('i_buscar').classList.add("bi-caret-down-fill");
            did('i_buscar').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_buscar').style.display = "none"
            vVentanaBuscar = false;

        }
    })
}

/*
function cambiarFondo(){

    var indice = 0;
  var miDiv = document.getElementById("contenedor_2");


    miDiv.style.backgroundImage = "url('" + imagenes[indice] + "')";
    indice = (indice + 1) % imagenes.length; 
}*/