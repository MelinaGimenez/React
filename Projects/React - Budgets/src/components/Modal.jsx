import React from 'react'
import closeBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false)
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
    </div>
  )
}

export default Modal