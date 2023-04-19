import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewSightingsForm(props) {
  function handleNewSightingsFormSubmission(event) {
    event.preventDefault();
    props.onNewSightingsCreation({
      userName: event.target.userName.value,
      location: event.target.location.value, 
      description: event.target.description.value,
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