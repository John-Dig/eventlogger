import React from 'react';
import Sightings from './Sightings';
import PropTypes from 'prop-types';

function SightingsList(props) {
  return (
    <>
      <hr />
      {props.sightingsList.map((sightings) =>
        <Sightings
          whenSightingsClicked={props.onSightingsSelection}
          userName={sightings.userName}
          location={sightings.location}
          description={sightings.description}
          id={sightings.id}
          key={sightings.id} />
      )}
    </>
  );
}

SightingsList.propTypes = {
  sightingsList: PropTypes.array,
  onSightingsSelection: PropTypes.func
};

export default SightingsList;