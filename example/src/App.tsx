import {SvgSymbol} from './library/acrool-react-icon';

import './App.css';
import {GridThemeProvider} from '@acrool/react-grid';
import Example from './views/Example';
import Banner from './components/Banner';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>

                <Example/>
            </div>

            <SvgSymbol/>
        </GridThemeProvider>
    );
}

export default App;


