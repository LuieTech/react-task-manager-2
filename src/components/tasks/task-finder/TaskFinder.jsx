import React from 'react'


function TaskFinder({className, onSearch, onSort }) {



  const handleSearchChange = (event) => {

    const { value } = event.target;
    // console.debug(value)
    onSearch(value)

  }

  const handleAscSort = () => onSort('asc')
  const handleDescSort = () => onSort('desc')
  

  return (
    <div className={`input-group ${className}`}>
      <span className="input-group-text"><i className='fa fa-search'></i></span>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Username" 
        onChange={handleSearchChange}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={handleAscSort}><i className='fa fa-sort-numeric-asc'></i></button>
      <button className="btn btn-outline-secondary" type="button" onClick={handleDescSort}><i className='fa fa-sort-numeric-desc'></i></button>

    </div>
  )
}

TaskFinder.defaultProps ={
  className : "",
  onSearch: () => {},
  onSort: () => {}
}


export default TaskFinder