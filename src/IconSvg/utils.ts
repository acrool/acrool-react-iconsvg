import {TSize, TSizeUnit} from './types';


/**
 * 省略單位
 * @param size
 * @param defaultUnit
 */
export const ignoreUnit = (size?: TSize, defaultUnit: TSizeUnit = 'px'): TSize|undefined => {
    if(!size){
        return undefined;
    }
    return typeof size === 'number'? `${size}${defaultUnit}`: size;
};

