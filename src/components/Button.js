import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  {
    /* includes buttonStyle-- if u add any class like "btn--primary or btn--outline" 
  it takes that class else it takes "default btn--primary" */
  }
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0];
  /* the above const code is used for styling */
  return (
    //  <Link to="/sign-up" className="btn-mobile">
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
    // </Link>
  );
};
