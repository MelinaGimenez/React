import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({spents, budget, setBudget, isValidBudget, setIsValidBudget}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidBudget ? (
            <ControlBudget
              budget = {budget}
              spents = {spents}
            />
          ) : (
            <NewBudget
              budget = {budget}
              setBudget = {setBudget}
              setIsValidBudget = {setIsValidBudget}
            />
          )
        }

    </header>
  )
}

export default Header