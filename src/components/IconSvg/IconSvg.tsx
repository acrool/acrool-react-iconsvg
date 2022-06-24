import React from 'react';
import styled, {css, keyframes} from 'styled-components/macro';
import {generateColor, generateRWDStyled, unit} from './utils';
import {IIconSetting, IIconSvgProps, IIconSvgRoot} from './types';


interface IProps extends IIconSvgProps, IIconSetting {}




/**
 * IconSvg
 */
const IconSvg = ({
    idPrefix = 'icon',
    symbolsPath = '',
    style,
    className,
    onClick,
    color = '#bdbdbd',
    hoverColor,
    activeColor,
    code,
    isRotateAnimation = false,
    rotate = 0,
    size = 28,
    sm,
    md,
    lg,
    xl,
    xxl,
}: IProps) => {
    const iconCode = [idPrefix, code].join('-');

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
        size={unit(size)}
        sm={unit(sm)}
        md={unit(md)}
        lg={unit(lg)}
        xl={unit(xl)}
        xxl={unit(xxl)}
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.size};
  height: ${props => props.size};


  vertical-align: middle;
  fill: currentColor;

  transform: rotate(${props => props.rotate}deg);

  ${props =>  props.isRotateAnimation && css`
    animation: ${rotateAnimine} 1s linear infinite;
  `}

  ${(props: any) => css`
    ${generateColor(props)};
    ${generateRWDStyled(props)};
  `}

`;