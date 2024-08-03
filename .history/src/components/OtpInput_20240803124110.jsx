import React, { useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  console.log(otp);

  const handleChange = () => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
