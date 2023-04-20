import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';


function EditSightingsForm(props) {
  const { sightings } = props;

  function handleEditSightingsFormSubmission(e) {
    e.preventDefault();
    props.onEditSightings({userName: e.target.userName.value, location: e.target.location.value, description: e.target.description.value, id: sightings.id});
  }

  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleEditSightingsFormSubmission}
        buttonText="Update Sighting" />
    </>
  );
}

EditSightingsForm.propTypes = {
  Sightings: PropTypes.object, onEditSightings: PropTypes.func //I'd like to understand this more jd
};

export default EditSightingsForm;

//SightingsDetail.propTypes = {
//   sightings: PropTypes.object,
//   onClickingDelete: PropTypes.func,
//   onClickingEdit: PropTypes.func
// };