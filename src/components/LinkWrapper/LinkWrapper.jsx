import React from 'react';
import PropTypes from 'prop-types';

import './LinkWrapper.scss';

const LinkWrapper = ({ children }) => (
    <div className="LinkWrapper" role="group">
        {children}
    </div>
);

LinkWrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default LinkWrapper;
