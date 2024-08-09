import "./ToggleButton.css";
import { useState } from "react";

export default function ToggleButton() {
  const [enableDisable, setEnableDisable] = useState(true);
  function handleEnableDisable() {
    setEnableDisable(!enableDisable);
  }
  return (
    <div className="two-factor-authentication">
      <span id="two-factor-authentication-text">Two-factor Authentication</span>
      <div className="toggle-button">
        <input
          type="checkbox"
          checked={enableDisable}
          onChange={handleEnableDisable}
        />
        <label>Enable or disable two factor authentication</label>
      </div>
    </div>
  );
}
