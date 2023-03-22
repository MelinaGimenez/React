import React from 'react'

const NewBudget = () => {
  return (
    <div className='container-budget container shadow'>
        <form className='form'>
            <div className='camp'>
                <label>Definir Presupuesto</label>
                <input
                    className='new-budget'
                    type="text"
                    placeholder='Añade tu Presupuesto'
                />
            </div>
            <input 
                type="submit" 
                value="Añadir"
            />
        </form>
    </div>
  )
}

export default NewBudget