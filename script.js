let ligada = false;

function alternarLampada() {
  const imagem = document.getElementById("Lampada");
  const botao = document.getElementById("Button");

  if (ligada) {
    imagem.src = "lampada apagada.png";
    imagem.classList.remove("brilhando");
    botao.textContent = "Ligar";
    ligada = false;
  } else {
    imagem.src = "lampada acesa.png";
    imagem.classList.add("brilhando");
    botao.textContent = "Desligar";
    ligada = true;
  }
}
