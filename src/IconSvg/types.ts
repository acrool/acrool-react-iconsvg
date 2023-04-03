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

type TColor = string|'inherit'|'primary'|'secondary'|'contrast'|'danger'|'disabled';


export interface IIconColor {
    color: string,
    activeColor?: string,
    hoverColor?: string,
    isActive?: boolean,
}

export interface IIconSvgRoot extends IMediaSize, IIconColor {
    className?: string,
    style?: CSS.Properties,
    onClick?: (event: React.MouseEvent<Element>) => void;
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