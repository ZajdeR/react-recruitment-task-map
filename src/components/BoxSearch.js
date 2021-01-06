import InputSearch from './InputSearch';
import ButtonSearch from './ButtonSearch';

function BoxSearch() {
  return (
    <div className="col-span-2 box-border-rounded">
      <InputSearch />
      <ButtonSearch />
    </div>
  );
}

export default BoxSearch;
