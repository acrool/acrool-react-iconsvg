import React from 'react';
import IconSvg, {IIconSvgProps} from '@acrool/react-iconsvg';
import styled, {css} from 'styled-components';
import {TIconCode} from './types';


const idPrefix = 'icon_';
// const path = asset(`/plugins/iconsvg/index.svg?v=${getAppVersion()}`);


interface IProps extends IIconSvgProps {
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
        color={props.color}
        symbolsPath=""
    />;
};

export default Icon;



const ThemeIconSvg = styled(IconSvg)`
  
  ${props => props.color === 'primary' && css`
      --icon-color: var(--primary-color) !important;
  `}
  ${props => props.color === 'secondary' && css`
    --icon-color: var(--secondary-color) !important;
  `}
`;
