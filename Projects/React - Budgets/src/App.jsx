import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [budget, setBudget] = useState(0);

  return (  
    <h1> <Header
        budget = {budget}
        setBudget = {setBudget}
    /> </h1>
  )
}

export default App
