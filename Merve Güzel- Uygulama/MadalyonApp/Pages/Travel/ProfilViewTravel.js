import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ExperiencePageTravel from './ExperiencePageTravel';
import Useinfo from './UseinfoTravel'
import TravelMap from './TravelMap';
function Bilgilerim (){
    return(
       
           <Useinfo/>
       
    )
}
function  Deneyimlerim(){
    return(
        <View style={styles.view}>
            <View>
                <ExperiencePageTravel/>
            </View>
        </View>
    )
}
function  Haritam(){
    return(
        <TravelMap/>
    )
}
const Tab = createMaterialTopTabNavigator();
export default function ProfilViewTravel(){
 
    return (
        <Tab.Navigator
            tabBarOptions={{
                
                activeTintColor:'#e67300',
                inactiveTintColor:'orange',
                labelStyle:{
                    fontWeight:'bold'
                },
                tabStyle:{
                    backgroundColor:'#f2f2f2',
                    
                },
                style:{
                    elevation:0,
                },
            }}
        >
          <Tab.Screen name="Bilgilerim" component={Bilgilerim} />
          <Tab.Screen name="Deneyimlerim" component={Deneyimlerim} />
          <Tab.Screen name="Haritam" component={Haritam} />        
          </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
   view:{
       flex:1,
       backgroundColor:'#f2f2f2',
   },
   bodystyle:{
        marginHorizontal:10,
        marginVertical:10,
   },
   bstyle:{
       flex:1,
       backgroundColor:'#f2f2f2',
       borderWidth:1,
       borderColor:'#808080',
       borderRadius:0,
       marginHorizontal:5,
       marginVertical:5,
   },
   fieldSet:{
    flex:3,
    margin: 15,
    justifyContent:'center',
    borderRadius: 0,
    borderWidth: 0.2,
    borderColor: '#808080',
},
legend:{
    position: 'absolute',
    top: -20,
    left: 10,
    fontWeight: 'bold',
    fontSize:16,
    backgroundColor: '#f2f2f2'
}
  });
  