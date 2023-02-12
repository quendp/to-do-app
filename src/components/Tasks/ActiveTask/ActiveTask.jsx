import React, { useState } from "react";
import { ButtonSet, CancelBtn, SubmitBtn } from "../../UI/Button.styled";
import { InputSelect } from "../TaskInput/TaskInput.styled";
import {
  CurrentCard,
  Status,
  Title,
  Description,
  Dates,
} from "./ActiveTask.styled";

const ActiveTask = ({ clickedTask, discardHandler, changeStatus }) => {

  const [updatedStatus, setUpdatedStatus] = useState(clickedTask.status);

  const statusChangeHandler = (e) => {
    setUpdatedStatus(e.target.value);
  };

  const updateHandler = () => {
    changeStatus(updatedStatus);
  };

  return (
    <CurrentCard task={clickedTask}>
      <Status accent={clickedTask.accent}>Status : {clickedTask.status}</Status>
      <Title>{clickedTask.title}</Title>
      <Description accent={clickedTask.accent}>
        {clickedTask.description == ""
          ? "No description added."
          : clickedTask.description}
      </Description>

      <InputSelect>
        <label htmlFor="status">Update status : </label>
        <select
          name="status"
          id="status"
          onChange={statusChangeHandler}
          value={updatedStatus}
        >
          <option value="to do">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
          <option value="delete">Delete Task</option>
        </select>
      </InputSelect>
      <Dates>
        <strong>Date and time started</strong> : &nbsp;&nbsp;
        {clickedTask.startDate} &nbsp;&nbsp;&nbsp;
        {clickedTask.startTime}
      </Dates>
      <Dates>
        <strong>Date and time due</strong> : &nbsp;&nbsp;
        {clickedTask.dueDate} &nbsp;&nbsp;&nbsp;
        {clickedTask.dueTime}
      </Dates>
      <ButtonSet>
        <CancelBtn type="button" onClick={discardHandler}>
          Discard
        </CancelBtn>
        <SubmitBtn type="button" onClick={updateHandler}>
          Update
        </SubmitBtn>
      </ButtonSet>
    </CurrentCard>
  );
};

export default ActiveTask;
