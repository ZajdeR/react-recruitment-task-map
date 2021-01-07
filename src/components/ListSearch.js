import ListItem from './ListItem';

function ListSearch({ searches }) {
  return (
    <div className="row-span-3 box-border-rounded">
      {searches.map((s, i) => (
        <ListItem key={i} address={s} />
      ))}
    </div>
  );
}

export default ListSearch;
