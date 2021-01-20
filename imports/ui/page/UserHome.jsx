import React from "react";
import { UserHeader } from "../component/UserHeader";
import { NewTask } from "../component/NewTask";
import { UserTasks } from "../component/UserTasks";
import { UserCompleteTasks } from "../component/UserCompleteTasks";
import "./styles/UserHome.css";

export const UserHome = () => {
  return (
    <div className="wrapper">
      <UserHeader />
      <div className="todoMainContainer">
        <NewTask />
        <div className="taskContainer">
          <div className="taskHead">
            <div>
              pendientes
              <i className="fas fa-tasks fa-lg"></i>
            </div>
          </div>
          <div className="allTasks">
            <UserTasks />
          </div>
        </div>
        <div className="taskCompleteContainer">
          <div className="taskHead">
            <div>
              completadas
              <i className="fas fa-check"></i>
            </div>
          </div>
          <div className="tasksCompleted">
            <div className="allTasks">
              <UserCompleteTasks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
