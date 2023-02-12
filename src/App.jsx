import { Wrapper } from './App.styled'
import Tasks from "./components/Tasks/Tasks";
import Header from "./components/Header/Header";
import { useState } from 'react';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  const submitFormHandler = (newTaskData) => {
    setAllTasks((prevTaskData) => {
      return [newTaskData, ...prevTaskData]
    })
  }

  const onClickAddTask = () => {
    setIsEditing(true)
  }

  const stopEditingHandler= () => {
    setIsEditing(false);
  }


  return (
    <Wrapper>
      <Header onClickAddTask={onClickAddTask} isEditing={isEditing} />
      <Tasks isEditing={isEditing} stopEditingHandler={stopEditingHandler} date={currentDate} onSubmitForm={submitFormHandler} allTasks={allTasks} />
    </Wrapper>
  );
}

export default App;
