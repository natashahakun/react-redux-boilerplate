import React from 'react';
import { storiesOf } from '@storybook/react';

import { Notification } from '../components';

export default storiesOf('Notification', module)
    .add('default success', () => (
        <Notification>
            <p>Success Message</p>
        </Notification>
    ))

    .add('warning', () => (
        <Notification type="warning">
            <p>Warning Message</p>
        </Notification>
    ))

    .add('error', () => (
        <Notification type="error">
            <p>Error Message</p>
        </Notification>
    ));
