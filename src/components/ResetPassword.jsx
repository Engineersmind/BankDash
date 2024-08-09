import "./ResetPassword.css";
import Input from "./Input";
export default function ResetPassword() {
  return (
    <div className="change-password">
      <span className="heading">Change Password</span>
      <div className="passwords">
        <Input
          for="currentpassword"
          name="password"
          placeholder="**********"
          label="Current Password"
          type="password"
        />
        <Input
          for="newpassword"
          name="newpassword"
          placeholder="**********"
          label="New Password"
          type="password"
        />
      </div>
      <button>Save</button>
    </div>
  );
}
