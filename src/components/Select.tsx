import React from "react";

type Props = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const Select: React.FC<Props> = ({ value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select name="choice" value={value} onChange={handleChange}>
      {options.map((op) => (
        <option value={op}>{op}</option>
      ))}
    </select>
  );
};

export default Select;
