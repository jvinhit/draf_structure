import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
    const { cssClass, textLabel, onClick, type } = props;
    return (
        <div className={`button-wrapper ${props.wrapClass ? props.wrapClass : null}`}>
            <button
                disabled={props.disabled ? props.disabled : null}
                className={`btn ${cssClass ? cssClass : null}`}
                type={type}
                onClick={onClick ? onClick : null}
            >
                <span>{textLabel}</span>
            </button>
        </div>
    );
};

Button.propTypes = {
    cssClass: PropTypes.string,
    textLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string
};
Button.defaultProps = {
    textLabel: 'Button'
};
export { Button };
