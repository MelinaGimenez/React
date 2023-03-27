import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('');

    //verif ingreso informacion
    const handleBudget = (e) => {
        e.preventDefault();

        if(!budget || budget <0){
            setMessage('No es un presupuesto válido')
            return
        }
        setMessage('')
        setIsValidBudget(true)

    }

  return (
    <div className='container-budget container shadow'>
        <form onSubmit = {handleBudget} className='form'>
            <div className='camp'>
                <label>Definir Presupuesto</label>
                <input
                    className='new-budget'
                    type="number"
                    placeholder='Añade tu Presupuesto'
                    value= {budget}
                    //evento modif state cuando recibe importe
                    onChange={e => setBudget (Number(e.target.value))}
                />
            </div>
            <input 
                type="submit" 
                value="Añadir"
            />

            {message && <Message tipe="error">{message}</Message>}

        </form>
    </div>
  )
}

export default NewBudget