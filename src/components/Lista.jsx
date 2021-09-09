import React from 'react'
import Tarea from "./Tarea";

function Lista({ listaDeTareas, cambiarDeLista, eliminarTareaDeLista, completada, estilosDeLista }) {

    return (
        <div>
            <>
                {(completada) 
                    ? <h4 class="tituloTareasCompletadas">Tareas completadas</h4> 
                    : <h2 className="tituloTareas">Tareas</h2>
                }
                <ul className={estilosDeLista}>
                    {listaDeTareas.map((value, index) =>
                        <Tarea
                            key={index}
                            tarea={value}
                            id={index}
                            eliminarTareaDeLista={eliminarTareaDeLista}
                            completada={completada}
                            cambiarDeLista={cambiarDeLista}
                        />)}
                </ul>
            </>

        </div>
    )


}

export default Lista
