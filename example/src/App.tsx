import {SvgSymbol} from './library/acrool-react-icon';

import './App.css';
import './bootstrap-base.min.css';
import {GridThemeProvider} from '@acrool/react-grid';
import Example from './views/Example';
import Github from './assets/github.svg?react';



function App() {


    return (
        <GridThemeProvider>
            <div className="App">
                <a href="https://github.com/acrool/acrool-react-iconsvg" target="_blank" rel="noopener noreferrer">
                    <Github width={40} height={40}/>
                </a>

                <div style={{textAlign: 'center', border: '1px solid #606060', display: 'flex', flexDirection: 'column', padding: '20px', margin: '20px 0'}}>
                    <img src="/logo.svg" style={{height: '100px'}} alt="Acrool React Locale"/>
                    <div style={{fontSize: '40px', color: '#fff', fontWeight: 700}}>Acrool React IconSvg</div>
                </div>

                <Example/>

            </div>


            <SvgSymbol/>
        </GridThemeProvider>
    );
}

export default App;


