import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Pressable } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Client } from 'mqtt';

class Home extends Component{
    constructor(props){
      super(props)
      this.state = {
          devices:[
              {
                type: 'Temperature',
              },
              {
                type: 'Light',
              },
              {
                icon: require('../ICON/aircon.png'),
                // link: useHref('./Screens/door')
              },
              {
                icon: require('../ICON/Curtain.png'),
                // link: useHref('./Screens/door')
              },
              {
                icon: require('../ICON/Windows.png'),
                // link: useHref('./Screens/door')
              },
              {
                icon: require('../ICON/door.png'), 
                // link: useHref('./Screens/door')
              },
          ],
          status:[
              {
                type: 'Temperature'
              },
              {
                type: 'Light'
              }
          ]
      };
    }
    

    render(){
      return <View style = {styles.container}>
        <StatusBar backgroundColor= '#f1f1f1' barStyle='light-content'/>
        <View style = {styles.User}>
            <Image style ={{width: 50, height: 50, top: '5%', left: '5%'}} source={require('../ICON/USER.png')}/>
            <Text style = {styles.text}>Hello User</Text>
            <FlatGrid
                style ={{flex: 1}}
                itemDimension ={120}
                data = {this.state.devices}
                renderItem ={({item}) => (
                    <TouchableOpacity style = {styles.tab}>
                        <Image style ={{width: 50, height: 50, alignSelf: 'center', top: '25%'}} source={item.icon}/>
                        <Text style = {styles.tabText}>{item.connect}</Text>
                    </TouchableOpacity>                
                )}
            />
        </View>
        <View style = {styles.navContainer}>
                <View style = {styles.navbar}>
                    <Pressable onPress={() => this.changeText('Home')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, alignSelf: 'center', bottom: '-65%'}} source={require('../ICON/home.jpg')}/>
                    </Pressable>

                    <Pressable onPress={() => this.changeText('Settings')} style={styles.IconBehave}>
                        <Image style ={{width: 40, height: 40, right: '-78%', top: '0%'}} source={require('../ICON/setting.png')}/>
                    </Pressable>

                    <Pressable onPress={() => this.changeText('Notification')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, right: '-5%', top: '-70%'}} source={require('../ICON/BELL.jpg')}/>
                    </Pressable>
                </View>
        </View>
      </View>
    }
}



export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
  },
  User:{
    flex: 1,
    margin: 20
  },

  text:{
    color: "#000",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    top: '-1.5%',
    right: '5%'
  },
  tab:{
    backgroundColor: '#ffffff', 
    height: 130, 
    top: '15%', 
    borderRadius: 15, 
    elevation: 3
  },
  tab1:{
    backgroundColor: '#ffffff', 
    height: 100, 
    top: '10%', 
    borderRadius: 15, 
    elevation: 3
  },
  tabText:{
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '70%',
    height: 70
  },

  navbar:{
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 40, 
  },

  IconBehave:{
    padding: 14
  }
  
});
