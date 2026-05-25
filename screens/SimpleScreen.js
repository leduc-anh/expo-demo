import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SimpleScreen = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F5F7",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#151925",
  },
});

export default SimpleScreen;
