import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LogIn } from "./Login";
import { UserHome } from "./UserHome";

export const AuthPage = () => {
  const user = useTracker(() => Meteor.user());

  return <>{user ? <UserHome /> : <LogIn />}</>;
};
