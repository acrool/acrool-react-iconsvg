import React, {CSSProperties} from 'react';
import {unit} from './utils';
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
    color = '#bdbdbd',
    hoverColor,
    activeColor,
    isActive,
    code,
    isRotateAnimation = false,
    rotate = 0,
    size = 28,
}: ISvgProps) => {
    const iconCode = [idPrefix, code].join('');

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            ...style,
            '--icon-rotate': rotate ? `${rotate}deg`: undefined,
            '--icon-hover-color': hoverColor,
            '--icon-active-color': activeColor,
            '--icon-color': color,
            '--icon-size': unit(size),
        } as CSSProperties}
        className={clsx(styles.root, className)}
        data-rotate-animation={isRotateAnimation ? '' : undefined}
        data-active={isActive ? '': undefined}
        onClick={onClick}
    >
        <use xlinkHref={`${symbolsPath}#${iconCode}`}/>
    </svg>;
};

export default IconSvg;
