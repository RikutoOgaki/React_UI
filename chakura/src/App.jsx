import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Chakra from './components/chakra'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Chakra/>
    </div>
  )
}

export default App
