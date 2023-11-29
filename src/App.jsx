import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import TopBar from './components/TopBar'
import NewTodo from './components/NewTodo'

function App() {
  const [message, setMessage] = useState('')

  const handleMessage = (e) => {
    setMessage(e.target.value)
    console.log('the message is',message)
  }
  
  return (
    <div className="max-w-lg bg-blue-700 rounded-3xl overflow-hidden relative">
      <div className='bg-blue-500 w-full h-full relative'>
        <TopBar 
          name="Von Zaryavtre"
        />
        <Card />
      </div>
      <div className='absolute rounded-full bg-blue-950 w-11 h-11 bottom-6 right-6 cursor-pointer flex justify-center items-center'>
          <div className='w-0.5 h-4 bg-white absolute'></div>
          <div className='w-4 h-0.5 bg-white absolute'></div>
      </div>
      <NewTodo 
        message={handleMessage}
        value={message}
      />
    </div>
  )
}

export default App
