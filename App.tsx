import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';



export default class App extends Component{
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Text style={styles.logo}>WhatsApp</Text>
          </View>
          <View style={styles.rightHeaderContainer}>

          </View>
        </View>
        <View style={styles.contentContainer}>
    
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  flex: 8
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