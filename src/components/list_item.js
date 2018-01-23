import React, { PureComponent } from 'react';
import { TouchableOpacity} from 'react-native';
import { Body,Text,Thumbnail,View } from 'native-base';
import TimeAgo from './time';


export default class ListDataItem extends PureComponent{
    constructor(props){
        super(props);
        this.data = props.data;
        this._handlePress = this._handlePress.bind(this)
    }

    _handlePress(){
        const {url, title} = this.data
        this.props.onPress({url,title})
    }

    render(){
        return(
            <TouchableOpacity onPress={this._handlePress} style={{flexDirection:'row'}} activeOpacity={0.5}>
                <Thumbnail style={{ backgroundColor: '#eee', alignSelf: 'center' }} square large  source={{ cache:'force-cache', uri: this.data.urlToImage != null ? "http://image-api.suckup.de/image-api.php?file="+this.data.urlToImage+"&quality=25" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} />
                <Body>
                    <Text style={{fontSize: 16 }} numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 8 }}>
                        <Text note>{this.data.source.name}</Text>
                        <TimeAgo date={this.data.publishedAt} />
                    </View>
                </Body>
            </TouchableOpacity>
        )
    }
}