import BaseInput from './BaseInput';
import BaseButton from './BaseButton';

function BoxSearch(props) {
  return (
    <form className="col-span-2" onSubmit={props.searchMethod}>
      <div className=" flex justify-around items-center">
        <BaseInput
          className="w-9/12"
          value={props.searchText}
          onChange={props.changeMethod}
          placeholder="Enter IP"
        />
        <BaseButton className="w-2/12 btn-blue" type="submit" />
      </div>
    </form>
  );
}

export default BoxSearch;
