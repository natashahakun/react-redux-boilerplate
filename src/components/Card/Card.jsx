import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.scss';

const Card = ({ children, className }) => (
    <div className={classNames('Card', `${className}`)} role="group">
        {children}
    </div>
);

Card.defaultProps = {
    className: ''
};

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
    className: PropTypes.string
};

export default Card;
