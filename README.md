# Acrool React IconSvg

<a href="https://acrool-react-iconsvg.pages.dev/" title="Acrool React IconSvg - IconSymbols Of React Component Design">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-iconsvg/main/example/public/og.webp" alt="Acrool React IconSvg Logo"/>
</a>

<p align="center">
   This is the element using svg symbol as icon in React
</p>



<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-iconsvg.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-iconsvg)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-iconsvg?style=for-the-badge)](https://github.com/acrool/react-iconsvg/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-iconsvg?style=for-the-badge)](https://github.com/acrool/acrool-react-iconsvg/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-iconsvg.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-iconsvg)
[![npm](https://img.shields.io/npm/dt/@acrool/react-iconsvg.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-iconsvg)

</div>


## Features

- Through the React component method, you can easily use the icon and change the size and color by specifying the Icon code.
- Use Icon Symbols to support multi-color Icon
- Support Nextjs 14+



## Install

```bash
yarn add @acrool/react-iconsvg
```

## Usage

add in your main.tsx

```ts
import '@acrool/react-iconsvg/dist/index.css';
```

> if you need `@acrool/react-iconsvg`, use rwd size setting,
add custom icon component in your project, copy [IconComponent](./example/src/library/acrool-react-icon/Icon.tsx) files.



## add Svg Symbols file `src/library/acrool-react-icon/SvgSymbols.tsx`

```tsx
const SvgSymbol = (<svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol id="icon_add_members" viewBox="0 0 1024 1024">
        <path d="M891.7579 822.5205H782.8041V935.0921H673.8548V822.5205H564.9011V709.8994H673.8548L673.8548 597.329H782.8041V709.8994H891.7534V822.5205L891.7579 822.5205H891.7579ZM455.9315 822.5205C455.9315 841.7509 458.4575 860.3757 461.437 878.7798L129.6353 878.7798C129.2346 871.1694 129.1018 863.4318 129.1018 855.7696C129.1018 624.0651 275.4526 436.2897 455.9315 436.2897C527.3419 436.2897 592.8833 466.4523 646.6122 516.3C534.3108 569.7745 455.9315 686.3882 455.9315 822.5205H455.9315H455.9315ZM458.9899 393.143C367.8583 393.143 294.0199 325.3943 294.0199 241.8979C294.0199 158.4285 367.8583 90.7091 458.9899 90.7091C550.1136 90.7091 624.006 158.4285 624.006 241.8979C624.006 325.3943 550.1136 393.143 458.9899 393.143H458.9899H458.9899ZM458.9899 393.143" />
    </symbol>

    <symbol id="icon_align_center" viewBox="0 0 1024 1024">
        <path d="M106.145 196.895H922.895Q941.6803 196.895 954.9751 210.1898T968.27 242.27T954.9751 274.3501T922.895 287.645H106.145Q87.3598 287.645 74.0649 274.3501T60.77 242.27T74.0649 210.1898T106.145 196.895ZM196.895 741.395H832.145Q850.9303 741.395 864.2251 754.6898T877.52 786.77T864.2251 818.8501T832.145 832.145H196.895Q178.1098 832.145 164.8149 818.8501T151.52 786.77T164.8149 754.6898T196.895 741.395ZM106.145 559.895H922.895Q941.6803 559.895 954.9751 573.1899T968.27 605.27T954.9751 637.3501T922.895 650.645H106.145Q87.3598 650.645 74.0649 637.3501T60.77 605.27T74.0649 573.1899T106.145 559.895ZM196.895 378.395H832.145Q850.9303 378.395 864.2251 391.6898T877.52 423.77T864.2251 455.8501T832.145 469.145H196.895Q178.1098 469.145 164.8149 455.8501T151.52 423.77T164.8149 391.6898T196.895 378.395Z" />
    </symbol>
</svg>);
export default SvgSymbol;
```

in your App.tsx

```tsx
import {SvgSymbol} from '@/library/acrool-react-icon';

const App = () => {
    return <div>
        <MainRouter/>
        
        {SvgSymbol} {/* <~ add this */}
    </div>;
}
```

## Use Sample

```tsx
<Icon code="play" color="#fff" size={100}/>
<Icon code="desktop" color="green" size={100}/>
<Icon code="ad" color="var(--primary-color)" size={100}/>
<Icon code={EIconCode.arrow_right} color="secondary" rotate={90} size={100}/>
<Icon code={EIconCode.ad} size={100} hoverColor="red"/>
<Icon code={EIconCode.upload} size={100} activeColor="blud" isActive/>
<Icon code={EIconCode.redo} size={100} isRotateAnimation/>
<Icon code={EIconCode.help} size={100} onClick={() => window.alert('click!')}/>
```




## Tools
[acrool-icon-symbols](https://github.com/acrool/acrool-icon-symbols) - svgs build icon-symbols

## Online Manager
[acrool](https://docs.acrool.com/icon/manage-icon-symbol) - Project management system, providing icon management tools


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-iconsvg/main/play-in-example-button.svg)](https://acrool-react-iconsvg.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
