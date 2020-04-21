// Create new user form

import React from "react";
import { connect } from "react-redux";
import { create } from "../../store/actions/users";
import Form from "./Form";

class Create extends React.Component {
  
  // Call to action creator on form submission
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.create(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create User:</h3>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// Connect action creators with the component
export default connect(null, { create })( Create );
