import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  /* destructure from props */
  isAuthenticated,
  component: Component,
  ...rest // Rest operator gives access to all of the other stuff we didn't destructure
}) => (
  <Route
    {...rest}
    component={props =>
      // props.component either renders Component or throws user to homepage
      (isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      ))
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid, // flip values to boolean values; uid, undefined => true, false
});

export default connect(mapStateToProps)(PrivateRoute);
