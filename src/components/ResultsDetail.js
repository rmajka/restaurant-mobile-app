import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import React from "react";

export default function ResultsDetail({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },

  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },

  name: {
    fontWeight: "bold",
  },
});
