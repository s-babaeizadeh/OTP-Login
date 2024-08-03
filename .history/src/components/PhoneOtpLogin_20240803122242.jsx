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
  };
  return (
    <div>
      <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          onChange={handlePhoneNumber}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhoneOtpLogin;
