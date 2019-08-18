import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../../components';
import './LoadingIndicator.scss';

const LoadingIndicator = ({ accessibleText }) => (
    <div aria-live="assertive" className="LoadingIndicator" role="alert">
        <Flex className="LoadingIndicator__spinner-container">
            <div className="LoadingIndicator__spinner" role="presentation" />
        </Flex>
        <p className="LoadingIndicator--accessible-text">{accessibleText}</p>
    </div>
);

LoadingIndicator.propTypes = {
    accessibleText: PropTypes.string.isRequired
};

export default LoadingIndicator;
