import { Meteor } from "meteor/meteor";
import {
  TasksCompleteCollection,
  TasksCollection,
} from "../db/tasksCollection";

Meteor.publish("tasks", function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});

Meteor.publish("tasksComplete", function publishTasksCompleted() {
  return TasksCompleteCollection.find({ userId: this.userId });
});
