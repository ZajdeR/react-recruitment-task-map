function ListItem({ address, ip }) {
  return (
    <div className="bg-blue-100 m-2 rounded p-1 shadow">
      <div>
        <strong>Ip:</strong> {ip || 'Not found'}
      </div>
      <div>
        <strong>Location:</strong> {address || 'Not found'}
      </div>
    </div>
  );
}

export default ListItem;
