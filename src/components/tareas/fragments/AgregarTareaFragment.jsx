import React, { useState } from 'react'

const AgregarTareaFragment = ({nombreTarea, handleModificarTarea, handleBotonAgregarTarea}) => {
    return (
        <>
            <div className='col-12'>
                <label htmlFor="nombre-tarea">Añadir nueva tarea</label>
                <input type="text" className='form-control my-2' id="nombre-tarea" value={nombreTarea} onChange={handleModificarTarea} />
                <button type='button' className='btn btn-primary mt-3' onClick={handleBotonAgregarTarea}>Añadir</button>
            </div>
        </>
    )
}

export default AgregarTareaFragment