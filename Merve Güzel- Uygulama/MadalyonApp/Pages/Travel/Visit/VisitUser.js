import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Useinfo from './UseinfoVisit'
import TravelMap from './TravelMapVisit'
import Experience from './ExperienceVisit'
import Visit from '../../../Store/Visit'
import { observer } from 'mobx-react';
import { Card, Button } from 'react-native-elements';
import Login from '../../../Store/Login'
import TravelInterfacePage from '../TravelInterfacePage';
function Bilgilerim (){
    return(
           <Useinfo/>
    )
}
function  Deneyimlerim(){
    return(
        <View style={styles.view}>
            <View>
                <Experience/>
            </View>
        </View>
    )
}
function  Haritam(){
    return(
        <TravelMap/>
    )
}
@observer
class Header extends Component {
    render(){
      return(
        <View>
       
        </View>
          
      );
    }
  }
const Tab = createMaterialTopTabNavigator();
export default function VisitUser(){
     return(
        <View style={styles.view}> 
        <Header/>
      <View style={styles.asbody}>
      <Body/>
      </View>
    </View>
     )
}
class Body extends Component{
    render(){
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
}
const styles = StyleSheet.create({
    view:{
        backgroundColor:'#f2f2f2',
        flex:1,
      },
      asheader:{
        marginVertical:'5%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        flex:1,
      },
      asbody:{
        flex:8,
      },
      textstyle:{
        fontSize:16,
        fontWeight:'bold',
      },
      atheader:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingLeft:'10%'
      },
      question:{
        fontSize:16,
        fontWeight:'bold',
        color:'orange',
        marginLeft:'5%'
      },
  
  });
  