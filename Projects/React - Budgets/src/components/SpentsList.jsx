import React from 'react'
import Spent from './Spent'

const SpentsList = ({spents}) => {
  return (
    <div className='spents-list container'>
        <h2>{spents.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
        {spents.map(sp => (
            <Spent
                key={sp.id}
                sp={sp}
            />
        ))}
    </div>
  )
}

export default SpentsList