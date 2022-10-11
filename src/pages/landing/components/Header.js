import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import web from "./images/Chat.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <WhatsAppIcon />
        </div>
        <h1> Built on Official WhatsApp Business Platform</h1>
      </div>
    </>
  );
};

export default Header;
