import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'


const myStyledComponentStyles = {
  backgroundColor: '#fcba07',
  fontFamily: 'sans-serif',
  paddingTop: '50px'
}



function NewTicketForm(props){
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation;
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default NewTicketForm;