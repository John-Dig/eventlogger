//dj
import React from "react";
import PropTypes from "prop-types";

function SightingsDetail(props){
  const { sightings, onClickingDelete } =props;

  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>{sightings.userName}</h3>
      <h3>{sightings.location}</h3>
      <h3>{sightings.description}</h3>
      <button onClick={ props.onClickingEdit}>Edit Sighting</button>
      <button onClick={()=> onClickingDelete(sightings.id) }>Delete sighting</button>
      <hr/>
    </React.Fragment>
  );
}

SightingsDetail.propTypes = {
  sightings: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SightingsDetail;