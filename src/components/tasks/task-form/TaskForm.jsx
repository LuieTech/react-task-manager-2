import React, { useState } from 'react'

const validations = {
  title: (value) => {
    let message;
    if(!value){
      message = "title is required"
    } else if(value.length < 3){
      message = 'title needs at least 3 chars'
    }
    return message;
  }
}

const initialState = {
  task: {
    title: "",
    completed: false
  },
  errors:{
    title: validations.title('')
  }, 
  touch: {
    title : false
  }
}

function TaskForm({onCreate}) {

  const [state, setState] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      task: {
        ...state.task,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }



  const handleBlur = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      touch: {
        ...state.touch,
        [name] : true
      }
    })
  }

  const isValid = () => {
    const { errors } = state;
    return  !Object.keys(errors).some(error => errors[error])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isValid()){
      console.log(state.task)
      onCreate(task)
      setState(initialState)
    }
  }


  const { task, errors, touch } = state

  return (
    <form onSubmit={handleSubmit}>
      {/* TITLE */}
      <div className="input-group mb-3">
        <span className="input-group-text"><i className="fa fa-tag"></i></span>
        <input type="text" 
          className={`form-control ${ touch.title && errors.title ? 'is-invalid' : ""}`}
          placeholder="Task name"
          name='title'
          value={task.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="btn btn-outline-secondary" type="submit" disabled={!isValid()}><i className="fa fa-plus"></i></button>
        { touch.title && errors.title && (<div className='invalid-feedback'>{errors.title}</div>)}
      </div>
    </form>
  )
}

TaskForm.defaultProps = {
  onCreate : () => {}
}

export default TaskForm