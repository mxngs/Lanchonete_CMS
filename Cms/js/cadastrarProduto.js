
'use strict'
import {postProduto, getCategorias, getIngredientes} from "./main.js"


// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const foto = document.getElementById('foto')
const tabela_nutricional = document.getElementById('tabela_nutricional')
const quantidade = document.getElementById('quantidade')
const cadastrar = document.getElementById('cadastrar')
const descricao = document.getElementById('descricao')
const categorias = document.getElementById('categoria')
const ingredientes = document.getElementById('ingredientes')

const criarCategoria = (cat) =>{
    const categoria = document.createElement('option')
    categoria.value = cat.nome
    categoria.id = cat.id_categoria
    categoria.textContent = cat.nome

    return categoria
}
const criarIngrediente = (ing) =>{
    const ingrediente = document.createElement('option')
    ingrediente.value = ing.nome
    ingrediente.id = ing.id_ingrediente
    ingrediente.textContent = ing.nome

    return ingrediente
}


cadastrar.addEventListener('click', ()=>{

    const nomeInput = nome.value
    const valorInput = valor.value
    const fotoInput = foto.value
    const tabelaNutricionalInput = tabela_nutricional.value
    const quantidadeInput = quantidade.value
    const descricaoInput = descricao.value
    const categoriaInput = categorias.value
    const ingredientesInput = ingredientes.value
    

    const insert ={
        nome: nomeInput,
        valor: valorInput,
        foto: fotoInput,
        tabela_nutricional:tabelaNutricionalInput,
        quantidade: quantidadeInput,       
        descricao: descricaoInput,
        categoria: categoriaInput,
        ingredientes: ingredientesInput
        
    }
    postProduto(insert)
    window.location.href = '../telaHome/produtos.html'
})


const teste = async() =>{
    const cat = await getCategorias()
    const ingr = await getIngredientes()
    console.log(cat);
    
    cat.forEach(element => {
        let categoria = criarCategoria(element)
        categorias.append(categoria)
    });
    ingr.forEach(ele=>{
        let ingrediente = criarIngrediente(ele)
        ingredientes.append(ingrediente)
    })
}

teste()