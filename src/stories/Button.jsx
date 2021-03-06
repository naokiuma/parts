import React, { useState } from "react";
import PropTypes from 'prop-types';
import './assets/css/parts/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label,className,type, ...props }) => {
    const [active, setActive] = useState(false);

    const classToggle = () => {
        setActive(!active)
        console.log("test");
    }
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';


    if(type == 'hamburger'){
        return(
            <div className={className}>
                {/* <div className="'sp_menu' `${active ? "red" : ""}`" onClick={classToggle}> */}
                <div className={['sp_menu',`${active ? "standard" : ""}`, ].join(' ')}
                    onClick={classToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )

    }else{
        return (
            <>
                <button
                type="button"
                className={['storybook-button',`${className}`, `storybook-button--${size}`, mode].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
                >
                {label}
                </button>
            </>
        );
    }
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
