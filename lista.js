const lista = [
    "Um", "Dois","Três"
]

 export function getLista(){
    return lista
}
export function limpaLista(){
    lista.splice(0)
    return lista
}
export function adicionarNaLista(novoItem){
    lista.push(novoItem)
}