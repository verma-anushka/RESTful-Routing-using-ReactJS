// Delete user using the user id

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import { fetchSingle, deleteUser } from "../../store/actions/users";

class Delete extends React.Component {

  componentDidMount() {
    // Fetch the user to be deleted
    this.props.fetchSingle(this.props.match.params.id);
  }

  // Modal actions - confirm deletion
  renderActions() {
    const { id } = this.props.match.params;
    return ( 
      <React.Fragment>
        <button
          onClick={() => this.props.deleteUser(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  // Message to be displayed during deletion confirmation
  renderContent() {
    if (!this.props.user) {
      return "Are you sure you wish to delete?";
    }
    return `Are you sure you wish to delete ${this.props.user.first_name}?`;
  }

  render() {
    return (
      <Modal
        title="Delete User"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
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
  deleteUser
})( Delete );
