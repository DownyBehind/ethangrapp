import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";

class AppContainer extends Component {
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          <RootNavigation screenProps={{username: profile.username}} />
        ) : (
          <LoggedOutNavigation/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

export default AppContainer;
