import moment from "moment/moment";
import React from "react";

const Footer = ({ children = <></> }) => {
  return (
    <div>
      {children} {moment().format("DD MMM YYYY")}
    </div>
  );
};

export default Footer;
