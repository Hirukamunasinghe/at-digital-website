import React, { ReactNode } from "react";

// props(arguments) passed into the Button component 
const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <button className="py-3 px-5 bg-secondary rounded text-white font-bold">{children}</button>;
};

export default Button;
