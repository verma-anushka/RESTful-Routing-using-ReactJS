// Display all users

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchList } from "../../store/actions/users";

class List extends React.Component {
  
  // Fetch all users  
  componentDidMount() {
    this.props.fetchList();
  }

  // Button to create new user
  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/users/new" className="ui button primary">
          Create New User
        </Link>
      </div>
    );
  }

  // Display users list
  renderList() {
    return this.props.users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">

            {/* Click here to view the single user */}
            <Link to={`/users/${user.id}`} className="header">
              {user.first_name} {user.last_name}
            </Link>
            <div className="description">{user.email}</div>
            <div className="right floated content">
            <Link to={`/users/edit/${user.id}`} className="ui button primary">
              <i className="fa fa-edit"></i>
              EDIT
            </Link>
            <br />
            <Link
              to={`/users/delete/${user.id}`}
              className="ui button negative"
            >
              <i className="fa fa-trash"></i>
              DELETE
            </Link>
          </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Users: </h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

// Pass data from redux store to component props
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users)
  };
};

// Connect action creators with the component
export default connect(mapStateToProps, { fetchList })( List );
