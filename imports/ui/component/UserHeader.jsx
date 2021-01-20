import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import "./style/UserHeader.css";

export const UserHeader = () => {
  const user = useTracker(() => Meteor.user());
  const logOut = () => Meteor.logout();

  return (
    <div className="topLaneBar">
      <div className="user">
        <i className="far fa-user"></i>
        {user.username}
      </div>
      <div className="logout">
        <i className="fas fa-sign-out-alt fa-lg" onClick={logOut}></i>
      </div>
    </div>
  );
};
