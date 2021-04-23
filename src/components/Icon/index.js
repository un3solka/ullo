import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ icon }) => {
  return <img src={icon} alt="" />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};
