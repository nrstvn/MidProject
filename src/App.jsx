import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './component/header/Header'
import Home from './component/home/home'
import About from './component/about/About'
import "./config/firebase";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
      <About />

    </div>
  )
}

export default App;
