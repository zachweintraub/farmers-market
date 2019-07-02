import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ProduceCal from './ProduceCal';
import MarketCal from './MarketCal';
import Header from './Header';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produce' component={ProduceCal} />
                <Route path='/markets' component={MarketCal} />
            </Switch>
        </div>
    )
}

export default App;