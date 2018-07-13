import React from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
            <Text style={{fontSize: 27}}>Welcome</Text>
            <View style={{margin:20}} />
                <Button onPress={this.props.onLogoutPress}
                    title="Logout"
                />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});