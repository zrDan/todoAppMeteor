import { check } from "meteor/check";
import {
  TasksCollection,
  TasksCompleteCollection,
} from "../db/tasksCollection";

Meteor.methods({
  "task.insert"(text) {
    check(text, String);
    if (!this.userId) {
      throw new Meteor.Error("Sin Autorización");
    }
    TasksCollection.insert({
      text,
      userId: this.userId,
      createdAt: new Date(),
    });
  },

  "task.delete"(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error("Sin Autorización");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      userId: this.userId,
    });

    if (!task) {
      throw new Meteor.Error("Sin Autorización task");
    }

    TasksCollection.remove(taskId);
  },

  "task.update"(taskId, newText) {
    check(taskId, String);
    check(newText, String);

    if (!this.userId) {
      throw new Meteor.Error("Sin Autorización");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      userId: this.userId,
    });

    if (!task) {
      throw new Meteor.Error("Sin Autorización task");
    }

    TasksCollection.update(taskId, { $set: { text: newText } });
  },

  "task.complete"(taskId, text) {
    check(taskId, String);

    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!this.userId) {
      throw new Meteor.Error("Sin Autorización");
    }

    if (!task) {
      throw new Meteor.Error("Access denied.");
    }

    Meteor.call("task.delete", taskId);

    TasksCompleteCollection.insert({
      text,
      userId: this.userId,
      createdAt: new Date(),
    });
  },
});
