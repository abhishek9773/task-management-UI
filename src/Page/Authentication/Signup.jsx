import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
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
      <h1 className="text-lg front-bold text-center pb-8 ">Register</h1>
      <from className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="FullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter you fullName"
        />
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={FormDataEvent.role}
            label="Role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
            <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            fullWidth
            className="customeButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Register
          </Button>
        </div>
      </from>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span> Already have an account</span>
        <Button onClick={togglePanel}> signin </Button>
      </div>
    </div>
  );
};

export default Signup;
