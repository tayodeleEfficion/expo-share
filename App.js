import React, { Component } from "react";
import { Share, Button, View } from "react-native";
import { StyleSheet } from "react-native";

class Publish extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: "bradcast to others",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.onShare} title='publish' />
      </View>
    );
  }
}
export default Publish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
