const lista = [
    "Um", "Dois","Três"
]

 export function getLista(){
    return lista
}
export function limpaLista(){
    lista.splice(0,3)
    return lista
}