import React from 'react';

const Select = ({ label, options, required }) => {
  return (
    <div className="flex flex-col w-full mt-3">
      <label className="mb-2 text-sm font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        required={required}
        className="border-none rounded-lg px-4 py-3 text-sm bg-gray-100 focus:outline-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
