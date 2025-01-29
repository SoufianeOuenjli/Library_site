import { useState } from 'react'
import Book from './Book'
import Nav from './Nav'
import Books from './Books'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    {/* <BrowserRouter> */}
        {/* <Nav /> */}
        <Books />
      {/* </BrowserRouter>     */}
    </>
  )
}

export default App
