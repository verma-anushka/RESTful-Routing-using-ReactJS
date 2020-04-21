// Edit existing user form

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchSingle, edit } from "../../store/actions/users";
import Form from "./Form";

class Edit extends React.Component {

  componentDidMount() {
    // Fetch the user to be deleted
    this.props.fetchSingle(this.props.match.params.id);
  }

  // Call to action creator on form submission
  onSubmit = formValues => {
    this.props.edit(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit User:</h3>
        <Form
          initialValues={_.pick(this.props.user, "email", "first_name", "last_name", "avatar" )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// Pass data from redux store to component props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id]
  };
};

// Connect action creators with the component
export default connect(mapStateToProps, {
  fetchSingle,
  edit
})( Edit );
