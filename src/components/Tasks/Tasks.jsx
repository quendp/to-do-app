import React, { useState } from "react";
import ActiveTask from "./ActiveTask/ActiveTask";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import {
  TasksWrapper,
  FormBackground,
  CardBackground,

} from "./Tasks.styled";

const Tasks = (props) => {
  const [clickedTask, setClickedTask] = useState();

  const saveTaskDataHandler = (taskData) => {
    const newTaskData = {
      ...taskData,
      id: Math.random().toString(),
    };
    props.onSubmitForm(newTaskData);
  };

  const onShowCard = (taskId) => {
    const currentTask = props.allTasks.filter((task) => task.id == taskId);
    setClickedTask(currentTask[0]);
  };

  const closeCard = () => {
    setClickedTask();
  };

  const updateHandler = (newStatus) => {
    if (clickedTask){
      props.updateTaskHandler(clickedTask.id, newStatus)
    }
    setTimeout(() => {
      closeCard();
    }, 100);
  }

  return (
    <TasksWrapper>
      {props.isEditing && (
        <>
          <FormBackground onClick={props.stopEditingHandler} />
          <TaskInput
            onSaveTaskData={saveTaskDataHandler}
            onCancel={props.stopEditingHandler}
            date={props.date}
          />
        </>
      )}
      {!props.isEditing && clickedTask && (
        <>
          <CardBackground onClick={closeCard} />
          <ActiveTask clickedTask={clickedTask} discardHandler={closeCard} changeStatus={updateHandler} />
        </>
      )}
      {props.allTasks.length == 0 && <h2>No tasks added yet.</h2>}
      {props.allTasks.length > 0 && (
        <TaskList allTasks={props.allTasks} onShowCard={onShowCard} />
      )}
    </TasksWrapper>
  );
};

export default Tasks;
