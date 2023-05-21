import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Button = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
};

export default Button;
