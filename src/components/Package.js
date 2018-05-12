import React from 'react';
import propTypes from 'prop-types';
const Package = ({name, version, onClick}) => (
  <tr onClick={() => onClick(name)}>
    <td>{name}</td>
    <td>{version}</td>
  </tr>
);

Package.propTypes = {
  name: propTypes.string,
  version: propTypes.string,
  onClick: propTypes.func
};

export default Package;
