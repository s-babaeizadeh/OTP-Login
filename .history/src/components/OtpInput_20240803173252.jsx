import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  console.log("input", inputRefs);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    console.log("newOtp", newOtp);
    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    //Move to next input if current field is filled
    if (value) {
  // If the current index is the second position (index 1)
  if (index === 1 && inputRefs.current[2].value) {
    // Check if the third input is filled, then move to the fourth input
    inputRefs.current[3].focus();
  } 
  // If the current index is not the last input and the next input exists
  else if (index < length - 1 && inputRefs.current[index + 1]) {
    inputRefs.current[index + 1].focus();
  }
}

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    //optional previous be empty
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
