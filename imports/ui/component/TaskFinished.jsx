import React from "react";
import "./style/Task.css";

export const TaskFinished = ({ task }) => {
  return (
    <div className="individualTask complete">
      <span>{task.text}</span>
    </div>
  );
};
