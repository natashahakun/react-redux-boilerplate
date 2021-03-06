import React, { Fragment } from 'react';

import '../src/styles/global.scss';

import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
import CheckboxStory from './CheckboxStory';
import FlexStory from './FlexStory';
import FooterStory from './FooterStory';
import LinkWrapperStory from './LinkWrapperStory';
import LoadingIndicatorStory from './LoadingIndicatorStory';
import NavStory from './NavStory';
import NotificationStory from './NotificationStory';
import RadioGroupStory from './RadioGroupStory';
import TextareaStory from './TextareaStory';

const StoryBook = () => (
    <Fragment>
        <ButtonStory />
        <CardStory />
        <CheckboxStory />
        <FlexStory />
        <FooterStory />
        <LinkWrapperStory />
        <LoadingIndicatorStory />
        <NavStory />
        <NotificationStory />
        <RadioGroupStory />
        <TextareaStory />
    </Fragment>
);

export default StoryBook;
