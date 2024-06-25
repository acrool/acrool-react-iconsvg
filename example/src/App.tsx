import {SvgSymbol} from './library/acrool-react-icon';

import './App.css';
import './bootstrap-base.min.css';
import {GridThemeProvider} from '@acrool/react-grid';
import Example from './views/Example';
import Github from './assets/github.svg?react';



function App() {



    const renderHeader = () => {

        const repositoryUrl = 'https://github.com/acrool/acrool-react-iconsvg';
        const name = 'Acrool React IconSvg';

        return <>
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                <Github width={40} height={40}/>
            </a>

            <div className="banner-wrapper">
                <img src="/logo.svg" alt={name}/>
                <h1>{name}</h1>
            </div>
        </>;
    };


    return (
        <GridThemeProvider>
            <div className="App">
                {renderHeader()}

                <Example/>
            </div>


            <SvgSymbol/>
        </GridThemeProvider>
    );
}

export default App;


