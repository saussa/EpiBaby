import {RequestService} from "../APIrequests/RequestService";
import * as React from "react";
import {Image, Text} from 'react-native';
import {View} from "react-native";
import {Component} from 'react'
import EventEmitter from 'react-native-eventemitter';

export default class ChallengerListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challengers: [],
            loading: true
        };
    }

    componentDidMount() {
        EventEmitter.on('challengers.arrived', function (cs) {
            this.setState({
                challengers: JSON.parse(cs),
                loading: false
            });

        }.bind(this));

        if (this.state.loading)
            RequestService.GET();
    }

    render() {

        if (this.state.loading) {
            return (
                <Text>Loading..</Text>
            );
        } else {
            return (
                <View>
                    {this.state.challengers.map(function(challenger, ki) {

                    })}
                    {this.state.challengers.map((challenger, ki) =>(
                        [
                            <View key={ki}>
                                <Image source={{uri: challenger.image}}
                                   style={{width: 70, height: 70}}/>
                                <Text>{challenger.name}</Text>
                            </View>
                        ]
                    ))}
                </View>
            )
        }
    }
}