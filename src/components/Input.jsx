import "./Input.css"
export default function Input(props) {

  const { name, id, type, placeholder, label, value, onChange } = props;

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
