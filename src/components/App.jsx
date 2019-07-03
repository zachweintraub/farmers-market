import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MarketCal from './MarketCal';
import Header from './Header';

function App() {
    return (
        <div>
        <style jsx global>{`
            body {
                background-color: #fcf090;
            }
        `}</style>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/markets' component={MarketCal} />
            </Switch>
        </div>
    )
}

export default App;