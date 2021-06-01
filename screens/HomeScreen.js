import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
 
  render(){
    return(
      <View style={styles.container}>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"#FF0000"}]} 
            onPress={()=>this.props.navigation.navigate('s1')}>
            <Text style={styles.buttonText}>DAD</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          
            style={[styles.button,{backgroundColor:"#FF0000"}]} 
            onPress={()=>this.props.navigation.navigate("s2")}>            
            <Text style={styles.buttonText}>MOM</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          
            style={[styles.button,{backgroundColor:"#FF0000"}]} 
            onPress={()=>this.props.navigation.navigate("s3")}>            
            <Text style={styles.buttonText}>SISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          
            style={[styles.button,{backgroundColor:"#FF0000"}]} 
            onPress={()=>this.props.navigation.navigate("s4")}>
            <Text style={styles.buttonText}>BROTHER</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 4,
    borderColor:"white",
    marginTop:50,
    width : 250,
    height:100,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black',
    fontSize:28,
    fontWeight: 'bold',
  }
})