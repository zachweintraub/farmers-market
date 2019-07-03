import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { marketSchedule } from '../data';
import Market from './Market';

class MarketCal extends Component {
    
    constructor(props) {
        super(props);
        this.onChange = (date) => {
            this.setState({date});
            console.log(this.state.date);
        }
        this.state = {
            date: new Date()
        }
        console.log(marketSchedule);
    }

    getMarket(day) {
        if(day == 5) return [{message: "We don't work on Fridays!"}];
        return marketSchedule.filter(market => market.id === day);
    }
    
    render() {
        let selectedDate = this.state.date;
        let thisMarket = this.getMarket(selectedDate.getDay())[0]; //{location: "Epicodus", hours: "All Day", booth: "E7"}


        return(
            <div>
                <p>Select a date from the calendar below to find out where we'll be!</p>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
                <Market
                    market={thisMarket}
                />
                
            </div>
        );
    }
}

export default MarketCal;