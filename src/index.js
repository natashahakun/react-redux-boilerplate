import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux'
import configureStore from './store';
import flatten from 'flat';

import messagesEn from './translations/en.json';

import './styles/global.scss';
import App from './App';

const messages = {
    en: flatten(messagesEn)
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);
