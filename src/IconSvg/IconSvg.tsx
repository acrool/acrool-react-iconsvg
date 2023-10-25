import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {generateColor, unit} from './utils';
import {IIconSetting, IIconSvgProps, IIconSvgRoot} from './types';


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

    return <IconSvgRoot
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
        isRotateAnimation={isRotateAnimation}
        onClick={onClick}
        rotate={rotate}
        color={color}
        hoverColor={hoverColor}
        activeColor={activeColor}
        isActive={isActive}
        size={unit(size)}
    >
        <use xlinkHref={`${symbolsPath}#${iconCode}`}/>
    </IconSvgRoot>;
};

export default IconSvg;

const rotateAnimine = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const IconSvgRoot = styled.svg<IIconSvgRoot>`
  --svg-size: ${props => props.size}
  
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: var(--svg-size);
  height: var(--svg-size);


  vertical-align: middle;
  fill: currentColor;

  transform: rotate(${props => props.rotate}deg);

  ${props =>  props.isRotateAnimation && css`
    animation: ${rotateAnimine} 1s linear infinite;
  `}
  ${(props: IIconSvgRoot) => generateColor(props)}
`;
