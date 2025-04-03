import { useState } from 'react'
import './App.css'
import Header from './Header'
import Contant from './Contant'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Contant/>
    <Footer/>
    </>
  )
}

export default App
