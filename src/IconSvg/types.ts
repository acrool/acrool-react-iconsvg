import CSS from 'csstype';

export type TSizeUnit = 'px'|'%'|'em'|'rem'|'vw'|'vh';
type TUnitSize = `${number}${TSizeUnit}`;

export type TSize = number|TUnitSize|'inherit';


type TColor = string;

export interface IIconSvgRoot {
    className?: string,
    style?: CSS.Properties,
    onClick?: (event: React.MouseEvent<Element>) => void;
    isRotateAnimation?: boolean;
    rotate?: number;
    size?: TSize;
    color?: TColor,
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
