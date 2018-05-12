import React from 'react';
import propTypes from 'prop-types';
const PackagePreview = ({content}) => (
  <div>
    {content}
  </div>);
export default PackagePreview;

PackagePreview.propTypes = {
  content: propTypes.string
};