import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";

const menu = [
  { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];
const role = "ROLE_ADMIN";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleMenuChange = (item) => {
    setActiveMenu(item.name);
  };
  const handleLogout = () => {
    console.log("handle logout");
  };
  return (
    <div className=" card min-h-[85vh] flex flex-col justify-center flxed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            src="https://imgs.search.brave.com/vcC9RhnSR8pE3KlEWmAtJj0MowcrlFGxs4jFEJ_xi0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL01pY3Jvc29m/dF9Mb2dvXzEyOHB4/LnBuZw"
            sx={{ width: "8rem", height: "8rem" }}
            className="border-2 border-[#c24dd0]"
          />
        </div>
        {menu
          .filter((item) => item.role.includes(role))
          .map((item) => (
            <p
              onClick={() => handleMenuChange(item)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                activeMenu === item.name ? "activeMenuItem" : "menuItem"
              }`}
            >
              {item.name}
            </p>
          ))}
        <Button
          onClick={handleLogout}
          sx={{ padding: ".7rem", borderRadius: "2rem" }}
          fullWidth
          className="logoutButton"
        >
          logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
