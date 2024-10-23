import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import Card2 from './Components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className=' flex flex-wrap justify-around '>
        <Card title = " Welcome to My Page" Refer = "Click here"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card2 title = " Welcome to My Page" Refer = "Click here" />
        <Card2/>
        <Card2/>
        <Card2/>
        
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
