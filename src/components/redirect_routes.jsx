import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function loggedIn() {
  if (window.localStorage.getItem('JWT') === null) {
    return false;
  }

  return true;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (loggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
}

function NoLoginRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (loggedIn() ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      ))}
    />
  );
}

const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element,
]);

PrivateRoute.propTypes = {
  component: componentPropType.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

NoLoginRoute.propTypes = {
  component: componentPropType.isRequired,
};

export {
  PrivateRoute,
  NoLoginRoute,
};
