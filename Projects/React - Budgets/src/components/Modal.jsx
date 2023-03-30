import React from 'react'
import closeBtn from '../img/cerrar.svg'

const Modal = ({setModal, desingModal, setDesingModal}) => {

    //regresa estado original, //efecto y pantalla del + (agregar gasto) retirado
    const ocultarModal = () => {
        setDesingModal(false)
        setTimeout(() => {
            setModal(false)
          }, 500);
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
        <form className={`form ${desingModal ? "desing" : 'close'}`}>
            <legend>Nuevo Gasto</legend>
        </form>
    </div>
  )
}

export default Modal