import React from 'react';
import '../Designs/Switch.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background:  onColor }}
        className="react-switch-label"
        id = 'react-switch-label'
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} id ={`react-switch-button`}/>
      </label>
    </>
  );
};

export default Switch;