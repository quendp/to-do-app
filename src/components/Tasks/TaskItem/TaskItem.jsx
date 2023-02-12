import React from "react";
import { Card, CardTitle, CardStatus, CardMeta } from "./TaskItem.styled";

const TaskItem = ({ task }) => {
  return (
    <Card color={task.color}>
      <CardStatus status={task.status}>
        <span>{task.status}</span>
      </CardStatus>
      <CardTitle color={task.accent}>
        {task.title}
      </CardTitle>
      <CardMeta accent={task.accent}>
        <p>
            Start : &nbsp;&nbsp;
          <span>{task.dueDate}</span>
          <span>{task.dueTime}</span>
        </p>
        <p>
            Due : 
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.dueDate}</span>
          <span>{task.dueTime}</span>
        </p>
      </CardMeta>
    </Card>
  );
};

export default TaskItem;
