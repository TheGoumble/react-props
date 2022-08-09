import React, { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Menubar from "./components/Menubar"
import "./App.css"
import Coffee from "./components/Coffee"

function App() {
  const [name, setName] = useState("Mason")

  return (
    <>
      <Menubar name={name} setName = {setName}/>
      <Main name={name} />
      <Coffee/> 
      <Footer name ={name}/>
    </>
  )
}

export default App
