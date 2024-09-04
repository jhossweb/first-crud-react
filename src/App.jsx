import { useState } from 'react'
import './App.css'
import { registerApi } from './services/api'



function App() {

  const [value, setValue] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    
   
    console.log(await registerApi(value ))
  }

  const handleOnChange = (e) => {
      const value =  setValue(e.target.value)

      return { value }
  }
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleOnChange}/>
        <button type="submit"> save </button>
      </form>
    </>
  )
}

export default App
