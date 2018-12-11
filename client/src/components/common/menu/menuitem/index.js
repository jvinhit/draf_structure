import React from 'react';
import './index.scss';

const MenuItem = props => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    );
};
export { MenuItem };
