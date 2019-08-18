import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../../components';
import './RadioGroup.scss';

const RadioGroup = ({
    ariaLabelledby,
    checked,
    onChange,
    options
}) => (
    <div aria-labelledby={ariaLabelledby} className="RadioGroup" role="radiogroup">
        {options.map(option => (
            <Flex key={option.id}>
                <input
                    type="radio"
                    checked={checked === option.value}
                    id={option.id}
                    name={option.name || option.id}
                    onChange={onChange}
                    value={option.value}
                />
                <label htmlFor={option.name || option.id}>{option.label}</label>
            </Flex>
        ))}
    </div>
);

RadioGroup.defaultProps = {
    checked: false
};

RadioGroup.propTypes = {
    ariaLabelledby: PropTypes.string.isRequired, // id of labelling element
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            name: PropTypes.string,
            value: PropTypes.string.isRequired
        })
    ).isRequired
};

export default RadioGroup;
