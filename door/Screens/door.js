import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Pressable } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ToggleSwitch } from 'toggle-switch-react-native'


class Door extends Component{
    constructor(props){
      super(props)
      
      this.state = {
          devices:[
              {
                type: 'ALARM',
              },
          ],
          password:[
            {
                type: 'CHANGE PASSWORD',
              },
          ]
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
      this.setState({ checked });
    }    
    
    render(){
      return <View style = {styles.container}>
        <StatusBar backgroundColor= '#f1f1f1' barStyle='light-content'/>
        
        <View style = {styles.User}>
            <Image style ={{width: 50, height: 50, top: '5%', left: '-2%'}} source={require('../ICON/arrow.png')}/>
            <Text style = {styles.text}>Menu</Text>
            <View style = {styles.status}>
                <View style = {styles.statusBar}>
                    <Pressable onPress={() => this.changeText('Lock')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, left: '5%', bottom: '-46%'}} source={require('../ICON/lock.png')}/>
                    </Pressable>

                    <Pressable onPress={() => this.changeText('Unlock')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, right: '-65%', top: '-52%'}} source={require('../ICON/unlock.png')}/>
                    </Pressable>
                </View>
            </View>
            <FlatGrid
                style ={{flex: 1}}
                itemDimension ={300}
                data = {this.state.devices}
                renderItem ={({item}) => (
                <TouchableOpacity style = {styles.tab}>
                    
                    <Text style = {styles.tabText1}>{item.type}</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="green"
                        offColor="red"
                        size="large"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                        style = {{right: '-60%', top: -7}}

                    />
                </TouchableOpacity>
                
                )}
            />
            <FlatGrid
                style ={{flex: 1}}
                itemDimension ={300}
                data = {this.state.password}
                renderItem ={({item}) => (
                <TouchableOpacity style = {styles.tab1}>
                    
                    <Text style = {styles.tabText}>{item.type}</Text>
                    
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

export default Door;

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
    textAlign: 'left',
    top: '-1.5%',
    left: '12%'
  },
  tab:{
    backgroundColor: '#ffffff', 
    height: 80, 
    top: '250%', 
    borderRadius: 15, 
    elevation: 3
  },
  tab1:{
    backgroundColor: '#ffffff', 
    height: 72, 
    top: '12%', 
    borderRadius: 15, 
    elevation: 3
  },
  tabText:{
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'flex-end',
    top: 25,
  },

  tabText1:{
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'flex-end',
    top: 25,
    left: 85

  },

  status:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '50%',
    height: 70
  },

  statusBar:{
    backgroundColor: '#ffffff',
    width: '100%',
    top: -400,
    justifyContent: 'space-evenly',
    borderRadius: 40, 
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
