import React from 'react'

const ControlBudget = ({budget}) => {

  //funcion para formatear a pesos
  const formatQuantity = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <p>Grafica Aquí</p>
        </div>
        <div className='container-budget'>
            <p>
                <span>Presupuesto: </span> {formatQuantity(budget)}
            </p>
            <p>
                <span>Disponible: </span> {formatQuantity(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatQuantity(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget