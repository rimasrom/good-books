import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='container-main'>
      <h1>📚 Good Books</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div className="button">
        <button className='btn'>JavaScript</button>
        <button className='btn'>Fiction</button>
        <button className='btn'>Business</button>
      </div>
      <hr />
    </div>
  )
}

export default App
