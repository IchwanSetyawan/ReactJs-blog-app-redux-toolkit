import React from "react";
import { useSelector } from "react-redux";

function Author({ userId }) {
  const users = useSelector((state) => state.users);
  const userName = users.find((user) => user.id === Number(userId));

  return (
    <span className="underline">
      {userName ? userName.user : "Penulis tidak dikenal"}
    </span>
  );
}

export default Author;
