import React, { useState } from "react";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    setShowOtpInput(true);
  };
  return (
    <div>
      {!showOtpInput ?():(
        <div>
        <p>Enter OTP sent to {phoneNumber}</p>
        </div>
    )}
    </div>
  );
};

export default PhoneOtpLogin;
