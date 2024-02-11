function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
  
    let textoCripado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCripado;
      tituloMensagem.textContent = "Parabéns!! Texto encriptado com sucesso @_@";
      paragrafo.textContent = "";
      boneco = boneco.src = "./img/alien.png";
    } else {
        boneco.src = "./img/encriptado.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Insira um texto que deseja encriptar ou desencriptar";
        swal("Ooops!", "Você deve inserir um texto, blz cumpad!", "warning");

      
    }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let boneco = document.getElementById("boneco");

  let textoCripado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCripado;
      tituloMensagem.textContent = "Parabéns!! Texto Desencriptado com sucesso @_@";
      paragrafo.textContent = "";
      boneco.src = "./img/desss.png";
    } else {
      boneco.src = "./img/encriptado.jpg";
      tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
      paragrafo.textContent = "Insira um texto que deseja encriptar ou desencriptar";
      swal("Ooops!", "Você deve inserir um texto, blz cumpad!", "warning");
    }
}