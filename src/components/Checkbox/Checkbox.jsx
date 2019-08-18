import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Flex } from '../../components';
import './Checkbox.scss';

const Checkbox = ({
    checked,
    disabled,
    id,
    label,
    name,
    onChange
}) => (
    <Flex className="Checkbox">
        <input className="Checkbox__input" checked={checked} id={id} name={name || id} onChange={onChange} type="checkbox" />
        <span aria-hidden="true" className={classNames('Checkbox__styled-checkbox', { checked, disabled })} role="presentation" />
        <label className="Checkbox__label" htmlFor={id}>{label}</label>
    </Flex>
);

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    name: ''
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
