import React from 'react'
import Spent from './Spent'

const SpentsList = ({spents, setEditSpent, deleteSpent, filtered, filteredSpent}) => {
  return (
    <div className='spents-list container'>
        
        {
          filtered ? (
          <>
            <h2>{filteredSpent.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
            {filteredSpent.map(sp => (
              <Spent
                key={sp.id}
                sp={sp}
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
          />
            ))}
          </>
          ) : (
          <>
            <h2>{spents.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
            {spents.map(sp => (
              <Spent
                key={sp.id}
                sp={sp}
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
          />
          ))}
          </>
          )
        }
    </div>
  )
}

export default SpentsList