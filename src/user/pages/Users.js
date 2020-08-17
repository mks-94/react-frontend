import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Murali Krishna",
      image:
        "https://image.shutterstock.com/image-photo/colombo-national-museum-sri-lanka-600w-1749179987.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
