import "./Security.css";
import ResetPassword from "../components/ResetPassword";
import ToggleButton from "../components/ToggleButton";
export default function Security() {
  return (
    <div className="security-container">
      <ToggleButton />
      <ResetPassword />
    </div>
  );
}
