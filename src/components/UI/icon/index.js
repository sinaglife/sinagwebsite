import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

const iconBtn = {
  padding: 0,
  background: 'transparent',
};

const Icon = React.memo(function Icon({
  icon,
  onClick,
  title,
  disabled,
  ...props
}) {
  const renderIcon = () => require(`./types/${icon}`).default;
  const SVG = renderIcon();
  if (onClick) {
    return (
      <button
        type="button"
        title={title}
        style={iconBtn}
        onClick={onClick}
        disabled={disabled}
      >
        <SVG {...props} />
      </button>
    );
  }
  return <SVG {...props} />;
});

Icon.propTypes = propTypes;
export default Icon;
