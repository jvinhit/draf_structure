import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CountDownItem = props => {
    const { value, label } = props;
    return (
        <li className="countdown-item">
            <span className="countdown-item__value">{value}</span>
            <span className="countdown-item__label">{label}</span>
        </li>
    );
};
CountDownItem.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
CountDownItem.defaultProps = {
    value: '00',
    label: ''
};
export { CountDownItem };
