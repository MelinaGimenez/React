import React from 'react'

const ControlBudget = ({budget}) => {
  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <p>Grafica Aquí</p>
        </div>
        <div className='container-budget'>
            <p>
                <span>Presupuesto: </span> ${budget}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget