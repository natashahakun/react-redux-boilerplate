import React from 'react';
import { storiesOf } from '@storybook/react';

import { AddItems } from '../components';

const items = ['one', 'two', 'three'];

export default storiesOf('AddItems', module)
    .add('default', () => <AddItems items={items} label="Numbers" max={5} name="testAddItems" />);
