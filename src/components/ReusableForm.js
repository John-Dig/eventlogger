//jd afternoon
import React from "react";
import PropTypes from "prop-types";




function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='userName' placeholder='User Name' />
        <input type='text' name='location' placeholder='Locations' />
        <input type='text' name='description' placeholder='description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, buttonText: PropTypes.string
};

export default ReusableForm;

