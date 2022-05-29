import React from 'react';
import classNames from 'classnames';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClassNames = classNames('form-input-label', {
    shrink: otherProps.value.length,
  });

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />

      {label && <label className={labelClassNames}>{label}</label>}
    </div>
  );
};

export default FormInput;
