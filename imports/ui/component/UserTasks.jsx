import React from "react";
import { TasksCollection } from "../../db/tasksCollection";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "../component/Task";

export const UserTasks = () => {
  const user = useTracker(() => Meteor.user());

  const { tasks } = useTracker(() => {
    const noDataAvailable = { tasks: [] };
    const handler = Meteor.subscribe("tasks");

    if (!handler.ready()) {
      return { ...noDataAvailable };
    }

    const tasks = TasksCollection.find(
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
        <Task key={task._id} task={task} id={user._id} />
      ))}
    </React.Fragment>
  );
};
