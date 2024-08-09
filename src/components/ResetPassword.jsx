import Input from "./Input";

export default function ResetPassword(){
    return(
    <div className="change-password">
      <Input for="currentpassword" name="password" placeholder="**********" label="Current Password"/>
      <Input for="newpassword" name="newpassword" placeholder="**********" label="New Password"/>
    </div>
      
    );
}