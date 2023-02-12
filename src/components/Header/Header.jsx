import React from 'react'

const Header = (props) => {
  return (
    <div>
      <button onClick={props.onClickAddTask}>
        Add new task <span> + </span>
      </button>
    </div>
  )
}

export default Header
