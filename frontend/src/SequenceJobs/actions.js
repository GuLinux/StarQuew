import {  moveSequenceJobAPI, updateSequenceJobAPI, createSequenceJobAPI, deleteSequenceJobAPI, duplicateSequenceJobAPI } from '../middleware/api'
import Actions from '../actions'

export const SequenceJobs = {
    newPending: (itemType, sequenceID) => ({
        type: 'NEW_SEQUENCE_JOB',
        itemType,
        sequenceID,
    }),

    updated: (dispatch, sequence, data, wasNew) => {
        let sequenceJob = {...data.entities.sequenceJobs[data.result], sequence};
        dispatch({ type: 'SEQUENCE_JOB_UPDATED', sequenceJob})
        if(wasNew) {
            dispatch({type: 'SEQUENCE_JOB_REMOVED', id: 'pending', sequence})
            dispatch({type: 'SEQUENCE_JOB_CREATED', sequenceJob, sequence})
        }
    },

    saveSequenceJob: (sequenceJob,onSaved) => dispatch => {
        dispatch({type: 'REQUEST_SAVE_SEQUENCE_JOB', sequenceJob});

        let onError = response => {
            dispatch({type: 'REQUEST_SAVE_SEQUENCE_JOB_ERROR'})
            if(response.status === 400) {
                response.json().then(data => dispatch(Actions.Notifications.add('Error saving sequence item', data.error_message, 'warning')) );
                return true;
            }
            return false;
        }

        let onSuccess = (data, wasCreated) => {
            SequenceJobs.updated(dispatch, sequenceJob.sequence, data, wasCreated)
            onSaved();
        }

        if(sequenceJob.id === 'pending') {
            delete sequenceJob.id
            return createSequenceJobAPI(dispatch, sequenceJob, (data) => onSuccess(data, true) , onError);
        }
        return updateSequenceJobAPI(dispatch, sequenceJob, data => onSuccess(data, false), onError );
    },

    delete: (sequenceJob) => dispatch => {
        dispatch({type: 'REQUEST_DELETE_SEQUENCE_JOB', sequenceJob});
        return deleteSequenceJobAPI(dispatch, sequenceJob.sequence, sequenceJob.id, (data) => SequenceJobs.deleted(dispatch, sequenceJob));
    },

    deleted: (dispatch, sequenceJob) => {
        dispatch({type: 'SEQUENCE_JOB_DELETED', sequenceJob});
    },

    move: (sequenceJob, direction) => dispatch => {
        dispatch({type: 'REQUEST_SEQUENCE_JOB_MOVE', sequenceJob, direction});
        return moveSequenceJobAPI(dispatch, sequenceJob, direction, (data) => dispatch(Actions.Sequences.updated(data)));
    },

    duplicate: (sequenceJob) => dispatch => {
        dispatch({type: 'REQUEST_SEQUENCE_JOB_DUPLICATE', sequenceJob});
        return duplicateSequenceJobAPI(dispatch, sequenceJob, (data) => dispatch(Actions.Sequences.updated(data)));
    },


}

export default SequenceJobs;
