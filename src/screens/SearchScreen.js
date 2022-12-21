import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  function filterByPrice(price) {
    //price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View style={styles.searchContainer}>
      <SearchBar
        term={term}
        onSetTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg && <Text>{errMsg}</Text>}

      <ScrollView>
        <ResultsList results={filterByPrice("$")} title="Cost Effective" />
        <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});
