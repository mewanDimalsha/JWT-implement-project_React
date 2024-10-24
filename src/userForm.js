import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserForm = ({ addUser, submitted}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (!submitted) {
      setName("");
      setEmail("");
      setPhoneNumber("");
    }
  }, [submitted]);

//   useEffect(() => {
//     if (data?.name) {
//       setName(data.name);
//       setEmail(data.email);
//       setPhoneNumber(data.phoneNumber);
//     }
//   }, [data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ margin: "auto", color: "#000000" }}>
          UserForm
        </Typography>
      </Grid>

      {/* Name Field */}
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{
            width: "400px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      {/* Email Field */}
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="email"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Email
        </Typography>
        <Input
          type="email"
          id="email"
          name="email"
          sx={{
            width: "400px",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      {/* Phone Number Field */}
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="phoneNumber"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Phone Number
        </Typography>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          sx={{
            width: "400px",
          }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Grid>

      {/* Submit Button */}
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "black",
          marginLeft: "30px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.5",
            backgroundColor: "ButtonHighlight",
          },
        }}
        onClick={() => {
          addUser({ name, email, phoneNumber });
        }}
      >
        {"Submit"}
      </Button>
    </Grid>
  );
};

export default UserForm;
