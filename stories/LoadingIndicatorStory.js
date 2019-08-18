import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingIndicator } from '../src/components';

export default storiesOf('LoadingIndicator', module)
    .add('default', () => (
        <LoadingIndicator accessibleText="Content is Loading..." />
    ));
