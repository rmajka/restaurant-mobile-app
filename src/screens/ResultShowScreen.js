import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  async function getResult(id) {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    //important to pass it an id from navigation
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    marginBottom: 5,
  },
});
