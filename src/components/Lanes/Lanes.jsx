import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Board from 'react-trello';
import { connect } from 'react-redux';

import { getLanes } from '../../actions/lanes.actions';
import { lanesWithSortedApplications } from '../../selectors/lanes.selectors';
import { updateLanePosition } from '../../actions/application.actions';
import './Lanes.scss';

const formatData = lanes => ({
    lanes: lanes.map(lane => ({
        id: `${lane.id}`,
        title: lane.title,
        cards: lane.applications.map(application => ({
            id: `${application.id}`,
            title: application.name,
            draggable: true
        }))
    }))
});

const Lanes = ({ handleGetLanes, handleUpdateLanePosition, lanes }) => {
    useEffect(() => {
        handleGetLanes();
    }, [handleGetLanes]);

    return (
        <div className="Lanes">
            <Board
                data={formatData(lanes)}
                handleDragEnd={(cardId, sourceLaneId, targetLaneId, position) => {
                    handleUpdateLanePosition(Number(cardId), Number(targetLaneId), Number(position));
                }}
            />
        </div>
    );
};

Lanes.defaultProps = {
    lanes: []
};

Lanes.propTypes = {
    handleGetLanes: PropTypes.func.isRequired,
    handleUpdateLanePosition: PropTypes.func.isRequired,
    lanes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        applications: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.is,
            jobId: PropTypes.number,
            name: PropTypes.string
        })).isRequired
    }))
};

const mapStateToProps = state => ({
    lanes: lanesWithSortedApplications(state)
});

const mapDispatchToProps = dispatch => ({
    handleGetLanes: () => dispatch(getLanes()),
    handleUpdateLanePosition: (applicationId, laneId, lanePosition) => (
        dispatch(updateLanePosition(applicationId, laneId, lanePosition))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Lanes);
