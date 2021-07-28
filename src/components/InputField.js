import React from "react";

// 총 5개의 함수를 받아옴.
const InputField = ({ type, value, placeholder, onChange, errorMessage }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </div>
  );
};

export default InputField;
