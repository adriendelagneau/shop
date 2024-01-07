import React from 'react';

const Select = ({ label, options, value, onChange }) => {
  return (
    <div >
      <select value={value} onChange={onChange} className='p-2 text-xl bg-stone-900 text-sky-50'>
        {options.map((option, index) => (
          <option key={index} value={option.value} className='p-2 text-xl bg-stone-900 text-sky-50'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
