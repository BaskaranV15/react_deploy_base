import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let num=10;
  let str='baskaran';
  let bool=true;
  let obj={
    "name":"baskaran",
    "age":18,
  };
  let menu=['home','about','contact','blog']

  return (
    <>
      <p>viteLogo</p>
      <p>number:{num}</p>
      <p>string:{str}</p>
      {/* <p>Boolean: {bool.toString()}</p> */}
      <p>boolen:{bool.toString()}</p>
      <p>object:{obj.name},{obj.age}</p>
      <ul>
      {
        menu.map((v, i) => {
          return (
            <li key={i}>
              {v}
            </li>
          )
        })
      }
      </ul>

    </>
  )
}

export default App
