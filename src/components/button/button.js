import React from "react";
//import "../../App.css";

let Button = props => {
  const { label } = props;
  return (
    <button data-testid="button" className="btn-style">
      {label}
    </button>
  );
};

export default Button;
