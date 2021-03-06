import { combineReducers } from 'redux';
import { app } from './App/reducer';
import sequenceJobs from './SequenceJobs/reducer';
import sequences from './Sequences/reducer';
import indiserver from './INDI-Server/reducer';
import notifications from './Notifications/reducer';
import gear from './Gear/reducer';
import errors from './Errors/reducer';
import indiservice from './INDI-Service/reducer';
import { camera } from './Camera/reducer';
import settings from './Settings/reducer';
import image from './Image/reducer';
import navigation from './Navigation/reducer';
import commands from './Commands/reducer';
import { plateSolving } from './PlateSolving/reducer';
import { network } from './Network/reducer';
import { backendSelection } from './BackendSelection/reducer';
import { catalogs } from './Catalogs/reducer';
import { phd2 } from './PHD2/reducer';
import { polarAlignment } from './PolarAlignment/reducer';

export const astroPhotoPlusReducer = combineReducers({
    app,
    sequenceJobs,
    sequences,
    network,
    indiserver,
    notifications,
    errors,
    gear,
    indiservice,
    camera,
    settings,
    image,
    navigation,
    commands,
    plateSolving,
    backendSelection,
    catalogs,
    phd2,
    polarAlignment,
});

