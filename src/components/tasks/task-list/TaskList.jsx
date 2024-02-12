import React, { useState } from 'react'
import tasksData from "../../../data/tasks.json"
import TaskItem from '../task-item/TaskItem'
import TaskFinder from '../task-finder/TaskFinder'
import {faker} from '@faker-js/faker'
import TaskForm from '../task-form/TaskForm'


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

  const handleSearchTask = (value) => {

    if(!value){
      setTasks(tasksData)
    } else {
    setTasks(tasks.filter(task => { 
      return task.title.toLocaleLowerCase().includes(value.toLowerCase())
    }))
  }
  }

  const handleCreateRandomTask = () => {

    setTasks([
      ...tasks,
      {title: faker.lorem.sentence(5), "completed": false}
    ])

  }

  const handleSortTasks = (orientation) => {

    switch(orientation){
      case 'asc':
        setTasks([...tasks].sort((a,b) => a.title.localeCompare(b.title) ))
        break;
      case 'desc':
        setTasks([...tasks].sort((a,b) => -1 * a.title.localeCompare(b.title) ) )

        //setTasks([...tasks].sort((a,b) => b.title.localeCompare(a.title)))
        break;
      default:  
    }

  }

  const handleCreateTask = (task) => {
   
    setTasks([
      ...tasks,
      task
    ])

  }
  
  return (
      <div className='d-flex flex-column gap-2'>
        <div className='d-flex gap-2'>
         <TaskFinder className="className" onSearch={handleSearchTask} onSort={handleSortTasks}/>
         <button className='btn btn-primary' onClick={handleCreateRandomTask}><i className='fa fa-plus'></i></button> 
        </div>
        <ul className='list-group'>
          {tasks.map((task, i ) => (
            <TaskItem key={i} 
              task={task} 
              onDeleteTask={handleDeleteTask}
              onCompleteTask={() => handleCompleteTask(task.title)}
            />
          ))}
        </ul>
        <TaskForm onCreate={handleCreateTask} />
      </div>
  )
}

export default TaskList

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