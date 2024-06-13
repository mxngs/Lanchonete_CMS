export async function getIngredientes() {
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const response = await fetch(url)
    const data = await response.json()
    return data.ingrediente
}

export async function postIngrediente(ingrediente) {
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingrediente)
    }
    const response = await fetch(url, options)
    return response.ok
}
export async function deleteIngrediente(id){
    const url = `http://localhost:8080/v1/lanchonete/ingrediente/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}

export async function getUsuario(id) {
    const url = `http://localhost:8080/v1/lanchonete/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.usuario
}
export async function putProduto(id, dados) {
    console.log(id);
    console.log(dados);
    const url = `http://localhost:8080/v1/lanchonete/produto/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }
    const response = await fetch(url, options)
    return response.ok
}