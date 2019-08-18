import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div>
        <FormattedMessage id="application.title" />
    </div>
  );
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(App);
