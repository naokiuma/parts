import React from 'react';
import PropTypes from 'prop-types';
import './assets/css/parts/tab.css';

export default function Tab ({ backgroundColor, size, label, className, ...props }) {
    return (
      <span
        className={[`${className}`, `storybook-tab--${size}`].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </span>
    );
  };

  Tab.defaultProps = {
    backgroundColor: null,
    size: 'medium',
    onClick: undefined,
  };