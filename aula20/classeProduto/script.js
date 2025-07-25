import Produto from "./models/Produto.js";

const listaProdutos = [];

function adicionarProduto() {
  const nome = prompt("Digite o nome do produto:");
  const preco = parseFloat(prompt("Digite o preço do produto:"));
  const quantidade = parseInt(prompt("Digite a quantidade do produto:"));

  if (nome && !isNaN(preco) && !isNaN(quantidade)) {
    const produto = new Produto(nome, preco, quantidade);
    listaProdutos.push(produto);
    alert("Produto adicionado com sucesso");
  } else {
    alert("Por favor, preencha todos os campos corretamente");
  }
}

function listarProdutos() {
  document.open();
  if (listaProdutos.length === 0) {
    document.write("Nenhum produto cadastrado.<br>");
    document.close();
    return;
  }
  document.write("Lista de Produtos:<br>");

  listaProdutos.forEach((produto, index) => {
    document.write(`${index + 1}. ${produto.exibirInfo()}<br>`);
    console.log(`${index + 1}. ${produto.exibirInfo()}`);
  });
  document.close();
}

function editarQuantidade() {
  const index = parseInt(
    prompt("Digite o número do produto para editar a quantidade:")
  );

  if (index >= 0 && index < listaProdutos.length) {
    const novaQuantidade = parseInt(prompt("Digite a nova quantidade:"));

    if (!isNaN(novaQuantidade)) {
      listaProdutos[index].atualizarQuantidade(novaQuantidade);
      alert("Quantidade atualizada com sucesso!");
    } else {
      alert("Quantidade Inválida.");
    }
  } else {
    alert("Produto não encontrado");
  }
}

function deletarProduto() {
  const index =
    parseInt(prompt("Digite o número do produto para deletar:")) - 1;
  if (index >= 0 && index < listaProdutos.length) {
    const produtoRemovido = listarProdutos.splice(index, 1)[0];
    alert(`Produto "${produtoRemovido.nome}" deletado com sucesso!`);
  } else {
    alert("Produto não encontrado.");
  }
}

function menu() {
  while (true) {
    const opcao = prompt(
      "Escolha uma opção:\n1. Adicionar produto\n2. Listar produtos\n3. Editar quantidade\n4. Deletar produto\n5. Sair"
    );

    switch (opcao) {
      case "1":
        adicionarProduto();
        break;
      case "2":
        listarProdutos();
        break;
      case "3":
        editarQuantidade();
        break;
      case "4":
        deletarProduto();
        break;
      case "5":
        alert("Saindo...");
        break;

      default:
        alert("Opção inválida.");
        break;
    }
  }
}

//Iniciar o programa
menu();
