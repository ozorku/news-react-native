import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

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

const Categories = () => {
  const [currentCat, setCurrentCat] = useState("");

  useEffect(() => {
    setCurrentCat(categoryList[0]);
    fetchNews(categoryList[0]);
  }, []);

  const fetchNews = (category) => {
    axios
      .get(
        `https://gnews.io/api/v3/topics/${category}?token=5d7c093a0721ea0db18d547cf315ed7b`
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleCategory = (category) => {
    setCurrentCat(category);
    fetchNews(category);
  };

  return (
    <View style={styles.categoryList}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category) => {
          return (
            <TouchableOpacity
              key={category}
              style={
                currentCat === category
                  ? styles.activeCategory
                  : styles.inactiveCategory
              }
              onPress={(e) => {
                e.preventDefault();
                handleCategory(category);
              }}
            >
              <Text
                style={
                  currentCat === category
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
export default Categories;

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
