//main.js
import { getLista, limparLista } from "./lista.js"
const pEntrada = document.querySelector('#entrada')
const olSaida = document.querySelector('#itens')
const btnAdicionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')
btnLimpar.addEventListener('click',limparElementosDaLista)
function limparElementosDaLista(){
    limparLista()
    atualizarItemDeLista()
}
function atualizarItemDeLista(){
    const lista = getLista()
    olSaida.innerHTML=""

    for (let i = 0; i < lista.length; i++) {

        const item = lista[i]
        const li  = document.createElement('li')
        li.textContent = item
        olSaida.appendChild(li)
    }
}
atualizarItemDeLista()
