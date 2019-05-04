import React from 'react';

const Button = props => {
  return (
    <button
      style={props.style}
      className="btn btn-primary"
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
