import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image,Button } from 'react-native';
import AppHeader from '../components/AppHeader'
import { Audio } from 'expo-av';


export default class s4 extends React.Component {
  async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var  play = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
     
    } catch (error) {
      console.log();
    }
  }
  render(){
    
    return(
      <View style={styles.container}>
        <AppHeader/>
        <Image style={styles.logo} source={require('../assets/lol3.jpeg')} />
       
        <TouchableOpacity 
          
          style={[styles.button,{backgroundColor:"#FF0000"}]} 
          onPress={() => {
            var url ='http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3';
            this.playSound(url);
          }}>
          <Text style={styles.buttonText}>PLAY</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          
          style={[styles.button,{backgroundColor:"#FF0000"}]} 
          onPress={()=>this.props.navigation.navigate("HomeScreen")}>
          <Text style={styles.buttonText}>BACK TO HOME</Text>
        </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
 logo:{
   height:400,
   width:400
 },
 button:{
  justifyContent : 'center',
  alignSelf : 'center',
 
  
  marginTop:40,
  width : 400,
  height:100,
},
buttonText : {
  textAlign : 'center',
  color : 'black',
  fontSize:28,
  fontWeight: 'bold',
}
})