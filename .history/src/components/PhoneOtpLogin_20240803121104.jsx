import React, { useState } from "react";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          onChange={handlePhoneNumber}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default PhoneOtpLogin;
