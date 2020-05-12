import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import News from "./components/News";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  news: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return { news: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView scrollEnabled={true}>
          <Header />
          <News />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}
