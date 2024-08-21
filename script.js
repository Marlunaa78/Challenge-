const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar=document.querySelector(".copiar")

function btnEncriptar() {


const textoencriptado=encriptar(textArea.value);
mensaje.value=textoencriptado
textArea.value="";
mensaje.style.backgroundImage="none"

}


function encriptar(stringEncriptado){
  let matrizCodigo = [["e","enter"],["i","imes"] ,["a","ai"] ,["o","ober"] ,["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

     for(let i=0; i< matrizCodigo.length; i ++){
       if(stringEncriptado.includes(matrizCodigo[i][0])){
          stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
      }

return stringEncriptado;
    }
 
 function btnDesencriptar(){
  const textoencriptado=desencriptar(textArea.value)
  mensaje.value=textoencriptado
  textArea.value="";
 
}
  
  
  
  function desencriptar(stringDesencriptado){
      let matrizCodigo = [["e","enter"],["i","imes"] ,["a","ai"] ,["o","ober"] ,["u","ufat"]];
      stringDesencriptado =stringDesencriptado.toLowerCase()
       for(let i=0; i< matrizCodigo.length; i ++){
         if(stringDesencriptado.includes(matrizCodigo[i][1])){
          stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
      }
   return stringDesencriptado;
}  
botonCopiar.addEventListener("click", function() {
  const texto = mensaje.value.trim();

  if (texto && texto !== "Ningún mensaje fue encontrado") {
      navigator.clipboard.writeText(texto)
          .catch(err => {
              console.error("Error al copiar el texto: ", err);
          });
  } else {
      mensaje.value = "Ningún mensaje fue encontrado";
  }
});