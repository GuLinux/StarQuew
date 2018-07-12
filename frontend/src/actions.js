import Sequences from './Sequences/actions';
import SequenceItems from './SequenceItems/actions';
import INDIServer from './INDI-Server/actions';
import Notifications from './Notifications/actions';
import Gear from './Gear/actions';
import INDIService from './INDI-Service/actions';
import Modals from './Modals/actions';
import Camera from './Camera/actions';
import Settings from './Settings/actions';
import Image from './Image/actions';
import Navigation from './Navigation/actions';

export const Actions = {
    Sequences,
    SequenceItems,
    INDIServer,
    Notifications,
    Gear,
    serverError: (source, payloadType, payload, responseBody) => ({ type: 'SERVER_ERROR', source, payloadType, payload, responseBody }),
    INDIService,
    Modals,
    Camera,
    Settings,
    Image,
    Navigation,
}

export default Actions
