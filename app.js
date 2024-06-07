var vEstadoEye = false;
var imagenes = [
    "img/imgLogin2.png",
    "img/imgLogin.jpg",
    "img/imgLogin2.png",
    "img/imgLogin.jpg"
  ];
document.addEventListener("DOMContentLoaded", function(){


  
  
  
  setInterval(cambiarFondo, 5000);
  

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
    })
});

function did(id){
    return document.getElementById(id)
}

function dqs(qs){
    return document.querySelector(qs)
}

function cambiarFondo(){

    var indice = 0;
  var miDiv = document.getElementById("contenedor_2");


    miDiv.style.backgroundImage = "url('" + imagenes[indice] + "')";
    indice = (indice + 1) % imagenes.length; 
}