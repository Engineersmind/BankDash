import "./Input.css";
export default function Input(props) {
  return (
    <div className="password">
      <label htmlFor={props.for}>{props.label}</label>
      <input type={props.type} id={props.for} placeholder={props.placeholder} />
    </div>
  );
}
