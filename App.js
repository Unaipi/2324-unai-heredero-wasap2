import React, {Component} from "react";
import {StyleSheet, Text, View, Image, Alert,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chats from './app/components/Chat';
import States from './app/components/State';
import Calls from './app/components/Call';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActionButton from 'react-native-action-button';


const Tab = createMaterialTopTabNavigator();



export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      iconColor: 'white', // Color predeterminado
    };
  }

  render() {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Text style={styles.logo}>WhatsApp</Text>
          </View>
          <View style={styles.rightHeaderContainer}>
            <Icon name="search" color="#fff" size={23} style={styles.icon} />
            <Icon name="more-vert" color="#fff" size={23} style={styles.icon} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                indicatorStyle: {
                  backgroundColor: 'white',
                },
                style: {
                  backgroundColor: '#075e54',
                },
              }}
            >
              <Tab.Screen name="Chats" component={Chats} />
              <Tab.Screen name="States" component={States} />
              <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
        <ActionButton
          buttonColor="#3F51B5"
          onPress={this.cambiarColorSegunPantalla}
          renderIcon={() => (
            <Icon name="add" size={30} color={this.state.iconColor} />
          )}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
///////
mainContainer: {
  flex: 1,
  backgroundColor: '#F5FCFF'
},
headerContainer:{
  flex: 1,
  flexDirection:"row",
  justifyContent: "space-between",
  backgroundColor: "#075e54",
  alignItems: "center"
},
contentContainer: {
  flex: 8,
},
rightHeaderContainer: {
  flexDirection: "row",
  alignItems: "flex-end"
},
leftHeaderContainer: {
  flexDirection: "row",
  alignItems: "flex-start"
},
logo: {
  color: "#ffffff",
  fontSize: 18,
  marginLeft: 10,
  fontWeight: "bold"
},
icon: {
  padding: 5
}
});