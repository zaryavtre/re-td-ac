import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import TopBar from './components/TopBar'
import AddTodo from './components/AddTodo'
import NewTodo from './components/NewTodo'

function App() {
  const [message, setMessage] = useState('')
  const [pushMessage, setPushMessage] = useState([])
  const [visible, setVisible] = useState(true)

  const submitForm = (e) => {
    e.preventDefault()
    setPushMessage(prevPushMessage => {
      const pushTodo = [...prevPushMessage, {title: message, id: prevPushMessage.length}]
      return pushTodo
    })
    setVisible(false)
  }

  const hideForm = (e) => {
    setVisible(false)
  }

  const revealForm = (e) => {
    setVisible(true)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  
  return (
    <div className="max-w-lg h-[40rem] bg-blue-700 rounded-3xl overflow-hidden relative">
      <div className='bg-blue-500 w-full h-full relative'>
        <TopBar 
          name="Von Zaryavtre"
        />
        <div className='px-4'>
          <NewTodo todoTitle={pushMessage}/>
        </div>
      </div>
      <div onClick={revealForm} className='absolute rounded-full bg-blue-950 w-11 h-11 bottom-6 right-6 cursor-pointer flex justify-center items-center'>
          <div className='w-0.5 h-4 bg-white absolute'></div>
          <div className='w-4 h-0.5 bg-white absolute'></div>
      </div>
      <AddTodo 
        submitForm={submitForm}
        message={handleMessage}
        value={message}
        visibility={visible}
        formHide={hideForm}
      />
    </div>
  )
}

export default App
