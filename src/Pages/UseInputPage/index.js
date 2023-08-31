import React from "react";
import { useInput } from "./useInput";

function displayMessage(message) {
  alert(message);
}

const UseInputPage = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  const [inputValue2, handleChange2, handleSubmit2] = useInput(
    "",
    displayMessage
  );

  return (
    <div>
      <h1>UseInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>

      <input value={inputValue2} onChange={handleChange2} />
      <button onClick={handleSubmit2}>확인</button>
    </div>
  );
};

export default UseInputPage;
