// Variables para el texto y resultado
let texto = document.getElementById('textarea');
let contenedor = document.getElementById('resultadoContainer');
let respuesta = document.getElementById('resultado');
let alerta = document.getElementById('error');

// Variables para los botones de cifrado
const encBtn = document.getElementById('encriptarBtn');
const desBtn = document.getElementById('descifrarBtn');

texto.addEventListener('input', function(){
    let obtenerTexto = texto.value;

    if (obtenerTexto != obtenerTexto.toLowerCase()) {
        alerta.classList.add('show');

        encBtn.classList.add('disabled');
        desBtn.classList.add('disabled');

        encBtn.onclick = null;
        desBtn.onclick = null;
    }else{
        alerta.classList.remove('show');

        if (obtenerTexto.length > 0) {
            encBtn.classList.remove('disabled');
            desBtn.classList.remove('disabled');

            encBtn.onclick = cifrar;
            desBtn.onclick = descifrar;
        }else{
            encBtn.classList.add('disabled');
            desBtn.classList.add('disabled');

            respuesta.innerText = '';
            contenedor.classList.remove('rotate');

            encBtn.onclick = null;
            desBtn.onclick = descifrar;
        }

        // FUNCIONES PARA TRANSFORMAR LOS TEXTOS
        function cifrar(){
            let texto = quitarAcentos(obtenerTexto)
            .replace(/a/g, "ai")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

            respuesta.innerText = texto;
            contenedor.classList.add('rotate');
        }

        function descifrar(){
            let texto = quitarAcentos(obtenerTexto)
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

            respuesta.innerText = texto;
            contenedor.classList.add('rotate');
        }

        function quitarAcentos(cadena){
            const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
            return cadena.split('').map( letra => acentos[letra] || letra).join('').toString(); 
        }
    }
});