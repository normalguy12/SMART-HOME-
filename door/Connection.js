
import init from 'react_native_mqtt';
import {AsyncStorage} from '@react-native-async-storage/async-storage';


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

//MQTT


const topic = //'thienkun/feeds/light';
'thienkun/feeds/test';
const password = 'aio_VwGf00hR9EfUZuJVX8yvnIwuGEf2';
const uri = 'mqtts://#thienkun:#aio_VwGf00hR9EfUZuJVX8yvnIwuGEf2@io.adafruit.com';
const mqttHost = 'io.adafruit.com';

var client;

function mqtt() {
  console.log("start");
  client = new Paho.MQTT.Client(mqttHost, 443, "myclientid_" + parseInt(Math.random() * 100000, 100));
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  // connect the client
  
  client.connect({ onSuccess:onConnect, useSSL: true, userName: 'thienkun', password: password });
}

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe(topic);
  var message = new Paho.MQTT.Message('Hello');
  message.destinationName = topic;
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
}