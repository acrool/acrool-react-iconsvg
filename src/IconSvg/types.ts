import CSS from 'csstype';

export type TSizeUnit = 'px'|'%'|'em'|'rem'|'vw'|'vh';
type TUnitSize = `${number}${TSizeUnit}`;

export type TSize = number|TUnitSize|'inherit';


type TColor = string|'inherit'|'primary'|'secondary'|'contrast'|'danger'|'disabled';
export interface IIconColor {
    color?: TColor,
    activeColor?: TColor,
    hoverColor?: TColor,
    isActive?: boolean,
}

export interface IIconSvgRoot extends IIconColor {
    className?: string,
    style?: CSS.Properties,
    onClick?: (event: React.MouseEvent<Element>) => void;
    isRotateAnimation?: boolean;
    rotate?: number;
    size?: TSize;
    defaultUnit?: TSizeUnit;
}

export type TIconCode = unknown;


export interface IIconSetting {
    idPrefix?: string,
    symbolsPath: string,
}


export interface IIconSvgProps extends IIconSvgRoot{
    code: TIconCode,
}
