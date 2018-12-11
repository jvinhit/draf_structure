import React from 'react';
import './index.scss';

const ToggleMenu = props => {
    return (
        <button id="toggle" className={`toggle on`} onClick={props.onClick ? props.onClick : null} onMouseOver={props.onMouseOver ? props.onMouseOver : null}>
            <span />
            {props.children}
        </button>
    );
};

export { ToggleMenu };
