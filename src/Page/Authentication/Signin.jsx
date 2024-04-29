import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Signin = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefalut();
    console.log("login from ", formData);
  };

  return (
    <div>
      <h1 className="text-lg front-bold text-center pb-8 ">Login</h1>
      <from className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter you email"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter you password"
        />
        <div>
          <Button
            fullWidth
            className="customeButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Login
          </Button>
        </div>
      </from>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span> don't have an account</span>
        <Button onClick={togglePanel}> signup </Button>
      </div>
    </div>
  );
};

export default Signin;
