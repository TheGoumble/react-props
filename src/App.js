import React, { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import "./App.css"
import Coffee from "./components/Coffee"
import Header from "./components/Header"

function App() {
  const [name, setName] = useState("Mason")

  return (
    <>
      <Header name={name} setName={setName} />
      <div id="page-content">
        <Main name={name} />
        <Coffee />
      </div>
      <Footer name={name} />
    </>
  )
}

export default App
