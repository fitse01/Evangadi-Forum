import React,{useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {FaEyeSlash ,faEye}  from "@fortawesome/free-solid-svg-icons"

const PasswordToggle = () => {
    const [visible , setvisible] = useState(false);
    const Icon =(
        <FontAwesomeIcon icon={visible ? " FaEyeSlash": "faEye"} 
          onClick={() => setvisible(visible => !visible)}
    />
    );
    const InputType = visible ? " text"  : " password";

  return [InputType , Icon]
};

export default PasswordToggle