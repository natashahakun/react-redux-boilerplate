import React from 'react';
import { storiesOf } from '@storybook/react';

import { RadioGroup } from '../src/components';

const options = [
    {
        id: '1',
        label: 'First Choice',
        value: 'first'
    },
    {
        id: '2',
        label: 'Second Choice',
        value: 'second'
    },
    {
        id: '3',
        label: 'Third Choice',
        value: 'third'
    }
];

export default storiesOf('RadioGroup', module)
    .add('default', () => (
        <div>
            <h2 id="defaultRadioGroupHeading">Default Radio Group</h2>
            <RadioGroup ariaLabelledby="defaultRadioGroupHeading" onChange={() => {}} options={options} />
        </div>
    ))

    .add('checked', () => (
        <div>
            <h2 id="checkedRadioGroupHeading">Checked Radio Group</h2>
            <RadioGroup ariaLabelledby="checkedRadioGroupHeading" checked={options[1].value} onChange={() => {}} options={options} />
        </div>
    ));
