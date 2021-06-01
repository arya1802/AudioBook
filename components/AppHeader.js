import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        
        <Text style={styles.text}>FAMILY AUDIO APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#FF0000',
  },
  text:{
    color: 'white',
    padding: 35,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;