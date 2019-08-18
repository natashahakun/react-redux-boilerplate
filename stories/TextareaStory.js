import React from 'react';
import { storiesOf } from '@storybook/react';

import { Textarea } from '../src/components';

export default storiesOf('Textarea', module)
    .add('default', () => <Textarea form="testFormId" id="defaultTextarea" label="Default" onChange={() => {}} />)

    .add('with value', () => <Textarea form="testFormId" id="withValueTextarea" label="With Value" onChange={() => {}} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />)

    .add('with grid', () => <Textarea cols={50} form="testFormId" id="withGridTextarea" label="With Grid" onChange={() => {}} rows={10} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />)

    .add('disabled', () => <Textarea disabled form="testFormId" id="disabledTextarea" label="Disabled" onChange={() => {}} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />);
