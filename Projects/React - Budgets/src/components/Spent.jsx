import React from 'react'
import {generateDate} from '../helpers/index'

const Spent = ({sp}) => {
  return (
    <div className='spent shadow'>
        <div className='content-spent'>
          <div className='description-spent'>
            <p className='category'>{sp.category}</p>
            <p className='name-spent'>{sp.name}</p>
            <p className='date-gasto'>
              Agregado el: {''}
              <span>{generateDate(sp.date)}</span>
            </p>
          </div>
          <p className='amount-spent'>${sp.amountForm}</p>
        </div>
    </div>
  )
}

export default Spent