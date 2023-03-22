/** @format */

import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

const Icons = ({ color, size }) => {
  return (
    <IconContext.Provider value={{ color: color }}>
      <div className="flex items-center space-x-8">
        <FiTwitter size={size} />
        <FiInstagram size={size} />
        <FaLinkedin size={size} />
      </div>
    </IconContext.Provider>
  );
};

export default Icons;
