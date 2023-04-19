import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewSightingsFormSubmission}>
        <input
          type='text'
          name='userName'
          placeHolder='User Name' />
        <input
          type='text'
          name='location'
          placeHolder='Location' />
        <textarea 
        name='description' />
        <button type='submit'>Add Sighting</button>
      </form>
    </React.Fragment>
  );
}

NewSightingsForm.propTypes = {
  onNewSightingsCreation: PropTypes.func
};

export default NewSightingsForm;