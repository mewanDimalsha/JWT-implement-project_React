import React, { useEffect, useState } from "react";
import UserForm from "./userForm";
import UsersTable from "./usersTable";
import { Box } from "@mui/material";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
  
    axios
      .get("http://localhost:3001/api/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      })
      .then((response) => {
        setUsers(response.data?.users || []);
      })
      .catch((error) => {
        console.error("axios error", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from localStorage
  
    const payload = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
  
    axios
      .post("http://localhost:3001/api/createuser", payload, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      })
      .then(() => {
        getUsers(); // Fetch the updated users list
        setSubmitted(false);
      })
      .catch((error) => {
        console.error("axios error", error);
      });
  };
  

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <UserForm
        addUser={addUser}
        submitted={submitted}
      />
      <UsersTable
        rows={users}
      />
    </Box>
  );
};

export default Users;
