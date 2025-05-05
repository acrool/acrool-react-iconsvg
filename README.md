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


`^4.1.4 support react >=18.0.0 <20.0.0`


## Features

- Through the React component method, you can easily use the icon and change the size and color by specifying the Icon code.
- Use Icon Symbols to support multi-color Icon
- Support Nextjs 14+
- Secondary packaging is required



## Install

```bash
yarn add @acrool/react-iconsvg
```

## Usage

***step1.*** add in your main.tsx

```ts
import '@acrool/react-iconsvg/dist/index.css';
```

***step2.*** copy custom icon component` in your project, copy [IconComponent](./example/src/library/acrool-react-icon/Icon.tsx) files.

***step3.*** add Svg Symbols file `src/library/acrool-react-icon`

***step4.*** in your App.tsx

```tsx
import {SvgSymbol} from '@/library/acrool-react-icon';

const App = () => {
    return <div>
        <MainContent/>

        {SvgSymbol} {/* <~ add this */}
    </div>;
}
```

***step5.*** add in your eslint ignore


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
[Acrool Icon Symbols](https://github.com/acrool/acrool-icon-symbols) - svgs build icon-symbols
[Acrool Icon Symbols Cli](https://github.com/acrool/acrool-icon-symbols-cli) - svgs build icon-symbols

## Online Manager
[acrool](https://docs.acrool.com/icon/manage-icon-symbol) - Project management system, providing icon management tools


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-iconsvg/main/play-in-example-button.svg)](https://acrool-react-iconsvg.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
