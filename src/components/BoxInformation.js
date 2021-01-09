import PropTypes from 'prop-types';

function BoxInformation(props) {
  return (
    <div className="box-border-rounded flex flex-col p-10">
      <strong className="text-2xl mb-5 text-center">{props.label}</strong>
      <div>
        <strong>Ip:</strong> {props.ip || 'Not found'}
      </div>
      <div>
        <strong>Location:</strong> {props.location || 'Not found'}
      </div>
    </div>
  );
}

BoxInformation.propTypes = {
  ip: PropTypes.string,
  location: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default BoxInformation;
