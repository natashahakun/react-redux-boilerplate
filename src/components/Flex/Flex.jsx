import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Flex.scss';

const Flex = ({
    alignContent,
    alignItems,
    children,
    className,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    ...props
}) => (
    <div
        className={classNames('Flex', `${className}`)}
        role="group"
        style={{
            alignContent,
            alignItems,
            display,
            flexDirection,
            flexWrap,
            justifyContent
        }}
        {...props}
    >
        {children}
    </div>
);

Flex.defaultProps = {
    alignContent: '',
    alignItems: 'center',
    className: '',
    display: 'flex',
    flexDirection: '',
    flexWrap: '',
    justifyContent: ''
};

Flex.propTypes = {
    alignContent: PropTypes.oneOf(['', 'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'initial', 'inherit']),
    alignItems: PropTypes.oneOf(['', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
    className: PropTypes.string,
    display: PropTypes.oneOf(['flex', 'inline-flex']),
    flexDirection: PropTypes.oneOf(['', 'row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']),
    flexWrap: PropTypes.oneOf(['', 'nowrap', 'unset', 'wrap', 'wrap-reverse', 'initial', 'inherit']),
    justifyContent: PropTypes.oneOf(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit'])
};

export default Flex;
