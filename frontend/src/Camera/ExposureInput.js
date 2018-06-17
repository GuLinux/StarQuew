import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const parseExposure = (exposure) => parseFloat(exposure);
const exposureValid = (exposure) => parseExposure(exposure) > 0;
const isNumber = (exposure) => !isNaN(parseExposure(exposure));

const ExposureShootIcon = ({disabled, onClick}) => (
    <Button as='a' content='Shoot' icon='camera' disabled={disabled} size='tiny' onClick={onClick} />
)

const ExposureInput = ({shotParameters, onExposureChanged, onShoot, disabled}) => (
    <Input
        type='number'
        placeholder='seconds'
        size='tiny'
        min={0}
        max={999999}
        step={0.1}
        onChange={(e, data) => onExposureChanged(parseExposure(data.value))}
        disabled={disabled}
        value={isNumber(shotParameters.exposure) ? parseExposure(shotParameters.exposure) : ''}
        label={
            <ExposureShootIcon disabled={disabled || ! exposureValid(shotParameters.exposure)} onClick={() => onShoot(shotParameters)} />
        }
        labelPosition='right'
    />
);

export default ExposureInput;