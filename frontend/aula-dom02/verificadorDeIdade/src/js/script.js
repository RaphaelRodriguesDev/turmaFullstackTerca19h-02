const botao = document.querySelector(".btn");

function verificarIdade() {
  let anoAtual = new Date().getFullYear();
  let anoNascimentoForm = document.querySelector("#txtano");
  let resultado = document.querySelector("#resultado");

  if (anoNascimentoForm.value.length === 0 || anoNascimentoForm.value > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let formSexo = document.getElementsByName("radsex");
    let idade = anoAtual - Number(anoNascimentoForm.value);
    let faixaEtaria = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSexo[0].checked) { 
      if (idade >= 0 && idade < 4) {
        faixaEtaria = "uma bebê";
        img.setAttribute("src", "./assets/bebe-f.jpg");
      } else if (idade >= 4 && idade < 13) {
        faixaEtaria = "uma menina";
        img.setAttribute("src", "./assets/crianca-f.jpeg");
      } else if (idade >= 13 && idade < 21) {
        faixaEtaria = "uma adolescente";
        img.setAttribute("src", "./assets/adolescente-f.jpeg");
      } else if (idade <= 50) {
        faixaEtaria = "uma adulta";
        img.setAttribute("src", "./assets/adulto-f.jpeg");
      } else {
        faixaEtaria = "uma idosa";
        img.setAttribute("src", "./assets/idoso-f.jpeg");
      }
    } else {
      if (idade >= 0 && idade <= 4) {
        faixaEtaria = "um bebê";
        img.setAttribute("src", "./assets/bebe-m.jpeg");
      } else if (idade >= 5 && idade <= 13) {
        faixaEtaria = "um menino";
        img.setAttribute("src", "./assets/crianca-m.jpeg");
      } else if (idade >= 14 && idade <= 21) {
        faixaEtaria = "um adolescente";
        img.setAttribute("src", "./assets/adolescente-m.jpeg");
      } else if (idade <= 50) {
        faixaEtaria = "um adulto";
        img.setAttribute("src", "./assets/adulto-m.jpeg");
      } else {
        faixaEtaria = "um idoso";
        img.setAttribute("src", "./assets/idoso-m.jpeg");
      }
    }

    resultado.innerHTML = `Detectamos ${faixaEtaria} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}

botao.addEventListener("click", verificarIdade);