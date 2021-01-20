import React from "react";

export const NormalTask = ({
  task,
  checkTask,
  editTask,
  deleteTask,
  visible,
}) => {
  return (
    <div className="individualTask" style={{ display: visible }}>
      <span>{task.text}</span>
      <div className="options">
        <div className="deleteItemOption">
          <label className="checkbox">
            <input type="checkbox" onClick={() => deleteTask(task)} />
            <i className="fas fa-trash fa-lg"></i>
          </label>
        </div>
        <div className="checkboxContainer">
          <label className="checkbox">
            <input type="checkbox" onClick={() => editTask(task)} />
            <i className="fas fa-pen fa-lg"></i>
          </label>
        </div>
        <div className="checkboxContainer">
          <label className="checkbox">
            <input type="checkbox" onClick={() => checkTask(task)} />
            <i className="fas fa-check-square fa-lg "></i>
          </label>
        </div>
      </div>
    </div>
  );
};
