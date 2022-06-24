
## Component Col
> like to bootstrap col class
```tsx
import {Col} from 'bear-react-iconsvg';

<Col col={24} sm md lg xl={12} xxl>
    content
</Col>

```
Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| col|sm|md|lg|xl|xxl    | ECol|number|true    | **No**  |               |                                                                                                                                                             |

## Component Row & Flex
> like to bootstrap row class
```tsx
import {Row, Flex} from 'bear-react-iconsvg';

<Row noGutters>
    content
</Col>
```
Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| noGutters              | boolean             | **No**   |               |                                                                                                                                                             |
| vertical               | ERowAlign           | **No**   |               |flex-start|center|flex-end                                                                                                          |                           
| horizontal             | ERowAlign           | **No**   |               |flex-start|center|flex-end                                                                                                        |

```tsx
import {Flex} from 'bear-react-iconsvg';

<Flex direction={EDirection.row}>
    content
</Col>
```
Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| direction              | EDirection          | **No**   |                |row|column                                                                                                                                                     |
| vertical               | ERowAlign           | **No**   |                |flex-start|center|flex-end                                                                                                                                   |
| horizontal             | ERowAlign           | **No**   |                |flex-start|center|flex-end                                                                                                                                                  |


## Component Container
> like to bootstrap container class
```tsx
import {Container} from 'bear-react-iconsvg';

<Container fluid>
    content
</Col>

```
Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fluid                  | boolean             | **No**   |                |                                                                                                                                                             |

## media styled-component func
> generate to css @media (min-width: 992px)
> if your need props, not `${props => ...}` in `${media.md ...}` 

```tsx
import {media} from 'bear-react-iconsvg';

const Box = styled.div<{
    isActive: bool
}>`
    ${props => css`
        ${media.md`
            display: ${props.isActive ? flex: none}
        `}
    `}
`
```


## WebStorm setup

<img src="./docs/assets/setting-media.jpg" height="150"/>

