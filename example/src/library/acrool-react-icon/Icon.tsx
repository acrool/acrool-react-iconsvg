import React from 'react';
import IconSvg, {IIconSvgProps, ignoreUnit} from '@acrool/react-iconsvg';
import styled, {css} from 'styled-components';
import {TIconCode} from './types';
import {media} from '@acrool/react-grid';


const idPrefix = 'icon_';
// const path = asset(`/plugins/iconsvg/index.svg?v=${getAppVersion()}`);

interface IGridBreakpoints {
    sm?: IIconSvgProps['size']
    md?: IIconSvgProps['size']
    lg?: IIconSvgProps['size']
    xl?: IIconSvgProps['size']
    xxl?: IIconSvgProps['size']
}

interface IProps extends IIconSvgProps, IGridBreakpoints {
    code: TIconCode,
}

/**
 * IconSvg
 * https://github.com/imagine10255/bear-react-iconsvg
 */
const Icon = (props: IProps) => {
    return <ThemeIconSvg
        {...props}
        idPrefix={idPrefix}
        symbolsPath=""
    />;
};

export default Icon;



const ThemeIconSvg = styled(IconSvg)<IGridBreakpoints>`
  
  ${props => props.color === 'primary' && css`
      --icon-color: var(--primary-color) !important;
  `}
  ${props => props.color === 'secondary' && css`
      --icon-color: var(--secondary-color) !important;
  `}



  ${props => props.sm && css`
      ${media.sm`
          --icon-size: ${ignoreUnit(props.sm)} !important;
        `}
  `}
  ${props => props.md && css`
      ${media.md`
            --icon-size: ${ignoreUnit(props.md)} !important;
        `}
  `}
  ${props => props.lg && css`
      ${media.lg`
            --icon-size: ${ignoreUnit(props.lg)} !important;
        `}
  `}
  ${props => props.xl && css`
      ${media.xl`
            --icon-size: ${ignoreUnit(props.xl)} !important;
        `}
  `}
  ${props => props.xxl && css`
      ${media.xxl`
            --icon-size: ${ignoreUnit(props.xxl)} !important;
        `}
  `}
`;
