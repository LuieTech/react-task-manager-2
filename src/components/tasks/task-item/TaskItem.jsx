import React from 'react'
import './TaskItem.css'

function TaskItem({task, onDeleteTask, onCompleteTask}) {

  

  return (

      <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-secondary' : ""}`}>
        <span className={`${task.completed ? "text-decoration-line-through" : "" }`}>{task.title}</span>
        <div className="task-actions d-flex gap-2">
          
          <i className='fa fa-times text-danger' 
            role='button' 
            onClick={() => onDeleteTask(task.title)}
          >

          </i>
          <i className={`fa fa-check ${task.completed ? "" : "text-success"}` }
            role='button'
            onClick={onCompleteTask}
          >
          </i>

        </div>
      </li>

  )
}

TaskItem.defaultProps = {
  onDeleteTask: () => {},
  onCompleteTask: () => {}
}

export default TaskItem