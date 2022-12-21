import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import React from "react";

export default function SearchBar({ term, onSetTerm, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.textInput}
        value={term}
        onChangeText={onSetTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
  },
});
