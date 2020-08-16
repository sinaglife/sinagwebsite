import React from "react";
import PropTypes from "prop-types";

import classes from "./button.module.scss";

import Icon from "../icon";

function Button({
  icon,
  onClick,
  size = "medium",
  color = "black",
  backgroundColor = "noBackground",
  padding = "padding",
}) {
  return (
    <div
      className={[
        classes.base,
        classes[size],
        classes[padding],
        classes[backgroundColor],
      ].join(" ")}
      onClick={onClick}
    >
      <Icon className={classes[color]} icon={icon} />
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  onCLick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
