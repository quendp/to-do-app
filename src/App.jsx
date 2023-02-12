import { Wrapper } from "./App.styled";
import Tasks from "./components/Tasks/Tasks";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  const submitFormHandler = (newTaskData) => {
    setAllTasks((prevTaskData) => {
      return [newTaskData, ...prevTaskData];
    });
    setIsEditing(false);
  };

  const onClickAddTask = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const onTaskUpdate = (taskId, newStatus) => {
    setAllTasks((prevState) => {
      if (newStatus == "delete") {
       return prevState.filter((task) => task.id !== taskId)
      }
      const newState = prevState.map((obj) => {
        if (obj.id === taskId) {
          return { ...obj, status: newStatus };
        }
        return obj;
      });
      return newState;
    });
  };

  return (
    <Wrapper>
      <Header onClickAddTask={onClickAddTask} isEditing={isEditing} />
      <Tasks
        isEditing={isEditing}
        stopEditingHandler={stopEditingHandler}
        date={currentDate}
        onSubmitForm={submitFormHandler}
        allTasks={allTasks}
        updateTaskHandler={onTaskUpdate}
      />
    </Wrapper>
  );
}

export default App;
