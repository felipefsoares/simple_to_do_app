import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import LoadingIndicator from './components/LoadingIndicator';
import { connect } from 'react-redux';
import {showLoadingIndicator, hideLoadingIndicator} from './store/reducers/app'

 class App extends Component {

  openLoader = () => {
    this.props.showLoadingIndicator()
    setTimeout(this.props.hideLoadingIndicator, 3000);
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Welcome to our TODO app! 
        </Text>
        <TouchableOpacity onPress={this.openLoader}>
          <Text>
            touch here to open up the app loader
          </Text>
        </TouchableOpacity>
        <LoadingIndicator/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapDispatchToProps = {
  showLoadingIndicator, 
  hideLoadingIndicator
}

export default connect(null, mapDispatchToProps)(App)