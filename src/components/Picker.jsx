import React from 'react';

const Picker = ({ type, value, setValue, action, min = 1, max = 0 }) => {
  const pickerType = `picker__${type}`;
  return (
    <div className="picker">
      <label className={pickerType} htmlFor={pickerType}>
        <div className="picker__container" id={pickerType}>
          {/*<div className="picker__value">{value}</div>*/}
          <input
            min={1}
            type="number"
            value={value}
            onChange={e => {
              if (e?.target?.value && parseInt(e?.target?.value)) {
                let newValue = parseInt(e.target.value);
                if (newValue < 1) {
                  newValue = 1;
                }
                setValue(newValue);
              }
            }}
          />
          <div className="picker__buttons">
            <button
              type="button"
              onClick={() => {
                if (max === 0 || value < max) {
                  action(type, 1);
                }
              }}
              className="button-add"
              id={`picker__add-${type}`}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                if (min === 0 || value > min) {
                  action(type, -1);
                }
              }}
              className="button-remove"
              id={`picker__remove-${type}`}
            >
              -
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Picker;
