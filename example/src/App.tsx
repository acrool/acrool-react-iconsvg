import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {GridThemeProvider} from 'bear-react-grid';
import Icon, {SvgSymbol} from './bear-react-icon';

import './App.css';
import './bootstrap-base.min.css';


const defaultTheme = {
    gridColumns: 24,
    gridGutterWidth: 15,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1540,
    },
    gridGutterWidthMedia: {
        sm: 15,
        md: 15,
        lg: 15,
        xl: 15,
        xxl: 15,
    }
};


function App() {


    return (
        <GridThemeProvider gridTheme={defaultTheme}>

            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <Icon code="play" color="#fff" size={30}/>
                    <Icon code="desktop" color="green" size={30}/>
                    <Icon code="ad" color="primary" size={30}/>
                    <Icon code="angle_down" color="secondary" size={40} sm={60} lg={10}/>


                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>

            </div>

            <SvgSymbol/>
        </GridThemeProvider>
    );
}

export default App;
