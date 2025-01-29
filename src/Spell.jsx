import React from 'react'

const Spell = ({spell:{spell, use}}) => {
    console.log(spell)
  return (
    <div className="card shadow-sm rounded-3 overflow-hidden d-flex justify-content-center align-items-center" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title text-primary fw-bold">{spell}</h5>
        <p className="card-text text-muted">{use}</p>
      </div>
    </div>
  )
}

export default Spell