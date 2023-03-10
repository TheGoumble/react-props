import React from "react"
import "./studentCard.css"

const StudentCard = ({ student }) => {
  return (
    <section id="student-content">
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Id: {student.id}</p>
      <p>Term: {student.term}</p>
    </section>
  )
}

export default StudentCard