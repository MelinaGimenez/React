import { useState, useEffect } from 'react'
//grafica instalada de npmjs
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlBudget = ({spents, budget}) => {

  const [ percentage, setPercentage] = useState(0)
  const [ available, setAvailable ] = useState(0)
  const [ outlay, setOutlay ] = useState(0)

  //genera el efecto ante modif spents: sumar gastos / restar disponible
  useEffect(() => {
    const fullSpent = spents.reduce ((full, spent) => spent.amountForm + full, 0);
    const fullAvailable = budget - fullSpent

    //calcula portcentaje gastado y lo anima
    const newPercentage = ((( budget - fullAvailable ) / budget ) * 100).toFixed(2);
    setTimeout(() => {
      setPercentage(newPercentage)
    }, 1000);

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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}% Gastado`}
              styles={buildStyles({
                pathColor: '#3B82F6',
                trailColor: '#F5F5F5',
                textcolor: '#3B82F6'
              })}
            />
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