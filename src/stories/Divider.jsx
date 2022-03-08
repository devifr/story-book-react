import React from 'react';
import PropTypes from 'prop-types';
import "./assets/scss/custom.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Primary UI component for user interaction
 */
export const Divider = ({ label, type, weight, position, icon_style, ...props }) => {
  const label_text = (label == '') ? '' : label;
  const icon = (icon_style == '') ? '' : icon_style;
  return (
    <div className={['line', `line--${type}`, `line--${weight}`, `line--${position}`].join(' ')}>
      <span className="line__label">
        {label_text}<i class={icon}></i>
      </span>
    </div>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
  weight: PropTypes.oneOf(['light', 'reguler', 'heavy']),
  position: PropTypes.oneOf(['start', 'center', 'end']),
  label: PropTypes.string.isRequired,
  icon_style: PropTypes.string.isRequired,
};

Divider.defaultProps = {
  type: 'solid',
  weight: 'regular',
  position: 'center',
};
