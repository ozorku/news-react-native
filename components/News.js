import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const NewsCard = (props) => {
  return (
    <View style={styles.newsCard}>
      <Text style={styles.title}>{props.item.title}</Text>

      <Text style={styles.source}>{props.item.source.name}</Text>
    </View>
  );
};

const News = (props) => {
  return (
    <View style={styles.newsContainer}>
      {props.news.map((item) => {
        return <NewsCard item={item} key={item.title} />;
      })}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);

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
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  source: {
    color: "#aaa",
  },
});
