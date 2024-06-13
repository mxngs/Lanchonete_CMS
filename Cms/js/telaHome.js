'use strict';
async function getPedidos(){
    const url = 'https://lanchonete-backend.onrender.com/v1/lanchonete/pedidos'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.pedidos
}
async function getPedido(id){
    const url = `https://lanchonete-backend.onrender.com/v1/lanchonete/pedidos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.pedido
}
import { getUsuario } from "./model/ing.js";
let id = localStorage.getItem('id')
let controle = await getUsuario(id)
console.log(controle);

if (controle[0].cargo == "Cozinheiro") {
    let cont = document.getElementById('controle')

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
    let cont = document.getElementById('controle')

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

async function teste() {
    const listaPedidos = await getPedidos();
    console.log(listaPedidos);
    listaPedidos.forEach(pedidos => {
        criarCardPedido(pedidos);
    });
}
teste()
const container = document.getElementById('container');

function criarCardPedido(info) {
    let cliente = info.cliente
    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]' , 'flex', 'gap-[250px]', 'pt-[25px]'  , 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');
    
    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_pedido;
    
    const dataPedido = document.createElement('p');
    dataPedido.textContent = tratarData (info.data_pedido)
    dataPedido.classList.add('text-black', 'text-2xl');

    function tratarData(string){
        let dataTratada = string.slice(0,10)
        dataTratada = dataTratada.split('-')
        dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
        return dataTratada
    }

    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');

    card1.append(id, dataPedido);
    container.appendChild(card1);
    
    cliente.forEach(element => {
        const idCliente = document.createElement('h3');
        idCliente.textContent = element.id_cliente;
        idCliente.classList.add('text-black', 'text-2xl')
        card1.append(idCliente)
    })
    card1.addEventListener('click', function() {
        colocarInfos(info.id_pedido)
    })
}

async function colocarInfos(id){
    let infos = await getPedido(id)

    let name = document.getElementById('nome')
    name.textContent = `Nome: ${infos[0].cliente[0].nome}`

    let email = document.getElementById('email')
    email.textContent = `Email: ${infos[0].cliente[0].email}`

    let telefone = document.getElementById('telefone')
    telefone.textContent = `Telefone: ${infos[0].cliente[0].telefone}`

    let endereco_entrega = document.getElementById('endereco_entrega')
        endereco_entrega.textContent = `Endereco de entrega: ${infos[0].cliente[0].endereco_entrega}`

        let forma_pagamento = document.getElementById('forma_pagamento')
        forma_pagamento.textContent = `Forma Pagamento: ${infos[0].cliente[0].forma_pagamento}`

        let troco = document.getElementById('troco')
        troco.textContent = `Troco: ${infos[0].cliente[0].troco}`

        let promocao_cupom = document.getElementById('promocao_cupom')
         promocao_cupom.textContent = `Cupom: ${infos[0].cliente[0].promocao_cupom}`

         let foto = document.getElementById('foto')
         foto.src = `${infos[0].produto[0].foto}` 

         let nome = document.getElementById('nome_produto')
         nome.textContent = `Nome do Produto: ${infos[0].produto[0].nome}`
} 