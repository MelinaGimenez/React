import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (  
    <h1> <Header
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
    /> </h1>
  )
}

export default App
