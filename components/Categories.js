import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const categoryList = [
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const touchableStyle = {
  paddingHorizontal: 15,
  paddingVertical: 10,
  marginRight: 10,
  borderRadius: 5,
};

const Categories = (props) => {
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    console.log(currentCategory);
    fetchNews(categoryList[0]);
  }, []);

  const fetchNews = (category) => {
    setCurrentCategory(category);
    axios
      .get(`https://gnews.io/api/v3/topics/${category}?token=<TOKEN HERE>`)
      .then((response) => {
        props.handleCategory(response.data.articles);
      });
  };

  return (
    <View style={styles.categoryList}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category) => {
          return (
            <TouchableOpacity
              key={category}
              style={
                currentCategory === category
                  ? styles.activeCategory
                  : styles.inactiveCategory
              }
              onPress={(e) => {
                e.preventDefault();
                fetchNews(category);
              }}
            >
              <Text
                style={
                  currentCategory === category
                    ? styles.activeCategoryText
                    : styles.inactiveCategoryText
                }
              >
                {category.toUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    handleCategory: (category) =>
      dispatch({ type: "FETCH_NEWS", payload: category }),
  };
}

export default connect(null, mapDispatchToProps)(Categories);

const styles = StyleSheet.create({
  categoryList: {
    marginTop: 20,
    marginBottom: 50,
  },

  inactiveCategory: {
    backgroundColor: "#C80E50",
    paddingHorizontal: touchableStyle.paddingHorizontal,
    paddingVertical: touchableStyle.paddingVertical,
    marginRight: touchableStyle.marginRight,
    borderRadius: touchableStyle.borderRadius,
  },

  inactiveCategoryText: {
    color: "white",
  },

  activeCategory: {
    backgroundColor: "white",
    paddingHorizontal: touchableStyle.paddingHorizontal,
    paddingVertical: touchableStyle.paddingVertical,
    marginRight: touchableStyle.marginRight,
    borderRadius: touchableStyle.borderRadius,
  },

  activeCategoryText: {
    color: "#DA1057",
  },
});
