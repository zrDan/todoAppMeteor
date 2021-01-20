import React, { Fragment, useState } from "react";
import { EditTask } from "./EditTask";
import { NormalTask } from "./NormalTask";
import "./style/Task.css";

export const Task = ({ task, id }) => {
  const [taskVisibel, setTaskVisible] = useState("grid");
  const [editVisible, setEditVisible] = useState("none");

  const checkTask = ({ _id }) => {
    Meteor.call("task.complete", _id, task.text);
  };

  const deleteTask = ({ _id }) => Meteor.call("task.delete", _id);

  const editTask = () => {
    setEditVisible("grid");
    setTaskVisible("none");
  };

  const cancelOrDoneEdit = () => {
    setEditVisible("none");
    setTaskVisible("grid");
  };

  return (
    <Fragment>
      <NormalTask
        task={task}
        checkTask={checkTask}
        editTask={editTask}
        deleteTask={deleteTask}
        visible={taskVisibel}
      />
      <EditTask
        cancelOrDoneEdit={cancelOrDoneEdit}
        taskId={task._id}
        visible={editVisible}
      />
    </Fragment>
  );
};
