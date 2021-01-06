function BaseInput(props) {
  return (
    <input
      className={
        props.className + ' shadow border rounded py-2 px-3 leading-tight'
      }
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default BaseInput;
