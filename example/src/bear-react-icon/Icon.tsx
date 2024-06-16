import React from 'react';
import IconSvg, {IIconSvgProps} from '@acrool/react-iconsvg';
import styled from 'styled-components';
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
        symbolsPath=""
    />;
};

export default Icon;



const ThemeIconSvg = styled(IconSvg)`
  --primary-color: ${props => props.theme.primaryColor};
  --secondary-color: ${props => props.theme.secondaryColor}
`;
