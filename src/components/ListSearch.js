import ListItem from './ListItem';

function ListSearch({ searches }) {
  return (
    <div className="row-span-3 box-border-rounded">
      <h1 className="text-3xl text-center font-bold my-4">Search list</h1>
      {searches.map((s, i) => (
        <ListItem key={i} address={s.address} ip={s.ip} />
      ))}
    </div>
  );
}

export default ListSearch;
