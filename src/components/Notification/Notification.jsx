import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Notification.scss';

const Notification = ({ ariaRelevant, children, type }) => (
    <div
        aria-live={type === 'error' ? 'assertive' : 'polite'}
        aria-relevant={ariaRelevant}
        className={
            classNames(
                'Notification',
                {
                    'Notification--error': type === 'error',
                    'Notification--warning': type === 'warning'
                }
            )}
        role={type === 'error' ? 'alert' : 'status'}
    >
        { children }
    </div>
);

Notification.defaultProps = {
    ariaRelevant: '',
    type: 'success'
};

Notification.propTypes = {
    ariaRelevant: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error'])
};

export default Notification;
