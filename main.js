//main.js
import { getLista, limpaLista ,adicionarNaLista} from "./lista.js"
const pEntrada = document.querySelector('#entrada')
const olSaida = document.querySelector('#itens')
const btnAdicionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')


btnLimpar.addEventListener('click',limparElementosDaLista)
btnAdicionar.addEventListener('click',addElementosDaLista)

function addElementosDaLista(){
    const texto = pEntrada.textContent
    adicionarNaLista(texto)
    atualizarItemDeLista()
}
function limparElementosDaLista(){
    limpaLista()
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
