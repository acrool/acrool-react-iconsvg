import React, {CSSProperties} from 'react';
import {ignoreUnit} from './utils';
import {IIconSetting, IIconSvgProps} from './types';
import {clsx} from 'clsx';
import styles from '../styles.module.scss';


export interface ISvgProps extends IIconSvgProps, IIconSetting {}




/**
 * IconSvg
 */
const IconSvg = ({
    idPrefix = 'icon_',
    symbolsPath = '',
    style,
    className,
    onClick,
    color,
    code,
    isRotateAnimation = false,
    rotate = 0,
    size = 28,
    defaultUnit = 'px',
}: ISvgProps) => {
    const iconCode = [idPrefix, code].join('');

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            ...style,
            '--icon-rotate': rotate ? `${rotate}deg`: undefined,
        } as CSSProperties}
        color={color}
        width="auto"
        height={ignoreUnit(size, defaultUnit)}
        rotate={rotate ? `${rotate}deg`: undefined}
        className={clsx(styles.root, className)}
        data-rotate-animation={isRotateAnimation ? '' : undefined}
        onClick={onClick}
    >
        <use xlinkHref={`${symbolsPath}#${iconCode}`}/>
    </svg>;
};

export default IconSvg;
