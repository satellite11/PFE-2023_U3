import React, { useState } from 'react'

const listaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las químeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
]

const Tareas = () => {
    const [tareas, setTareas] = useState(listaEjemplo)
    const [nombreTarea, setNombreTarea] = useState('')

    const handleModificarTarea = (evento) => {
        console.log(evento.target.value)
        setNombreTarea(evento.target.value)
    }

    const handleBotonAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debes escribir una tarea')
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea
            }
    
            setTareas([...tareas, tareaNueva])
            setNombreTarea('')
        }
    }

    const handleEliminarTarea = (id) => {
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }
    
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1>TAREAS</h1>
                </div>
                <div className='col-12'>
                    <label htmlFor="nombre-tarea">Añadir nueva tarea</label>
                    <input type="text" onChange={handleModificarTarea} className='form-control my-2' id="nombre-tarea" value={nombreTarea}/>
                    <button type='submit' onClick={handleBotonAgregarTarea} className='btn btn-primary'>Añadir</button>
                </div>
                <div className="col-12 mt-4">
                    <h2>Lista de tareas</h2>
                </div>
                <div className="col-12">
                    <ul className="list-group">
                        {
                            tareas.map(function(tarea) {
                                return (
                                    <li 
                                    className="list-group-item" key={tarea.id}>{tarea.nombre}
                                    <button type='button' className='btn btn-outline-danger btn-sm ms-1'
                                    onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tareas