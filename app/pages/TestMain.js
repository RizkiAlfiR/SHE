// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

// import StockAPD from './StockAPD';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/* <Text>Details Screen</Text> */}
//         <StockAPD/>
//       </View>
//       <StockAPD/>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
