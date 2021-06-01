import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen'



import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import s1 from './screens/s1';
import s2 from './screens/s2';
import s3 from './screens/s3';
import s4 from './screens/s4';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
      
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  s1:s1,
  s2:s2,
  s3:s3,
  s4:s4,
})

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
});

