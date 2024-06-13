'use strict';

import { getIngredientes, deleteIngrediente } from "./model/ing.js";
import { getUsuario } from "./model/ing.js";

// Obtém o ID do usuário do localStorage
let id = localStorage.getItem('id');
let controle = await getUsuario(id);
console.log(controle);

// Função para verificar e adicionar links dependendo do cargo
function adicionarLinksControle(controle) {
    let cont = document.getElementById('controle');
    let h = document.createElement('hr');
    h.classList.add('border-black', 'mt-[15px]', 'w-[80px]');

    let link1 = document.createElement('a');
    link1.href = '../telaHome/ingredientes.html';
    link1.classList.add('shadow-pop');
    link1.textContent = 'Ingredientes';

    let h2 = document.createElement('hr');
    h2.classList.add('border-black', 'mt-[15px]', 'w-[80px]');

    let link2 = document.createElement('a');
    link2.href = '../telaHome/produtos.html';
    link2.classList.add('shadow-pop');
    link2.textContent = 'Produtos';

    cont.append(h, link1, h2, link2);

    if (controle[0].cargo === "Gerente") {
        let h3 = document.createElement('hr');
        h3.classList.add('border-black', 'mt-[15px]', 'w-[80px]');

        let link3 = document.createElement('a');
        link3.href = '../telaHome/clientes.html';
        link3.classList.add('shadow-pop');
        link3.textContent = 'Clientes';

        cont.append(h3, link3);
    }
}

// Função para criar um card de ingrediente
function criarCardIngrediente(info) {
    const container = document.getElementById('container');

    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]', 'flex', 'gap-[20px]', 'pt-[25px]', 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'rounded-[20px]', 'bg-[#A2C91F]'); // Cor de fundo padrão verde

    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_ingrediente;

    const nomeIngrediente = document.createElement('p');
    nomeIngrediente.textContent = info.nome;
    nomeIngrediente.classList.add('text-black', 'text-2xl', 'ml-[250px]');

    const quantidadeIngrediente = document.createElement('p');
    quantidadeIngrediente.textContent = info.quantidade;
    quantidadeIngrediente.classList.add('text-black', 'text-2xl', 'ml-[180px]');

    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');

    const iconeDeletar = document.createElement('img');
    iconeDeletar.src = '../img/lixeira.png';
    iconeDeletar.classList.add('max-h-[40px]', 'min-h-[40px]', 'max-w-[40px]', 'min-w-[40px]');

    icones.append(iconeDeletar);
    card1.append(id, nomeIngrediente, quantidadeIngrediente, icones);
    container.append(card1);

    iconeDeletar.addEventListener('click', ()=> {
        deleteIngrediente(info.id_ingrediente);
        window.location.reload();
    });

    // Convertendo a quantidade para número inteiro para comparar
    const quantidade = parseInt(info.quantidade);

    // Verifica se a quantidade é menor que 12 para mudar o estilo do container
    if (quantidade < 12) {
        card1.style.backgroundColor = '#da6565'; // Define o fundo do container como vermelho
    }
}

// Função para exibir os ingredientes e aplicar lógica de alerta
async function exibirIngredientes() {
    const listaIngredientes = await getIngredientes();
    console.log(listaIngredientes);

    let alertaProdutosBaixos = []; // Array para armazenar nomes de produtos com baixo estoque

    listaIngredientes.forEach(ingrediente => {
        criarCardIngrediente(ingrediente);
        // Verifica se a quantidade do ingrediente é menor que 12
        if (parseInt(ingrediente.quantidade) < 12) {
            alertaProdutosBaixos.push(ingrediente.nome);
        }
    });

    // Se houver produtos com quantidade baixa, exibe o alerta
    if (alertaProdutosBaixos.length > 0) {
        alert(`Produtos com baixo estoque: ${alertaProdutosBaixos.join(', ')}`);
    }
}

// Executa a função principal para exibir os ingredientes
exibirIngredientes();
adicionarLinksControle()