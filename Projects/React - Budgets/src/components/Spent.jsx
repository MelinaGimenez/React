import React from 'react'

import {
            LeadingActions,
            SwipeableList,
            SwipeableListItem,
            SwipeAction,
            TrailingActions
        } from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css"
import {generateDate} from '../helpers/index'

import SavingIcon from '../img/icono_ahorro.svg'
import HomeIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import SpentgIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubsIcon from '../img/icono_suscripciones.svg'

const dictionaryIcons = {
  ahorro : SavingIcon,
  comida : FoodIcon, 
  casa : HomeIcon,
  gastos : SpentgIcon,
  ocio : LeisureIcon,
  salud : HealthIcon, 
  suscripciones : SubsIcon
}

const Spent = ({sp, setEditSpent, deleteSpent}) => {

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpent(sp)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => deleteSpent(sp.id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
  </TrailingActions>
  )

  return (
    <SwipeableList>
    <SwipeableListItem
      //swich delantero
      leadingActions={leadingActions()}
      //swich trasero
      trailingActions={trailingActions()}
    >
    <div className='spent shadow'>
        <div className='content-spent'>
          <img 
            src={dictionaryIcons[sp.category]} 
            alt="" />
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
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Spent