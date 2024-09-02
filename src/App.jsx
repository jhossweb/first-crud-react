import { useState } from 'react'
import './App.css'



function App() {

  const [value, setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(JSON.stringify({value}))
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
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
