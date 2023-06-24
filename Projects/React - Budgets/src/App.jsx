import { useState, useEffect } from 'react'
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
  const [editSpent, setEditSpent] = useState({})

  //al precionar editar completa datos (de edit)
  useEffect(() => {
    if( Object.keys(editSpent).length > 0){
      setModal(true)
      
      setTimeout(() => {
        setDesingModal(true)
      }, 500);
    }
  }, [editSpent])

  //efecto y pantalla del + (agregar gasto)
  const handleNewBudget = () => {
    setModal(true)
    setEditSpent({})
    setTimeout(() => {
      setDesingModal(true)
    }, 500);
  }

  //guarda datos form gastos, retorna fecha / con id actualiza, sino retorna igual
  const saveSpents = spent => {
    if(spent.id) {
      const actualSpent = spents.map(spentState => 
        spentState.id === spent.id ? spent : spentState)
      setSpents(actualSpent)
    } else {
      spent.id = generateId();
      spent.date = Date.now();
      setSpents([...spents, spent])
    }
    
    setDesingModal(false)
    setTimeout(() => {
        setModal(false)
      }, 500);
  }

  const deleteSpent = id => {
    const actualSpent = spents.filter( gasto => gasto.id !== id)
    setSpents(actualSpent)
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
              setEditSpent={setEditSpent}
              deleteSpent={deleteSpent}
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
        editSpent={editSpent}
      />}

    </div>
  )
}

export default App
