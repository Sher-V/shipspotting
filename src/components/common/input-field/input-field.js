import React from "react";
import "./input-field.sass";
import PropTypes from "prop-types";

const InputField = ({
  hint,
  classes,
  className,
  label,
  value,
  onChange,
  type,
}) => {
  const rootClass = classes ? classes.root : "";
  const hintClass = classes ? classes.hint : "";
  const labelClass = classes ? classes.label : "";

  return (
    <div className={`input-field ${className} ${rootClass}`}>
      <label className={`input-field__label ${labelClass}`} htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={label}
        className="input-field__input"
      />
      <div className={`input-field__hint ${hintClass}`}>{hint}</div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
