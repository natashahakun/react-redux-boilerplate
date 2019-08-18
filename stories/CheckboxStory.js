import React from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from '../src/components';

export default storiesOf('Checkbox', module)
    .add('default', () => <Checkbox id="checkboxStoryDefault" label="Default" onChange={() => {}} />)

    .add('checked', () => <Checkbox checked id="checkboxStoryChecked" label="Checked" onChange={() => {}} />)

    .add('disabled', () => <Checkbox disabled id="checkboxStoryDisabled" label="Disabled" onChange={() => {}} />)

    .add('checked disabled', () => <Checkbox checked disabled id="checkboxStoryCheckedDisabled" label="Checked Disabled" onChange={() => {}} />);
