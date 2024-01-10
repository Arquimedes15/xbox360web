//Buscar usuarios
export function buscarUser(user, comparativa){
    return user.findIndex(index => index.tag == comparativa.tag)
}