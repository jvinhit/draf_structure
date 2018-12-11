import React from 'react';
import './index.scss';
const CustomButton = props => {
    const { classname } = props;
    return <button className={`btn btn--custom ${classname ? classname : ''}`}>{props.text}</button>;
};
export { CustomButton };
