import BaseInput from './BaseInput';
import BaseButton from './BaseButton';

function BoxSearch() {
  return (
    <div className="col-span-2 box-border-rounded">
      <BaseInput />
      <BaseButton />
    </div>
  );
}

export default BoxSearch;
