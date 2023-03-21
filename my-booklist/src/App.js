import React, { useState } from 'react'
import './App.css'

const bookDatabase = {
  javascript : [
    {
      name:"Eloquent JavaScript",
      rating:"4/5"
    },
    {
      name:"You Don't Know JS",
      rating:"3.5/5"
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],

  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
}

const App = () => {

  const [selectedGenre, setGenre] = useState("business")
  function onclickHandler(genre){
    setGenre(genre)
  }
  
  return (
    <div className='container-main'>
      <h1>📚 Good Books</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {Object.keys(bookDatabase).map((genre)=>(
          <button onClick={()=>onclickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div className="output">
        <ul>
          {
           bookDatabase[selectedGenre].map((book)=>(
            <li>
              <div className='list'>{book.name}</div>
              <div className='list'>{book.rating}</div>
            </li>
           )) 
          }
        </ul>
      </div>
    </div>
  )
}

export default App
