import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Profile />
      <ProfileClass name={"Aditya"} />
    </div>
  );
}

export default About;
