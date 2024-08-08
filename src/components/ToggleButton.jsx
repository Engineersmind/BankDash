import "./ToggleButton.css"
export default function ToggleButton(props) {

  console.log(props);
  props.Attributes.forEach((attribute) => {
    console.log(attribute.onCheck);
  });

  return (
    <div className="toggle-button">
      {props.Attributes.map((attributes) => {
        return (
          <div key={attributes.id}>
            <input
              type="checkbox"
              checked={attributes.onCheck}
              onChange={attributes.onToggle}
            />
            <label>{attributes.content}</label>
          </div>
        );
      })}
    </div>
  );
}
