import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const hoc = (ComposedComponent) => {
  class CheckUser extends Component {
    componentWillMount() {
      console.log(this.props)
      if (this.props.user === undefined) {
        this.props.history.push("/userlist");
      }
    }

    PropTypes = {
      router: PropTypes.object,
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    user: state.userReducer.user
  });

  return connect(mapStateToProps, null)(CheckUser);
};

export default hoc;
