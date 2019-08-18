import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Textarea.scss';

const Textarea = ({
    className,
    disabled,
    form,
    id,
    label,
    maxlength,
    name,
    onChange,
    required,
    value,
    ...props
}) => (
    <div className="Textarea" role="group">
        <label className="Textarea--label" htmlFor={id}>{label}</label>
        <textarea
            className={classNames('Textarea--input', `${className}`)}
            disabled={disabled}
            form={form}
            id={id}
            maxLength={maxlength}
            name={name || id}
            onChange={onChange}
            required={required}
            value={value}
            wrap="hard"
            {...props}
        />
    </div>
);

Textarea.defaultProps = {
    className: '',
    disabled: false,
    maxlength: 500,
    name: '',
    required: false,
    value: ''
};

Textarea.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxlength: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string
};

export default Textarea;
