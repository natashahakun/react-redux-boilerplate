import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
    id,
    label,
    name,
    value,
    type,
    ...props
}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name || id} type={type} {...props} />
        </div>
    );
}

Input.defaultProps = {
    name: '',
    value: '',
    type: 'text'
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]), // array for Formik
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string
};
