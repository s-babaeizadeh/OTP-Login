import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhoneOtpLogin from "./components/PhoneOtpLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Login with Phone</h1>
        <PhoneOtpLogin />
      </div>
    </>
  );
}

export default App;
