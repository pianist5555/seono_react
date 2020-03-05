import React, { useState } from "react";
import '../css/Validation.css'

const Validation = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === '0000');
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? 'success':'failure') :''}
      ></input>
      <button onClick={handleButtonClick}>check</button>
    </div>
  );
};

export default Validation;
