import React from 'react';
import { storiesOf } from '@storybook/react';

import { Nav } from '../components';

const items = [
    {
        id: '1',
        text: 'Nav Link 1',
        to: '/'
    },
    {
        id: '2',
        text: 'Nav Link 2',
        to: '/'
    },
    {
        id: '3',
        text: 'Nav Link 3',
        to: '/'
    },
    {
        id: '4',
        text: 'Nav Link 4',
        to: '/'
    },
    {
        id: '5',
        text: 'Nav Link 5',
        to: '/'
    }
];

export default storiesOf('Nav', module)
    .add('default', () => (
        <Nav items={items} />
    ));
