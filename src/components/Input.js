import { useState } from "react";
import "./Input.css";

const Input = ({ label, type, id }) => {
  const [value, setValue] = useState("");
  return (
    <div className="input">
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
