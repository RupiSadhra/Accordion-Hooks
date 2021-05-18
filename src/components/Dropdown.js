import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option, index) => {
    if (option.value == selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  const onClickState = () => {
    setOpen(!open);
  };

  return (
    <div ref={ref} classNmae="ui form">
      <div className="field">
        <label className="label">Select a colour</label>
        <div></div>
        <div
          onClick={onClickState}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
