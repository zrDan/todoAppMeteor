import { Meteor } from "meteor/meteor";
import {
  TasksCollection,
  TasksCompleteCollection,
} from "../imports/db/tasksCollection";
import "../imports/api/tasksMethods";
import "../imports/api/taskPublication";

Meteor.startup(() => {});
