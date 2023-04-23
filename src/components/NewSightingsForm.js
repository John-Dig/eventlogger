import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewSightingsForm(props) {
  function handleNewSightingsFormSubmission(e) {
    e.preventDefault();
    props.onNewSightingsCreation({
      userName: e.target.userName.value,
      location: e.target.location.value, 
      description: e.target.description.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewSightingsFormSubmission} buttonText="Submit your fake story" />
    </React.Fragment>
  );
}

NewSightingsForm.propTypes = {
  onNewSightingsCreation: PropTypes.func
};

export default NewSightingsForm;