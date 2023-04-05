import classes from "./Input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType} - ${Math.random()}`;

  return (
    <div className={classes.Input}>
      {/* <label htmlFor={htmlFor}>{props.label}</label> */}
      {/* {console.log(props.prId)} */}
      <input
        id={props.prId}
        type={inputType}
        value={props.value}
        onChange={props.onChange}
        className={classes.Input}
        autoFocus
        placeholder={props.label}
      />
    </div>
  );
};

export default Input;
