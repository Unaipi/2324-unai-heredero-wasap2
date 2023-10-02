import React, {Component} from "react";
import {View, Text, FlatList} from 'react-native';

import ListCall from "./ListCall";
import { FAKE_CALLS } from "../../android/app/data/data";
import axios from "axios";


export default class Calls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            callList : [],
            loaded: false
        }
    }

    componentDidMount() {
        axios.get(FAKE_CALLS)

        .then((response) => {
            this.setState({
                chatList: response.data,
                loaded: true
            });
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    render() {
        if(this.state.loaded){
        return (
            <FlatList
            data={this.state.chatList}
            renderItem={({item})=> (
            <ListCall
            first_name= {item.first_name}
            message={item.message}
            image={item.image}
            date={item.date}
            time={item.time}
            />
        )}
            keyExtractor={item => item.id}
            />
        )
     } //else {
    //     return(
    //     //<ActivityIndicator size ="large"/>
    //     )
    // }
}
}