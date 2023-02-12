import React, { useState } from "react";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import {TasksWrapper} from "./Tasks.styled"

const Tasks = (props) => {



  const saveTaskDataHandler = (taskData) => {
    const newTaskData = {
      ...taskData,
      id: Math.random().toString()
    }
    props.onSubmitForm(newTaskData)
  }

  return (
    <TasksWrapper>
      {props.isEditing && <TaskInput onSaveTaskData={saveTaskDataHandler} onCancel={props.stopEditingHandler} date={props.date} />}
      <TaskList allTasks={props.allTasks} />
    </TasksWrapper>
  );
};

export default Tasks;
