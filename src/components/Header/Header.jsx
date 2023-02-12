import React from 'react'
import { HeaderWrapper, AddTaskBtn } from './Header.styled'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <AddTaskBtn onClick={props.onClickAddTask}>
        Add new task <span> + </span>
      </AddTaskBtn>
    </HeaderWrapper>
  )
}

export default Header
