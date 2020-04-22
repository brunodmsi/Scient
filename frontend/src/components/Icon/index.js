import React from 'react';
import PropTypes from 'prop-types';
import * as FeatherIcon from 'react-icons/fi';

function Icon({ icon, color, size }) {
  const FIcon = FeatherIcon[icon];

  return <FIcon size={size} color={color} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default Icon;
