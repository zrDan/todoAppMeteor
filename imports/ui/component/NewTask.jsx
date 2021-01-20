import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import "./style/NewTask.css";

export const NewTask = () => {
  const [text, setText] = useState("");

  const newTask = (e) => {
    e.preventDefault();
    Meteor.call("task.insert", text);
    setText("");
  };

  return (
    <form className="newTaskContainer" onSubmit={newTask}>
      <input
        type="text"
        placeholder="Nueva Tarea"
        value={text}
        required={true}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};
