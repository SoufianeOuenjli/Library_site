import React from 'react'

const Character = ({character:{image, fullName, nickname, interpretedBy, hogwartsHouse}}) => {
    console.log(image)
  return (
    // <h1>ss</h1>
    <div className="card shadow-sm rounded-3 overflow-hidden d-flex justify-content-center align-items-center" >
      <img src={image} className="card-img-top rounded-3" alt={fullName} />
      <div className="card-body p-4">
        <h5 className="card-title text-primary fw-bold">{fullName}</h5>
        <p className="card-text text-muted">{nickname}</p>
        <p className="card-text text-muted">{interpretedBy}</p>
        <p className="card-text text-muted">{hogwartsHouse}</p>
      </div>
    </div>
  )
}

export default Character