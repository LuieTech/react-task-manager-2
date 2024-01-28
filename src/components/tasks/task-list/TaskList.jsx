import React, { useState } from 'react'
import tasksData from "../../../data/tasks.json"
import TaskItem from '../task-item/TaskItem'
import TaskFinder from '../task-finder/TaskFinder'


function TaskList() {

  const [tasks, setTasks] = useState(tasksData)

  const handleDeleteTask = (title) => {

    setTasks(tasks.filter(task => task.title !== title))

  }

  const handleCompleteTask = (title) => {
    const completedTasks = tasks.map((task) => {
      if(task.title === title){
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(completedTasks)
  }
  // const handleCompleteTask = (title) => {
  //   // Se crea una nueva lista de tareas actualizando la propiedad completed donde el título coincide
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.title === title) {
  //       return { ...task, completed: true }; // Crea un nuevo objeto con las propiedades de la tarea y 'completed' actualizado a true
  //     }
  //     return task;
  //   });
  
  //   setTasks(updatedTasks); // Actualiza el estado con la nueva lista de tareas
  // };

  const handleSearchTask = (title) => {
    setTasks(tasks.filter(task => {
      task.title.includes(title)
    }))
  }
  
  return (
      <div className='d-flex flex-column gap-2'>

        <TaskFinder onSearch={handleSearchTask} /> 

        <ul className='list-group'>
          {tasks.map((task, i ) => (
            <TaskItem key={i} 
              task={task} 
              onDeleteTask={handleDeleteTask}
              onCompleteTask={() => handleCompleteTask(task.title)}
            />
          ))}
        </ul>
      
      </div>
  )
}

export default TaskList