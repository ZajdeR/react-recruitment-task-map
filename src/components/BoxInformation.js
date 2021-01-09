import PropTypes from 'prop-types';
import ListItem from './ListItem';

function BoxInformation({ address, ip, label }) {
  return (
    <div className="box-border-rounded flex flex-col p-10">
      <strong className="text-2xl mb-5 text-center">{label}</strong>
      <ListItem address={address} ip={ip} />
    </div>
  );
}

BoxInformation.propTypes = {
  ip: PropTypes.string,
  location: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default BoxInformation;
