# bear-react-iconsvg

> Most modern rwd grid system by react + styled-component


[![NPM](https://img.shields.io/npm/v/bear-react-iconsvg.svg)](https://www.npmjs.com/package/bear-react-iconsvg)
[![npm](https://img.shields.io/npm/dm/bear-react-iconsvg.svg)](https://www.npmjs.com/package/bear-react-iconsvg)

This project [demo](https://imagine10255.github.io/bear-react-iconsvg/)

## Support Version Map

React | Styled-component | React Scripts | Bear React Grid | 
------|:-----------------|---------------|----------------:|
18    | 5.3.5            | 5.0.1         |           2.0.0 |
17    | 5.2.1            | 4.0.3         |          1.0.23 |

## Install

```bash
yarn add bear-react-iconsvg
```

## Usage
in your App.js add  
`see the example/src/App.js`

```tsx
import {GridThemeProvider} from 'bear-react-iconsvg';
import 'bear-react-iconsvg/dist/index.css';

<GridThemeProvider gridTheme={{
          gridGutterWidth: 10,
          gridColumns: 24,
          gridBreakpoints: {
              xs: 0,
              sm: 576,
              md: 768,
              lg: 992,
              xl: 1200,
              xxl: 1540,
          },
          containerMaxWidths: {
              xs: 540,
              sm: 540,
              md: 720,
              lg: 960,
              xl: 1140,
              xxl: 1141,
          },
      }}>
    <App/>
</GridThemeProvider>
```

use in your page/component:
```tsx
import {Container, Row, Col, media} from 'bear-react-iconsvg';

const MyPage = () => {
    return (
        <Container>
            <MyTitle>bear-react-iconsvg</MyTitle>
            <Row>
                <Col col>col2 (50%) </Col>
                <Col col>col2 (50%) </Col>
            </Row>
        </Container>
    );
}

// use rwd
const MyTitle = styled.div`
    font-size: 12px;
    ${media.md`
        font-size: 14px;
    `}
`

```

There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bear-react-iconsvg-lqsn6)

[Component and setup docs](./docs/component.md)


## License

MIT © [imagine10255](https://github.com/imagine10255)
