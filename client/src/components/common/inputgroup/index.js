import React, { Component } from 'react';
import PropsType from 'prop-types';
import './styles.scss';
const InputGroup = props => {
    const { name, placeholder, value, error, type, onChange } = props;
    return (
        <div className="inputgroup-item clearfix">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={props.disabled ? props.disabled : null}
                onBlur={props.onBlur ? props.onBlur : null}
                onFocus={props.onFocus ? props.onFocus : null}
                required={props.required}
                minLength={props.minLength ? props.minLength : null}
                maxLength={props.maxLength ? props.maxLength : null}
                min={props.min ? props.min : null}
                max={props.max ? props.max : null}
                className="input__element"
            />
            <label className="label__name label" htmlFor="name">
                {name}
            </label>
            <div className="error-space" />
            {error && (
                <label className="label__error label" htmlFor="label__error">
                    {error}
                </label>
            )}
        </div>
    );
};

InputGroup.defaultProps = {
    type: 'text'
};

export { InputGroup };
