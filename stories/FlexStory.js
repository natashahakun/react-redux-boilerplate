import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Flex } from '../src/components';

export default storiesOf('Flex', module)
    .add('default', () => (
        <Flex>
            <p>Some info</p>
            <Button>Click Here</Button>
        </Flex>
    ))

    .add('justifyContent', () => (
        <Flex justifyContent="space-around">
            <p>Some info</p>
            <Button>Click Here</Button>
        </Flex>
    ));
