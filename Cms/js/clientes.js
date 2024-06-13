'use strict';
async function getCliente(){
    const url = 'http://localhost:8080/v1/lanchonete/cliente'
    const response = await fetch(url)
    const data = await response.json()
    return data.cliente
}

async function teste() {
    const listaCliente = await getCliente();
    console.log(listaCliente);
    listaCliente.forEach(cliente => {
        criarCardCliente(cliente);
    });
}
teste()

import { getUsuario } from "./model/ing.js";
let id = localStorage.getItem('id')
let controle = await getUsuario(id)
console.log(controle);

if (controle[0].cargo == "Atendente") {
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
const container = document.getElementById('container');

function criarCardCliente(info) {
    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]' , 'flex', 'gap-[250px]', 'pt-[25px]'  , 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');
    
    // const card2 = document.createElement('div')
    // card2.classList.add('top-[240px]', 'drop-shadow-lg', 'w-[910px]', 'h-[85px]', 'bg-white', 'rounded-[20px]','grid', 'grid-cols-4', 'p-6');
    
    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_cliente;
    
    const nome = document.createElement('p');
    nome.textContent = info.nome;
    nome.classList.add('text-black', 'text-2xl');

    const email = document.createElement('p');
    email.textContent = info.email;
    email.classList.add('text-black', 'text-2xl')

    
    
    // const valor = document.createElement('p');
    // valor.textContent = 'R$' + info.valor;
    // valor.classList.add('text-black', 'text-2xl', 'ml-10');
    
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');
    
    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx' , 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');
    
    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');
    
    icones.append(iconeEditar, iconeDeletar);
    card1.append(id, nome, email, icones);
    container.appendChild(card1);
    // card2.append(card1)
    
    // iconeEditar.addEventListener('click', () => {
    //     window.location.href = './editarFilme.html?id=' + info.id;
    // });
    
    // iconeDeletar.addEventListener('click', () => {
    //     deleteFilme(info.id);
    //     window.location.reload();
    // });
}

//const add = document.getElementById('add');

// add.addEventListener('click', () => {
//     window.location.href = './cadastro.html';
// });


