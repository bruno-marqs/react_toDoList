import React, { useState } from 'react'
import './App.css'

const App = () => {
  // let message = 'Hello world'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  return(
    <>
      <div className="container"></div>
    
    </>
  )
}

export default App;
