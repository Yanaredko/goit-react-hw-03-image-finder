import React from "react";

const Button = ({ onClick, isHidden }) => (
  <button
    type="button"
    className="button"
    onClick={onClick} 
    style={{ display: isHidden ? 'none' : 'block' }}
  >
    Load more
  </button>
);

export default Button;
