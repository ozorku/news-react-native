import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import Categories from "../components/Categories";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.column}>
        <View>
          <Text style={styles.todayStyle}>Today</Text>
          <Text style={styles.fullDateStyle}>
            {moment().format("dddd DD, MMMM").toUpperCase()}
          </Text>
        </View>
      </View>
      <Categories />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#DA1057",
    paddingTop: 50,
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
