import React from "react"
import "./header.css"

const Header = ({ name, setName }) => {
  return (
    <header>
        <h1>Menubar</h1>
        {/* REMEBER THIS  */}
        {name ? (
          <button
            onClick={() => {
              setName(null)
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              setName("Javier")
            }}
          >
            Login
          </button>
        )}
    </header>
  )
}

export default Header
