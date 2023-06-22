import React from 'react'
import Spent from './Spent'

const SpentsList = ({spents, setEditSpent}) => {
  return (
    <div className='spents-list container'>
        <h2>{spents.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
        {spents.map(sp => (
            <Spent
                key={sp.id}
                sp={sp}
                setEditSpent={setEditSpent}
            />
        ))}
    </div>
  )
}

export default SpentsList