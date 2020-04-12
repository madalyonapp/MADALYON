import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityComponent,
  ImageBackground
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import TravelInterfacePage from './Travel/TravelInterfacePage'
import ReadInterfacePage from './Read/ReadInterfacePage'

function ReadInterface(){
    return(
        <ReadInterfacePage/>
    )
}
function TravelInterface(){
    return(
        <TravelInterfacePage/>
    )
}
function mainbody({navigation}){
    return(
        <View style={styles.container}>
          <ImageBackground source={require('../Foto/bokson.jpg')} style={styles.okurBox}>
            <TouchableOpacity style={styles.buton}
              onPress={()=> navigation.navigate('ReadInterface')}
            >
              <Text style={styles.text}>Okur</Text>
            </TouchableOpacity>
            </ImageBackground>
          <ImageBackground source={require('../Foto/travson.jpg')} style={styles.gezenBox}>
            <TouchableOpacity style={styles.buton}
              onPress={()=> navigation.navigate('TravelInterface')}
            >
              <Text style={styles.text}>Gezer</Text>
             </TouchableOpacity>
            </ImageBackground>
           
       
      </View>
    )
}
const Stack = createStackNavigator();
const  navigationOptionHandler = () => ({
  headerShown: false
})
export default function InterfaceSectionPage(){
    return (
      
        <Stack.Navigator>
            <Stack.Screen name="mainbody"component={mainbody} options={navigationOptionHandler}/>
          <Stack.Screen name="ReadInterface" component={ReadInterface} options={navigationOptionHandler} />
          <Stack.Screen name="TravelInterface" component={TravelInterface} options={navigationOptionHandler}/>
        </Stack.Navigator>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"stretch",
  },
  
  text: {
    color:"black",
    fontSize: 30,
    
  },
  gezenBox: {
    flex:1,
    justifyContent:"space-around",
    backgroundColor: "white",
    
    
  },
  okurBox: {
    flex:1,
    justifyContent:"space-around",
    backgroundColor: "gray",
   
  },
  buton:{
    alignItems:"center",
    width:'100%',height:'100%'
  }
});
