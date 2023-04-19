import React from 'react';
import Sightings from './Sightings';
import PropTypes from 'prop-types';

function SightingsList(props) {
  return (
    <>
    <hr />
    {props.sightingsList.map((sightings,index) =>
  <Sightings userName={sightings.userName}
  location={sightings.location}
  description={sightings.description}
  key={index} />
    )}
    </>
  ) 
}

SightingsList.propTypes = {
  sightingsList: PropTypes.array
};

export default SightingsList;