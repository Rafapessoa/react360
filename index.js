import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

state = {
  count: 0,
}

_incrementCount = () => {
  this.setState({count: this.state.count + 1});
  
}

_decremenCount = () => {
  this.setState({count: this.state.count - 1});
  
}

// componentDidMount(){
//   setInterval(this._incrementCount, 10);
// }

  render() {
    return (
      <View style={styles.panel}>

      <VrButton onClick={this._incrementCount} style={styles.greetingBox}>
        <Text style={styles.greeting}>
             Somar
          </Text>
      </VrButton>      
      <VrButton onClick={this._decremenCount} style={styles.greetingBox}>
        <Text style={styles.greeting}>
             Subtrair
          </Text>
      </VrButton>              

      <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
        </Text> 
 
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 0, 0, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    borderWidth: 2,
   
  },
  greeting: {
    fontSize: 48,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
