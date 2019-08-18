import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/components';

export default storiesOf('Button', module)
    .add('primary', () => <Button onClick={action('clicked')}>Primary Button</Button>)

    .add('secondary', () => <Button buttonType="secondary" onClick={action('clicked')}>Secondary Button</Button>)

    .add('tertiary', () => (
        <Button buttonType="tertiary" onClick={action('clicked')}>
            Tertiary Button
        </Button>
    ));
