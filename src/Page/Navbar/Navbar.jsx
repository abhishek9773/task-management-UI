import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 , flex justify-between items-center">
      <p className="font-bold text-lg"> Task Management</p>
      <div className="flex items-center gap-5">
        <p> abhishek9773</p>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20e4FMgGlXySlDQJ1B6_AZo4j6uKMzV7WuG7EVa-p5Q&s">
          C
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
