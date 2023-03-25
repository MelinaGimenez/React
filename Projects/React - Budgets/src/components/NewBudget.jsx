import React from 'react'

const NewBudget = ({budget, setBudget}) => {
  return (
    <div className='container-budget container shadow'>
        <form className='form'>
            <div className='camp'>
                <label>Definir Presupuesto</label>
                <input
                    className='new-budget'
                    type="text"
                    placeholder='Añade tu Presupuesto'
                    value= {budget}
                    //evento modif state cuando recibe importe
                    onChange={e => setBudget (e.target.value)}
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