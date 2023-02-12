import React from 'react'
import { ListWrapper } from './TaskList.styled'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = (props) => {
  return (
    <ListWrapper>
      {props.allTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          task={task}
          onDelete={props.onDeleteTask}
        />
      ))}
    </ListWrapper>
  )
}

export default TaskList
