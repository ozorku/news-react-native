import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import moment from "moment";
import Categories from "../components/Categories";

export default function Header() {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.column}>
        <View>
          <Text style={styles.todayStyle}>Today</Text>
          <Text style={styles.fullDateStyle}>
            {moment().format("dddd DD, MMMM").toUpperCase()}
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/search.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#DA1057",
    paddingTop: 80,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },

  column: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  todayStyle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },

  fullDateStyle: {
    fontSize: 12,
    marginTop: 3,
    color: "white",
  },
});
