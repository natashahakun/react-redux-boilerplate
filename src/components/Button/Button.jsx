import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
    buttonType, children, onClick, type, ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={classNames('Button', `Button--${buttonType}`)} onClick={onClick} type={type}>
        {children}
    </button>
);

Button.defaultProps = {
    buttonType: 'primary',
    children: '',
    disabled: false,
    onClick: () => {},
    type: 'button'
};

Button.propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
