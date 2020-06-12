import React from "react";
import "./checkbox.sass";
import PropTypes from "prop-types";

const Checkbox = ({ className, checked, onChange, label }) => (
  <div className={`checkbox ${className}`}>
    <input checked={checked} onChange={onChange} className="checkbox__input" type="checkbox" />
    <label className="checkbox__label">
      <span
        onClick={onChange}
      />
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
