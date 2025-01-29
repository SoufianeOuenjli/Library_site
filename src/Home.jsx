import React from 'react'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Welcome to my Library</h1>
          <p>
            This website is a collection of all the books I have read and loved.
            You can browse through the books by clicking on the "Books" tab,
            and filter the books by clicking on the tags.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="./public/cover.jpg"
            className="img-fluid"
            alt="books"
          />
        </div>
      </div>
    </div>
  )
}

export default Home