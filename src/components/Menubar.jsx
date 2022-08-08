import React from "react"
export default function Menubar({name, setName}) {
  return (
    <nav style={{display: "flex", justifyContent: "space-between"}}>
      <span>Menubar</span>
      {/* REMEBER THIS  */}
      {name ? <button onClick={()=>{setName(null)}}>LogOut</button>:<button onClick={()=>{setName("Javier")}}>Login</button>}
    </nav>
  )
}
