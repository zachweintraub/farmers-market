import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { marketSchedule } from '../data';
import { availableProduce } from '../data';
import Market from './Market';
import Produce from './Produce';

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


   getProduce(month) {
    return  availableProduce.filter(produce => produce.id === month);
   }


    
    render() {
        let selectedDate = this.state.date;
        let thisMarket = this.getMarket(selectedDate.getDay())[0];
        let thisProduce = this.getProduce(selectedDate.getMonth())[0];


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
                <Produce
                    produce={thisProduce}
                />
                
            </div>
        );
    }
}

export default MarketCal;