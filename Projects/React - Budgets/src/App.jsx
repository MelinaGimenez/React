import { useState } from 'react'
import Header from './components/Header'
import iconNewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {

  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [desingModal, setDesingModal] = useState(false);
  const [expense, setExpense] = useState ([])

  //efecto y pantalla del + (agregar gasto)
  const handleNewBudget = () => {
    setModal(true)
    setTimeout(() => {
      setDesingModal(true)
    }, 500);
  }

  const saveExpense = expense => {
    console.log(expense)
  }

  return (  
    <div>
      <Header
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      /> 

      {isValidBudget && (
        <div className='new-spent'>
          <img 
            src={iconNewSpent} 
            alt="icono nuevo gasto" 
            onClick={handleNewBudget}/>
        </div>
      ) }

      {modal && <Modal
        setModal={setModal}   
        desingModal={desingModal}   
        setDesingModal={setDesingModal}
        saveExpense={saveExpense}
      />}

    </div>
  )
}

export default App
