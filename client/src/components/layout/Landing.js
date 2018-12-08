import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class Landing extends Component {
  componentDidMount() {
    //login kora thakle landing page ashbe na .
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Developer Network</h1>
                  <p className="lead">
                    {" "}
                    Create a developer profile/portfolio, share posts and get
                    help from other developers
                  </p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Landing;

Landing.PropTypes = {
  auth: PropTypes.object.isRequired
};

const mapStoreToProps = state => ({
  auth: state.auth
});

// const mapDispatchToProps = dispatch => {
//   return {
//     getNames: data => dispatch({ type: "GET_NAMES", payload: data })
//   };
// };

export default connect(mapStoreToProps)(Landing);
