import { useState } from 'react'
import Header from './components/Header'
import iconNewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import SpentsList from './components/SpentsList'
import { generateId } from './helpers'

function App() {

  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [desingModal, setDesingModal] = useState(false);
  const [spents, setSpents] = useState ([])

  //efecto y pantalla del + (agregar gasto)
  const handleNewBudget = () => {
    setModal(true)
    setTimeout(() => {
      setDesingModal(true)
    }, 500);
  }

  //guarda datos form gastos, retorna fecha tambien
  const saveSpents = spent => {
    spent.id = generateId();
    spent.date = Date.now();
    setSpents([...spents, spent])
    
    setDesingModal(false)
    setTimeout(() => {
        setModal(false)
      }, 500);
  }

  return (  
    <div className={modal ? 'fix' : ''}>
      <Header
        spents = {spents}
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      /> 

      {isValidBudget && (
        <>
          <main>
            <SpentsList
              spents={spents}
            />
          </main>
          <div className='new-spent'>
            <img 
              src={iconNewSpent} 
              alt="icono nuevo gasto" 
              onClick={handleNewBudget}/>
          </div>
        </>
      ) }

      {modal && <Modal
        setModal={setModal}   
        desingModal={desingModal}   
        setDesingModal={setDesingModal}
        saveSpents={saveSpents}
      />}

    </div>
  )
}

export default App
