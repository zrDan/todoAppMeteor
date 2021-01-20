import React, { Fragment, useState } from "react";

export const EditTask = ({ taskId, cancelOrDoneEdit, visible }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const confirmEdit = (id, newText) => {
    Meteor.call("task.update", id, newText);
    cancelOrDoneEdit();
  };

  return (
    <div className="individualTask" style={{ display: visible }}>
      <input
        type="text"
        className="inputEdit"
        placeholder="Edita la tarea"
        onChange={handleChange}
      />
      <div className="editOptions">
        <div className="cancelItemOption">
          <label className="checkbox">
            <input type="checkbox" onClick={() => cancelOrDoneEdit()} />
            <i className="fas fa-ban fa-lg"></i>
          </label>
        </div>
        <div className="editItemOption">
          <label className="checkbox">
            <input
              type="checkbox"
              onClick={() => confirmEdit(taskId, newTask)}
            />
            <i className="fas fa-check fa-lg"></i>
          </label>
        </div>
      </div>
    </div>
  );
};
