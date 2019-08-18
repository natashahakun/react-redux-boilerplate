import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from '../src/components';

const items = [
    {
        id: '1',
        link: false,
        text: 'About',
        to: '/'
    },
    {
        id: '2',
        link: false,
        text: 'Terms',
        to: '/'
    },
    {
        id: '3',
        link: false,
        text: 'Privacy',
        to: '/'
    },
    {
        id: '4',
        link: false,
        text: 'Pricing',
        to: '/'
    },
    {
        id: '5',
        link: false,
        text: 'Contact',
        to: '/'
    }
];

export default storiesOf('Footer', module)
    .add('default', () => (
        <Footer items={items} />
    ));
