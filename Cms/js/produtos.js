'use strict';
async function getProduto() {
    const url = 'https://lanchonete-backend.onrender.com/v1/lanchonete/produtos'
    const response = await fetch(url)
    const data = await response.json()
    return data.produtos
}
async function deleteProduto(id) {
    try {
        await fetch(`https://lanchonete-backend.onrender.com/v1/lanchonete/produto/${id}`, {
            method: 'DELETE'
        })
        console.log("Produto excluído com sucesso")
    } catch (error) {
        console.error('Erro ao excluir produto: ', error);
    }
}
async function teste() {
    const listaProdutos = await getProduto();
    console.log(listaProdutos);
    listaProdutos.forEach(produtos => {
        criarCardProduto(produtos);
    });
}
teste()
const container = document.getElementById('container');

import { getUsuario, putProduto } from "./model/ing.js";
import { getCategorias, getIngredientes } from "./main.js";

let id = localStorage.getItem('id')
let controle = await getUsuario(id)
console.log(controle);
let cont = document.getElementById('controle')

if (controle[0].cargo == "Cozinhero") {
    let h = document.createElement('hr')
    h.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link = document.createElement('a')
    link.href = '../telaHome/ingredientes.html'
    link.classList.add('shadow-pop')
    link.textContent = 'Ingredientes'

    let h2 = document.createElement('hr')
    h2.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link2 = document.createElement('a')
    link2.href = '../telaHome/produtos.html'
    link2.classList.add('shadow-pop')
    link2.textContent = 'Produtos'

    cont.append(h, link, h2, link2)

}

if (controle[0].cargo == "Gerente") {

    let h = document.createElement('hr')
    h.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link = document.createElement('a')
    link.href = '../telaHome/ingredientes.html'
    link.classList.add('shadow-pop')
    link.textContent = 'Ingredientes'

    let h2 = document.createElement('hr')
    h2.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link2 = document.createElement('a')
    link2.href = '../telaHome/produtos.html'
    link2.classList.add('shadow-pop')
    link2.textContent = 'Produtos'

    let h3 = document.createElement('hr')
    h3.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link3 = document.createElement('a')
    link3.href = '../telaHome/clientes.html'
    link3.classList.add('shadow-pop')
    link3.textContent = 'Clientes'

    cont.append(h, link, h2, link2, h3, link3)

}

function criarCardProduto(info) {
    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]', 'flex', 'gap-[20px]', 'pt-[25px]', 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');

    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold');
    id.textContent = info.id_produto;

    const nome = document.createElement('p');
    nome.textContent = info.nome;
    nome.classList.add('text-black', 'text-2xl', 'ml-[250px]');

    const quantidade = document.createElement('p');
    quantidade.textContent = info.quantidade;
    quantidade.classList.add('text-black', 'text-2xl', 'ml-[180px]')

    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');

    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx', 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');

    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');

    icones.append(iconeEditar, iconeDeletar);
    card1.append(id, nome, quantidade, icones);
    container.appendChild(card1);
    iconeDeletar.addEventListener('click', () => {
        deleteProduto(info.id_produto);
        window.location.reload();
    });
    iconeEditar.addEventListener('click', () => {
        editar(info);
    });
}
const criarCategoria = (cat) => {
    const categoria = document.createElement('option');
    categoria.value = cat.id_categoria; // Aqui atribuímos o ID como valor
    categoria.textContent = cat.nome;
    return categoria;
};

const criarIngrediente = (ing) => {
    const ingrediente = document.createElement('option');
    ingrediente.value = ing.id_ingrediente; // Aqui atribuímos o ID como valor
    ingrediente.textContent = ing.nome;
    return ingrediente;
};
const editar = async (produto) => {
    console.log(produto);
    const form = document.getElementById('form')
    const close = document.getElementById('close')

    form.classList.remove('hidden')
    const nome = document.getElementById('nome');
    const valor = document.getElementById('valor');
    const foto = document.getElementById('foto');
    const tabela_nutricional = document.getElementById('tabela_nutricional');
    const quantidade = document.getElementById('quantidade');
    const cadastrar = document.getElementById('att');
    const descricao = document.getElementById('descricao');
    const categorias = document.getElementById('categoria');
    const ingredientes = document.getElementById('ingredientes');

    nome.value = produto.nome
    valor.value = produto.valor
    foto.value = produto.foto
    tabela_nutricional.value = produto.tabela_nutricional
    quantidade.value = produto.quantidade
    descricao.value = produto.descricao


    cadastrar.addEventListener('click', async() => {
        const categoriasIn = [];
        for (let i = 0; i < categorias.options.length; i++) {
            if (categorias.options[i].selected) {
                categoriasIn.push(parseInt(categorias.options[i].value));
            }
        }
        const ingredientesIn = [];
        for (let i = 0; i < ingredientes.options.length; i++) {
            if (ingredientes.options[i].selected) {
                ingredientesIn.push(parseInt(ingredientes.options[i].value));
            }
        }
        console.log(ingredientesIn);
        const nomeInput = nome.value;
        const valorInput = valor.value;
        const fotoInput = foto.value;
        const tabelaNutricionalInput = tabela_nutricional.value;
        const quantidadeInput = quantidade.value;
        const descricaoInput = descricao.value;
        let insert = {
            nome: nomeInput,
            valor: valorInput,
            foto: fotoInput,
            tabela_nutricional: tabelaNutricionalInput,
            quantidade: quantidadeInput,
            descricao: descricaoInput,
            categorias: categoriasIn,
            ingredientes: ingredientesIn
        };

        console.log(insert);

        let teste = await putProduto(produto.id_produto, insert)
        console.log(teste);
        // window.location.href = '../telaHome/produtos.html';
    });

    close.addEventListener('click', function () {
        form.classList.add('hidden')
    })
}

const inicializarSelects = async () => {
    const categoriasArray = await getCategorias();
    const ingredientesArray = await getIngredientes();
    const categorias = document.getElementById('categoria');
    const ingredientes = document.getElementById('ingredientes');


    categoriasArray.forEach(element => {
        let categoria = criarCategoria(element);
        categorias.append(categoria);
    });

    ingredientesArray.forEach(ele => {
        let ingrediente = criarIngrediente(ele);
        ingredientes.append(ingrediente);
    });
};
inicializarSelects()