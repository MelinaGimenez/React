import { useState, useEffect } from 'react'

const ControlBudget = ({spents, budget}) => {

  const [ available, setAvailable ] = useState(0)
  const [ outlay, setOutlay ] = useState(0)

  //genera el efecto ante modif spents: sumar gastos / restar disponible
  useEffect(() => {
    const fullSpent = spents.reduce ((full, spent) => spent.amountForm + full, 0);
    const fullAvailable = budget - fullSpent

    setOutlay(fullSpent)
    setAvailable(fullAvailable)
  }, [spents])


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
                <span>Disponible: </span> {formatQuantity(available)}
            </p>
            <p>
                <span>Gastado: </span> {formatQuantity(outlay)}
            </p>
        </div>
    </div>
  )
}

export default ControlBudget