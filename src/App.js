import './App.css';
import Header from "./components/Header";
import Lista from './components/Lista';
import React, { useState, useEffect } from 'react'


function App() {

  const [listaDeTareas, setlistaDeTareas] = useState([]);
  const [listaDetareasCompletadas, setlistaDeTareasCompletadas] = useState([]);


  const agregarTareaALista = (tarea) => {
    setlistaDeTareas([...listaDeTareas, tarea])
  }
  const agregarTareaCompletada = (tarea) => {
    setlistaDeTareasCompletadas([...listaDetareasCompletadas, tarea])
  }
  const eliminarTareaDeLista = (numElemento, completada) => {
    if (!completada) {
      let nuevaListaDeTareas = listaDeTareas
      nuevaListaDeTareas.splice(numElemento, 1)
      setlistaDeTareas([...nuevaListaDeTareas])
    }
    else {
      let nuevaListaDeTareas = listaDetareasCompletadas
      nuevaListaDeTareas.splice(numElemento, 1)
      setlistaDeTareasCompletadas([...nuevaListaDeTareas])
    }
  }

  useEffect(() => {
    const Almacenamiento = JSON.parse(window.localStorage.getItem('almacenamiento'))
    console.log(Almacenamiento);
    if (Almacenamiento) {
      setlistaDeTareas(Almacenamiento.listaDeTareas)
      setlistaDeTareasCompletadas(Almacenamiento.listaDetareasCompletadas)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('almacenamiento', JSON.stringify({ listaDeTareas: [...listaDeTareas], listaDetareasCompletadas: [...listaDetareasCompletadas] }))
  }, [listaDeTareas, listaDetareasCompletadas])

  return (
    <div className="App">
      <Header agregarTareaALista={agregarTareaALista} />
      {
        (!listaDeTareas.length)
          ? <p className="noHayTareas">No hay tareas actualmente.</p>
          : <Lista
            listaDeTareas={listaDeTareas}
            cambiarDeLista={agregarTareaCompletada}
            eliminarTareaDeLista={eliminarTareaDeLista}
            estilosDeLista="listaDetareas"
          />
      }
      <hr />
      {
        (!listaDetareasCompletadas.length)
          ? ''
          : <Lista
            listaDeTareas={listaDetareasCompletadas}
            cambiarDeLista={agregarTareaALista}
            eliminarTareaDeLista={eliminarTareaDeLista}
            estilosDeLista="listaDetareas completada"
            completada={true}
          />
      }

    </div>
  );
}

export default App;
