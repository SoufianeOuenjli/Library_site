import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { setBooks } from './BookSlice';
import { useDispatch, useSelector } from 'react-redux';


const Book = ({book:{cover, title, pages, releaseDate, description}}) => {
  const [isLicked, setIsLicked] = useState(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    setIsLicked(!isLicked)
    dispatch(setBooks())
  }

    // console.log(props)
  return (
    <div
      className="card shadow-sm rounded-3 overflow-hidden d-flex justify-content-center align-items-center"
      style={{
        width: "18rem",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "rgba(255, 113, 236, 0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={cover}
        className="card-img-top mx-5 mt-3 rounded-3 "
        alt="Book Cover"
        style={{ width: "250px" , height: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{title}</h5>
        <p className="card-text text-muted">{`${pages} pages · Released: ${releaseDate}`}</p>
        {/* <p className="text-secondary small">{description.slice(0, 80)}...</p> */}
        <div className="d-flex justify-content-between align-items-center mt-auto" style={{position: "absolute", bottom: 10, right: 10, width: "100%"}}>   
          <button className='btn  btn-sm btn-primary mx-3' onClick={() => handleClick()}>Read</button>
          <FontAwesomeIcon icon={faHeart} className={isLicked ? "text-danger" : "text-gray"} style={{ fontSize: "1.5em" }}  onClick={() => setIsLicked(!isLicked)}/>
        </div>
      </div>
    </div>
  )
}

export default Book