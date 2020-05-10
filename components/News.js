import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NewsCard = () => {
  return (
    <View style={styles.newsCard}>
      <View>
        <Image
          source={require("../assets/01.png")}
          style={{
            width: "100%",
            height: 250,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.category}>India</Text>
          <Text style={styles.title}>Title</Text>
          <View style={styles.sourceTime}>
            <Text style={styles.source}>source</Text>
            <Text style={styles.time}>time</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const News = () => {
  return (
    <View style={styles.newsContainer}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  newsContainer: {
    position: "relative",
    top: -40,
    marginHorizontal: 15,
    alignSelf: "stretch",
  },

  newsCard: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  content: {
    padding: 10,
  },

  category: {
    color: "blue",
    fontWeight: "bold",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },

  sourceTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  source: {
    color: "#aaa",
  },

  time: {
    color: "#ccc",
  },
});
