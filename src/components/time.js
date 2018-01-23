import React, { PureComponent } from 'react';
import moment from 'moment';
import {Text} from 'native-base';
export default class Time extends PureComponent{

    constructor(props){
        super(props);
        this.date = props.date;
    }

    render(){
        const time = moment(this.date || moment.now()).fromNow();
        return (
            <Text note numberOfLines={1} children={time} style={{ marginHorizontal: 8}}/>
        )
    }
}