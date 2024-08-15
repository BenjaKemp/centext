import React from 'react';

interface RangeInputProps {
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ min, max, value, onChange }) => {
  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="slider"
        onChange={onChange}
      />
      <div className="range-labels">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </>
  );
};

export default RangeInput;
