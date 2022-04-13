import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Platform } from "react-native";
import {SafeAreaView , Dimensions, View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Pressable } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}



const DoorPass = () => {
    const {height, width} = Dimensions.get('window');
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [number1, onChangeNumber2] = React.useState(null);

    return(
    <View style = {styles.container}>
        <Image style ={{width: 50, height: 50, top: '5%', left: '2%'}} source={require('../ICON/arrow.png')}/>
        <Text style = {styles.text}>Door</Text>  
        <SafeAreaView style = {styles.tab}>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Old Password"
                keyboardType="ascii-capable"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="New Password"
                keyboardType="ascii-capable"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={number1}
                placeholder="Confirm Password"
                keyboardType="ascii-capable"
            />


        </SafeAreaView>

        <View style = {styles.navContainer}>
                <View style = {styles.navbar}>
                    <Pressable onPress={() => this.changeText('Home')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, alignSelf: 'center', bottom: '-50%'}} source={require('../ICON/home.jpg')}/>
                    </Pressable>

                    <Pressable onPress={() => this.changeText('Settings')} style={styles.IconBehave}>
                        <Image style ={{width: 40, height: 40, right: '-78%', top: '-4%'}} source={require('../ICON/setting.png')}/>
                    </Pressable>

                    <Pressable onPress={() => this.changeText('Notification')} style={styles.IconBehave}>
                        <Image style ={{width: 50, height: 50, right: '-5%', top: '-55%'}} source={require('../ICON/BELL.jpg')}/>
                    </Pressable>
                </View>
        </View>
    </View>     
    )
    
}

export default DoorPass;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        
      },
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    width: '90%',
    left: 10
  },
  tab:{
    top: '20%', 
  },
  navContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '70%',
    height: 70,
    flex: 1
  },
  text:{
    color: "#000",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    top: '-1%',
    left: '14%'
  },
  navbar:{
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 40, 
  },
  
});


