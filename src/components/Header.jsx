import React from 'react'

function Header({agregarTareaALista}) {

    const agregarTarea = (e) =>{
        e.preventDefault()
        const nuevaTarea = e.target[0].value
        if(nuevaTarea !== '')
            agregarTareaALista(e.target[0].value)
        else{
            alert('No puedes agregar una tarea sin un contenido');
        }
    }

    return (
        <form className="FormularioHeader" onSubmit={agregarTarea}>
            <input type="text" placeholder="Ingresa una nueva tarea"/>
            <input type="submit" value="Agregar" />
        </form>
    )
}

export default Header
