'use strict';
import { postProduto, getCategorias, getIngredientes } from "./main.js";

const nome = document.getElementById('nome');
const valor = document.getElementById('valor');
const foto = document.getElementById('foto');
const tabela_nutricional = document.getElementById('tabela_nutricional');
const quantidade = document.getElementById('quantidade');
const cadastrar = document.getElementById('cadastrar');
const descricao = document.getElementById('descricao');
const categorias = document.getElementById('categoria');
const ingredientes = document.getElementById('ingredientes');

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

cadastrar.addEventListener('click', () => {
    const categoriasIn = [];
for (let i = 0; i < categorias.options.length; i++) {
    if (categorias.options[i].selected) {
        categoriasIn.push(parseInt(categorias.options[i].value));
    }
}

// Obter os IDs dos ingredientes selecionados
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
    // const categoriasInput = categoriasIn
    // const ingredientesInput = ingredientesIn

    

    let insert = {
        nome: nomeInput,
        valor: valorInput,
        foto: fotoInput,
        tabela_nutricional: tabelaNutricionalInput,
        quantidade: quantidadeInput,
        descricao: descricaoInput,
        categorias: categoriasIn, // Renomeado para categoriasInput
        ingredientes: ingredientesIn // Renomeado para ingredientesInput
    };

    console.log(insert);

    postProduto(insert);
    // window.location.href = '../telaHome/produtos.html';
});

const inicializarSelects = async () => {
    const categoriasArray = await getCategorias();
    const ingredientesArray = await getIngredientes();

    categoriasArray.forEach(element => {
        let categoria = criarCategoria(element);
        categorias.append(categoria);
    });

    ingredientesArray.forEach(ele => {
        let ingrediente = criarIngrediente(ele);
        ingredientes.append(ingrediente);
    });
};

inicializarSelects();