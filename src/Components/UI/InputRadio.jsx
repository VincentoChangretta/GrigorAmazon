import React from 'react';
import './InputRadio.css'

export const InputRadio = ({ className, name, value, onChange, text }) => {
    return (
        <label className="radio-container block py-[10px] pl-[50px] px-[20px] cursor-pointer">
            <input className='hidden' type="radio" name={name} value={value} onChange={onChange} />
            <span className={`${className} radio-checkmark`}></span>
        { text }
    </label >
  );
}
