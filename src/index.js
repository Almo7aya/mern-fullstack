import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

const App = (props) => (
  <h1>
    {props.header}
  </h1>
);

App.propTypes = {
  header: propTypes.string
};

ReactDOM.render(
  <App header={'Hello'} />,
  document.getElementById('root')
);
