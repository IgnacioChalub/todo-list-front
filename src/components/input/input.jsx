import React from 'react';
import './input.css'

const Input = ({
    placeHolder,
    value,
    onChange,
    isPassword
}) => {
    return (
        <input className={"custom-input"} value={value} onChange={onChange} placeholder={placeHolder} type={isPassword && "password"}/>
    );
};

export default Input;