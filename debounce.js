import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [users, setUsers] = useState([])

  function debounce(cb, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => cb.apply(args), timeout);
    }
  }

  const handleDebounceChange = debounce(() => console.log("YES"), 1000)
  return(
    <div>
      <h1> HELLO </h1> 
      <input onChange={handleDebounceChange} style={{ height: 40, width: 400 }} type="text" />
      { users &&
        users.map(user => {
          return <p> {user.firstName} {user.lastName} </p>
        })
      }
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
