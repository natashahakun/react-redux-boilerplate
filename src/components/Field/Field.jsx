import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import { Input } from '../../components';

const Field = ({ name, ...props }) => <Input name={useField(name)} {...props} />;

Field.propTypes = {
    name: PropTypes.string.isRequired
};

export default Field;
