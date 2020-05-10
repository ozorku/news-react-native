import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import News from "./components/News";

export default function App() {
  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      <Header />
      <View>
        <News />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
  },
});
