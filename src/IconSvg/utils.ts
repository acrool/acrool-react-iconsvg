import {css} from 'styled-components';
import {IIconColor, TSize} from './types';


export const unit = (size?: TSize): TSize|undefined => {
    if(!size){
        return undefined;
    }
    return typeof size === 'number'? `${size}px`: size;
};


/**
 * 產生 顏色樣式
 * @param props
 */
export const generateColor = (props: IIconColor) => {
    return `
      color: ${getColor((props.isActive && props.activeColor) ? props.activeColor: props.color)};
       
      ${props.hoverColor ? css`
        :hover{
          color: ${getColor(props.hoverColor)};
        }
      `: ''}
      `;
};

/**
 * 取得 顏色
 * @param colorName
 */
export const getColor = (colorName?: string) => {
    if(colorName && ['primary', 'secondary','danger','contrast','disabled'].includes(colorName)){
        return `var(--${colorName}-color)`;
    }
    return undefined;
};
