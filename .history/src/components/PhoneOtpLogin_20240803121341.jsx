import React, { useState } from "react";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
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
