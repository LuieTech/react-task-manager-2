import React from 'react'


function TaskFinder({className, onSearch }) {



  const handleSearchChange = (event) => {

    const { value } = event.target;

    onSearch(value)

  }

  return (
    <div className={`input-group ${className}`}>
      <span className="input-group-text"><i className='fa fa-search'></i></span>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        onChange={handleSearchChange}
      />
    </div>
  )
}

TaskFinder.defaultProps ={
  className : "",
  onSearch: () => {}

}


export default TaskFinder