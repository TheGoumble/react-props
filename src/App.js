import React, { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Menubar from "./components/Menubar"
import "./App.css"

function App() {
  const [name, setName] = useState("Mason")

  return (
    <>
      <Menubar name={name} setName = {setName}/>
      <Main name={name} />
      <Footer />
    </>
  )
}

export default App
