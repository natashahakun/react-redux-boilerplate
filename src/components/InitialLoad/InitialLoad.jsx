import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getJobs } from '../../actions/jobs.actions';
import { getPositions } from '../../actions/positions.actions';
import { useInitialLoad } from '../../effects';

const InitialLoad = ({ children, ...actions }) => {
    const initialLoadComplete = useInitialLoad(actions);
    return (
        <div>
            { initialLoadComplete && children }
        </div>
    );
};

InitialLoad.propTypes = {
    children: PropTypes.node.isRequired
};

const mapDispatchToProps = dispatch => ({
    handleGetJobs: () => dispatch(getJobs()),
    handleGetPositions: () => dispatch(getPositions())
});

export default connect(null, mapDispatchToProps)(InitialLoad);
