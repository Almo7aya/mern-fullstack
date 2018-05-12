import React from 'react';
import propTypes from 'prop-types';
const Package = ({name, version}) => (
  <tr>
    <td>{name}</td>
    <td>{version}</td>
  </tr>
);

Package.propTypes = {
  name: propTypes.string,
  version: propTypes.string
};

export default Package;
