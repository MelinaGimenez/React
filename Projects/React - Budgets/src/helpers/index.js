
//funcion generica para id unico
export const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
}

//funcion para agregar/formatear fecha
export const generateDate = date => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return newDate.toLocaleDateString('es-Es', options)
}