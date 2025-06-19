import React from "react";


const Button = ({ text, style }) => {
  return (
    <div>
      <button
        className={`btn btn-primary fs_sm text-white font_helvetica d-inline-block ${style}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
