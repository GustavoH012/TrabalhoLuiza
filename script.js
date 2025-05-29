let contador = 0;
const contadorElemento = document.getElementById("contador");
const botaoIncrementar = document.getElementById("botao-incrementar");

botaoIncrementar.addEventListener("click", function() {
  contador++;
  contadorElemento.textContent = contador;
});
