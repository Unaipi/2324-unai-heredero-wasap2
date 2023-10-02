import React, {Component} from "react";
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { FAKE_STATES } from "../../android/app/data/data";
import ListState from "./ListState";
export default class States extends Component {

    constructor(props) {
        super(props)
        this.state = {
            callList : [],
            loaded: false
        }
    }

    componentDidMount() {
        axios.get(FAKE_STATES)

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
            <ListState
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