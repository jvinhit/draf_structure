import React from 'react';
import './styles.scss';
const DotItem = props => {
    const { index, activeIndex, onClicks } = props;
    return (
        <li
            onClick={onClicks}
            className={index === activeIndex ? ' dot-item is-active' : 'dot-item'}
        />
    );
};

export { DotItem };
