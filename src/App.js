import React, { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Menubar from "./components/Menubar"
import "./App.css"

function App() {
  const [name, setName] = useState("Mason")
  
  return (
    <>
      <Menubar />
      <Main 
      name= {name} 
      fruit="Banana" total={23} 
      isAmazing={true} />
      <Footer />
    </>
  )
}

export default App
