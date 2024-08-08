import "./Preferences.css";
import { useState } from "react";
import Input from "../components/Input";
import Toggle from "../components/Toggle";
export default function Preferences() {
  const [currency, setCurrency] = useState("");
  const [time, setTime] = useState("");

  function handleCurrency(e) {
    setCurrency(e.target.value);
  }
  function handleTime(e) {
    setTime(e.target.value);
  }

  return (
    <>
      <div className="input-wrapper">
        <Input
          name="currency"
          type="text"
          placeholder="USD"
          id="currency"
          for="currency"
          label="Currency"
          value={currency}
          onChange={handleCurrency}
        />
        <Input
          name="time"
          type="text"
          placeholder="(GMT-12:00) International Date Line West"
          id="time"
          for="time"
          label="Time Zone"
          value={time}
          onChange={handleTime}
        />
      </div>
      <div className="heading-toggle">
        <h2>Notification</h2>
        <Toggle />
      </div>
      <button>Save</button>
    </>
  );
}
