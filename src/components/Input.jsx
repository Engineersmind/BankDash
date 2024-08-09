export default function Input(props){
    console.log(props);
    return(
        <div className="password">
            <label htmlFor={props.for}>{props.label}</label>
            <input id={props.for} placeholder={props.placeholder}/>
        </div>
    );
}