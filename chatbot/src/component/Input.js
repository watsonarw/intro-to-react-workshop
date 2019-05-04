import React from 'react';

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        defaultValue={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        // {...props}
      />
    </div>
  );
};

export default Input;
