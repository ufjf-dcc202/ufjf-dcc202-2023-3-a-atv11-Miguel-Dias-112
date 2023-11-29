//main.js
import { getLista } from "./lista"
const pEntrada = document.querySelector('#entrada')
const olSaida = document.querySelector('#itens')
const btnAdicionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')

olSaida.innerHTML=""
function atualizarItemDeLista(){
    const lista = getLista()
    for (let i = 0; i < array.length; i++) {
        const item = lista[i]
        const li  = document.createElement('li')
        li.textContent = item
    }
}
atualizarItemDeLista()