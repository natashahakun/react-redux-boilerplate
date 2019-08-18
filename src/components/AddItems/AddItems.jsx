import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';

import { Button, Flex, Input } from '../../components';
import './AddItems.scss';

const AddItems = ({
    items,
    label,
    max,
    name
}) => {
    const [newItem, setNewItem] = useState('');
    return (
        <FieldArray
            name={name}
            render={({ push, remove }) => (
                <>
                    <label htmlFor={name}>{label}</label>
                    {items.map((item, index) => (
                        <Flex key={`item-${item}`} className="AddItems__item">
                            <p>{item}</p>
                            <Button onClick={() => remove(index)}>-</Button>
                        </Flex>
                    ))}
                    { items.length < max && (
                        <Flex className="AddItems__item">
                            <Input value={newItem} onChange={e => setNewItem(e.target.value)} />
                            <Button
                                onClick={() => {
                                    push(newItem);
                                    setNewItem('');
                                }}
                            >
                                +
                            </Button>
                        </Flex>
                    )}
                </>
            )}
        />
    );
};

AddItems.defaultProps = {
    max: 10
};

AddItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    max: PropTypes.number,
    name: PropTypes.string.isRequired
};

export default AddItems;
