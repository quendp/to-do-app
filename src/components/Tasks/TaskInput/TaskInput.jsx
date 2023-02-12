import React, { useState } from "react";
import { ButtonSet, SubmitBtn, CancelBtn } from "../../UI/Button.styled";
import {
  StyledInput,
  InputGroup,
  TaskTitle,
  TaskDesc,
  InputSelect,
  InputDate
} from "./TaskInput.styled";

const TaskInput = (props) => {
  const date = props.date;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let currentDate = `${year}-${month > 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  }`;

  let currentTime = `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }`;

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("to do");
  const [enteredColor, setEnteredColor] = useState("--c");
  const [enteredSDateTime, setEnteredSDateTime] = useState(
    `${currentDate}T${currentTime}`
  );
  const [enteredDDateTime, setEnteredDDateTime] = useState(
    `${currentDate}T${currentTime}`
  );

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setEnteredDesc(e.target.value);
  };
  const statusChangeHandler = (e) => {
    setEnteredStatus(e.target.value);
  };
  const colorChangeHandler = (e) => {
    setEnteredColor(e.target.value);
  };
  const sDateTimeChangeHandler = (e) => {
    setEnteredSDateTime(e.target.value);
  };
  const dDateTimeChangeHandler = (e) => {
    setEnteredDDateTime(e.target.value);
  };

  const timeValueHandler = (timeValue) => {
    let timeSplit = timeValue.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
      hours = hours > 9 ? hours : `0${hours}`;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    return hours + ":" + minutes + " " + meridian;
  };

  const dateValueHandler = (dateValueHandler) => {
    const dateArr = dateValueHandler.split("-");
    let dateMonth;
    switch (dateArr[1]) {
      case "01":
        dateMonth = "Jan";
        break;
      case "02":
        dateMonth = "Feb";
        break;
      case "03":
        dateMonth = "Mar";
        break;
      case "04":
        dateMonth = "Apr";
        break;
      case "05":
        dateMonth = "May";
        break;
      case "06":
        dateMonth = "Jun";
        break;
      case "07":
        dateMonth = "Jul";
        break;
      case "08":
        dateMonth = "Aug";
        break;
      case "09":
        dateMonth = "Sep";
        break;
      case "10":
        dateMonth = "Oct";
        break;
      case "11":
        dateMonth = "Nov";
        break;
      case "12":
        dateMonth = "Dec";
        break;
      default:
        dateMonth = "Dec";
    }

    return `${dateMonth} ${dateArr[2]}, ${dateArr[0]}`;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const rawSDateTime = enteredSDateTime.split("T");
    const sDate = dateValueHandler(rawSDateTime[0]);
    const sTime = timeValueHandler(rawSDateTime[1]);

    const rawDDateTime = enteredDDateTime.split("T");
    const dDate = dateValueHandler(rawDDateTime[0]);
    const dTime = timeValueHandler(rawDDateTime[1]);

    const dueTimeStamp = new Date(enteredDDateTime);

    const TaskData = {
      title: enteredTitle,
      description: enteredDesc,
      status: enteredStatus,
      color: `var(${enteredColor}-a)`,
      accent: `var(${enteredColor}-b)`,
      startDate: sDate,
      startTime: sTime,
      dueDate: dDate,
      dueTime: dTime,
      dueTimeStamp: dueTimeStamp.valueOf(),
    };

    props.onSaveTaskData(TaskData);
    setEnteredTitle("");
    setEnteredDesc("");
    setEnteredStatus("to do");
    setEnteredColor("--c");
    setEnteredSDateTime(`${currentDate}T${currentTime}`);
    setEnteredDDateTime(`${currentDate}T${currentTime}`);
  };

  return (
    <StyledInput action="#" onSubmit={submitHandler}>
      <TaskTitle enteredTitle={enteredTitle}>
        <input
          type="text"
          id="title"
          onChange={titleChangeHandler}
          value={enteredTitle}
          maxlength="200"
          required
        />
        <label htmlFor="title">Add Title</label>
      </TaskTitle>
      <InputGroup>
        <InputSelect enteredColor={enteredStatus == "to do" ? "--f-a": enteredStatus == "in progress" ? "--b-b": "--j-a" }>
          <label htmlFor="status">Status : </label>
          <select
            name="status"
            id="status"
            onChange={statusChangeHandler}
            value={enteredStatus}
          >
            <option value="to do">To Do</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </InputSelect>
        <InputSelect enteredColor={enteredColor+"-a"}>
          <label htmlFor="color">Theme : </label>
          <select
            name="color"
            id="color"
            onChange={colorChangeHandler}
            value={enteredColor}
          >
            <option value="--a" style={{ backgroundColor: "var(--a-a)" }}>
              Lemon chiffon
            </option>
            <option value="--b" style={{ backgroundColor: "var(--b-a)" }}>
              Champagne pink
            </option>
            <option value="--c" style={{ backgroundColor: "var(--c-a)" }}>
              Tea rose
            </option>
            <option value="--d" style={{ backgroundColor: "var(--d-a)" }}>
              Pink lavender
            </option>
            <option value="--e" style={{ backgroundColor: "var(--e-a)" }}>
              Mauve
            </option>
            <option value="--f" style={{ backgroundColor: "var(--f-a)" }}>
              Jordy blue
            </option>
            <option value="--g" style={{ backgroundColor: "var(--g-a)" }}>
              Non photo blue
            </option>
            <option value="--h" style={{ backgroundColor: "var(--h-a)" }}>
              Electric blue
            </option>
            <option value="--i" style={{ backgroundColor: "var(--a-a)" }}>
              Aquamarine
            </option>
            <option value="--j" style={{ backgroundColor: "var(--a-a)" }}>
              Celadon
            </option>
          </select>
        </InputSelect>
      </InputGroup>
      <InputGroup>
        <InputDate>
          <label htmlFor="sDateTime">Start : </label>
          <input
            id="sDateTime"
            name="sDateTime"
            type="datetime-local"
            value={enteredSDateTime}
            onChange={sDateTimeChangeHandler}
          />
        </InputDate>
        <InputDate>
          <label htmlFor="dDateTime">Due : </label>
          <input
            id="dDateTime"
            name="dDateTime"
            type="datetime-local"
            value={enteredDDateTime}
            onChange={dDateTimeChangeHandler}
          />
        </InputDate>
      </InputGroup>
      <TaskDesc enteredDesc={enteredDesc}>
        <textarea
          id="description"
          name="description"
          onChange={descChangeHandler}
          value={enteredDesc}
          placeholder="Add description"
        >
          Type your task description here...
        </textarea>
      </TaskDesc>
      <ButtonSet>
        <CancelBtn type="button" onClick={props.onCancel}>
          Cancel
        </CancelBtn>
        <SubmitBtn type="submit">Add Task</SubmitBtn>
      </ButtonSet>
    </StyledInput>
  );
};

export default TaskInput;
