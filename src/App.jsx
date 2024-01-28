import { useState } from 'react'

import TaskList from './components/tasks/task-list/TaskList'
import TaskFinder from './components/tasks/task-finder/TaskFinder'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container py-5'>
      <TaskList />
    </div>
  )
}

export default App
