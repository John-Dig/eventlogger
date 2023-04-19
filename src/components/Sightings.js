import React from 'react';
import PropTypes from 'prop-types';

function Sightings(props) {
  return (
    <>
      <h3>{props.userName}</h3>
      <h3>{props.description}</h3>
      <h3>{props.location}</h3>
    </>
  );
}

Sightings.propTypes = {
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Sightings;
