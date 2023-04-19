import React from 'react'
import { useState } from 'react'
import Message from './Message'
import closeBtn from '../img/cerrar.svg'

const Modal = ({setModal, desingModal, setDesingModal, saveSpents}) => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [amountForm, setAmountForm] = useState('')
    const [category, setCategory] = useState('')

    //regresa estado original, //efecto y pantalla del + (agregar gasto) retirado
    const ocultarModal = () => {
        setDesingModal(false)
        setTimeout(() => {
            setModal(false)
          }, 500);
    }
    
    //valida form agrega gasto
    const handleSubmit = e => {
        e.preventDefault();
        if([ name, amountForm, category ].includes('')){
            setMessage('Todos los campos son obligatorios')
            setTimeout(() => {
                setMessage('')
            }, 2500);
            return;
        }
        saveSpents({name, amountForm, category})
    }


  return (
    <div className='modal'>
        <div className='close-modal'>
            <img 
                src={closeBtn} 
                alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`form ${desingModal ? "desing" : 'close'}`}
        >
            <legend>Nuevo Gasto</legend>
            {message && <Message tipe="error">{message}</Message>}
            <div className='camp'>
                <label htmlFor="name">Nombre del Gasto</label>
                <input 
                    id='name' 
                    type="text" 
                    placeholder='Añade el nombre del Gasto'
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />
            </div>
            <div className='camp'>
                <label htmlFor="amountForm">Cantidad</label>
                <input 
                    id='amountForm' 
                    type="number" 
                    placeholder='Añade la cantidad del Gasto: ej. 300' 
                    value={amountForm}
                    onChange={ e => setAmountForm(Number(e.target.value))}
                />
            </div>
            <div className='camp'>
                <label htmlFor="category">Categoria</label>
                <select 
                    id="category"                     
                    value={category}
                    onChange={ e => setCategory(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos varios">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit" 
                value="Añadir Gasto" 
            />
        </form>
    </div>
  )
}

export default Modal