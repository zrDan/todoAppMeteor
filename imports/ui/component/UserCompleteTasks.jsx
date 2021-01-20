import React from "react";
import { TasksCompleteCollection } from "../../db/tasksCollection";
import { useTracker } from "meteor/react-meteor-data";
import { TaskFinished } from "./TaskFinished";

export const UserCompleteTasks = () => {
  const user = useTracker(() => Meteor.user());

  const { tasks } = useTracker(() => {
    const noDataAvailable = { tasks: [] };
    const handler = Meteor.subscribe("tasksComplete");

    if (!handler.ready()) {
      return { ...noDataAvailable };
    }

    const tasks = TasksCompleteCollection.find(
      { userId: user._id },
      {
        sort: { createdAt: -1 },
      }
    ).fetch();

    return { tasks };
  });

  return (
    <React.Fragment>
      {tasks.map((task) => (
        <TaskFinished key={task._id} task={task} />
      ))}
    </React.Fragment>
  );
};
