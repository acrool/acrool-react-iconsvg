import {TSize} from './types';


export const unit = (size?: TSize): TSize|undefined => {
    if(!size){
        return undefined;
    }
    return typeof size === 'number'? `${size}px`: size;
};

