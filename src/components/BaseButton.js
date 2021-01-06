function BaseButton(props) {
  return (
    <button className={props.className + ' btn'} type={props.type}>
      Search
    </button>
  );
}

export default BaseButton;
