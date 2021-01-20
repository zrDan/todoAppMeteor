import { Mongo } from "meteor/mongo";

export const TasksCollection = new Mongo.Collection("tasks");
export const TasksCompleteCollection = new Mongo.Collection("tasksComplete");
