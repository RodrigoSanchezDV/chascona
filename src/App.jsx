import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 class="title">PARA MI CHASCONA FAVORITA s2</h2>

      <div class="container">
        <img src="./1.jpg" alt="" />
        <img src="./2.jpg" alt="" />
        <img src="./3.jpg" alt="" />
      </div>

      <h2 class="pd">Con cariño. El hacker.</h2>
    </>


  )
}

export default App
