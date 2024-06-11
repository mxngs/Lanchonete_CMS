'use strict'

export async function getIngredientes(){
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const response = await fetch(url)
    const data = await response.json()
    console.log();

    return data.ingrediente
}
export async function postIngrediente(){
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const response = await fetch(url)
    const data = await response.json()
    console.log();

    return data.ingrediente
}
export async function getProdutos(){
    const url = 'http://localhost:8080/v1/lanchonete/produtos'
    const response = await fetch(url)
    const data = await response.json()
    console.log();

    return data.produtos
}
export async function getProduto(id){
    const url = `${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.produto[0]
}
export async function postProduto(produto){
    const url = 'http://localhost:8080/v1/lanchonete/produto'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }

    const response = await fetch(url, options)

    return response.ok
}
export async function putProduto(id, produto){
    const url = `${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }

    const response = await fetch(url, options)


    return response.ok
}
export async function getCategorias(){
    const url = 'http://localhost:8080/v1/lanchonete/categoria'
    const response = await fetch(url)
    const data = await response.json()

    return data.categoria
}