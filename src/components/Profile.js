import { AppContext } from "./AppContext";
import React, { useContext } from "react";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h4>{username}</h4>
    </div>
  )
}

export default Profile
