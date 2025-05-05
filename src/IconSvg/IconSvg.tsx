import {clsx} from 'clsx';
import React, {CSSProperties} from 'react';

import styles from '../styles.module.scss';
import {IIconSetting, IIconSvgProps} from './types';
import {ignoreUnit} from './utils';


export interface ISvgProps extends IIconSvgProps, IIconSetting {
    'data-testid'?: string
}




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
    ...rest
}: ISvgProps) => {
    const iconCode = [idPrefix, code].join('');

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        data-testid={rest['data-testid']}
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
