import { useState } from "react"
import "./coffee.css"

const Coffee = () => {
  const [coffeeList, setCoffeeList] = useState()
  const getCoffee = (temperature) => {
    // fetch coffee api
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((results) => results.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => alert(err))
  }

  const getCoffeeSync = async (temperature) => {
    try {
      const results = await fetch(
        `https://api.sampleapis.com/coffee/${temperature}`
      )
      const data = await results.json()
      setCoffeeList(data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section id="coffee-content">
      <div>
        {" "}
        <h2>Coffee List</h2>
        <button
          onClick={() => {
            getCoffeeSync("hot")
          }}
        >
          HOT
        </button>
        <button
          onClick={() => {
            getCoffeeSync("iced")
          }}
        >
          ICED
        </button>
      </div>
      <div>
        <div id="coffee-list">
          {!coffeeList ? (
            <p>Loading...</p>
          ) : (
            coffeeList.map((coffee) => <p key={coffee.id}>{coffee.title}</p>)
          )}
        </div>
      </div>
    </section>
  )
}

export default Coffee
