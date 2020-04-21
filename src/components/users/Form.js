// Form Component

import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {
  
  // Display error message
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // Display input fields
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="email" component={this.renderInput} label="Enter your email id." />
        <Field name="first_name" component={this.renderInput} label="Enter your first name." />
        <Field name="last_name" component={this.renderInput} label="Enter your last name." />
        <Field name="avatar" component={this.renderInput} label="Enter your profile image url." />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Basic form validations - empty fields
const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "You must enter a valid email id";
  }

  if (!formValues.first_name) {
    errors.first_name = "You must enter a first name";
  }
  
  if (!formValues.last_name) {
    errors.last_name = "You must enter a last name";
  }
  
  if (!formValues.avatar) {
    errors.avatar = "You must enter a profile image url";
  }

  return errors;
};

export default reduxForm({
  form: "Form",
  validate: validate
})( Form );
