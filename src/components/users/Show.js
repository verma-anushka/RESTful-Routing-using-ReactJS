// Display a single user

import React from "react";
import { connect } from "react-redux";
import { fetchSingle } from "../../store/actions/users";

class Show extends React.Component {
  
  // Fetch the required user
  componentDidMount() {
    this.props.fetchSingle(this.props.match.params.id);
  }

  render() {
    
    if (!this.props.user) {
      return <div>Loading...</div>;
    }

    const { email, first_name, last_name, avatar } = this.props.user;

    return (
      <div>
        <h1>First Name: {first_name}</h1> 
        <h1>Last Name: {last_name}</h1>
        <h4>Email: {email}</h4>
        <h4>Avatar Link: {avatar}</h4>
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
export default connect(mapStateToProps, { fetchSingle })( Show );
