import CSS from 'csstype';

type sizeUnit = 'px'|'%'|'em';
type TUnitSize = `${number}${sizeUnit}`;

export type TSize = number|TUnitSize|'inherit';



export interface IMediaSize {
    sm?: TSize,
    md?: TSize,
    lg?: TSize
    xl?: TSize,
    xxl?: TSize,
}


export interface IIconSvgRoot extends IMediaSize {
    className?: string,
    style?: CSS.Properties,
    onClick?: () => void;
    color?: string|'inherit'|'primary'|'secondaryColor';
    hoverColor?: string|'inherit'|'primary'|'secondaryColor';
    activeColor?: string|'inherit'|'primary'|'secondaryColor';
    isRotateAnimation?: boolean;
    rotate?: number;
    size?: TSize;
}

export type TIconCode = unknown;


export interface IIconSetting {
    idPrefix?: string,
    symbolsPath: string,
}


export interface IIconSvgProps extends IIconSvgRoot{
    code: TIconCode,
}