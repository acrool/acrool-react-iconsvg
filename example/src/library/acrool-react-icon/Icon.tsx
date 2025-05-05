import React from 'react';
import IconSvg, {IIconSvgProps, ignoreUnit} from '@acrool/react-iconsvg';
import styled, {css} from 'styled-components';
import {TIconCode} from './SvgSymbol';
import {media} from '@acrool/react-grid';


const idPrefix = 'icon_';
// const path = asset(`/plugins/iconsvg/index.svg?v=${getAppVersion()}`);

interface IStyledProps {
    $sm?: IIconSvgProps['size']
    $md?: IIconSvgProps['size']
    $lg?: IIconSvgProps['size']
    $xl?: IIconSvgProps['size']
    $xxl?: IIconSvgProps['size'],
    $color?: string,
    $hoverColor?: string,
    $activeColor?: string,
    $isActive?: boolean,
}

interface IGridBreakpoints {
    sm?: IIconSvgProps['size']
    md?: IIconSvgProps['size']
    lg?: IIconSvgProps['size']
    xl?: IIconSvgProps['size']
    xxl?: IIconSvgProps['size'],
    hoverColor?: string,
    activeColor?: string,
    isActive?: boolean,
}

interface IProps extends IIconSvgProps, IGridBreakpoints {
    code: TIconCode,
}

/**
 * IconSvg
 * https://github.com/imagine10255/bear-react-iconsvg
 */
const Icon = (props: IProps) => {
    const {color, hoverColor, activeColor, sm, md, lg, xl, xxl, isActive,...baseProps} = props;
    return <ThemeIconSvg
        {...baseProps}
        idPrefix={idPrefix}
        symbolsPath=""

        $color={color}
        $hoverColor={hoverColor}
        $activeColor={activeColor}
        $isActive={isActive}

        $sm={sm}
        $md={md}
        $lg={lg}
        $xl={xl}
        $xxl={xxl}
    />;
};

export default Icon;



const ThemeIconSvg = styled(IconSvg)<IStyledProps>`
  color: ${props => props.$color};
  
  ${props => props.$color === 'primary' && css`
      color: var(--primary-color);
  `}
  ${props => props.$color === 'secondary' && css`
      color: var(--secondary-color);
  `}
  ${props => props.$isActive && props.$activeColor && css`
      color: ${props.$activeColor};
  `}
  ${props => props.$hoverColor && css`
      &:hover {
        color: ${props.$hoverColor};
      }
  `}
  

  ${props => props.$sm && css`
      ${media.sm`
          height: ${ignoreUnit(props.$sm)};
        `}
  `}
  ${props => props.$md && css`
      ${media.md`
            height: ${ignoreUnit(props.$md)};
        `}
  `}
  ${props => props.$lg && css`
      ${media.lg`
            height: ${ignoreUnit(props.$lg)};
        `}
  `}
  ${props => props.$xl && css`
      ${media.xl`
            height: ${ignoreUnit(props.$xl)};
        `}
  `}
  ${props => props.$xxl && css`
      ${media.xxl`
            height: ${ignoreUnit(props.$xxl)};
        `}
  `}
`;
