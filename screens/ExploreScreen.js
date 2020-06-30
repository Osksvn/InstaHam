/*This is an Example of Grid View in React Native*/
import React, { Component } from "react";
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
//import all the components we will need

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      var random = Math.floor(Math.random() * 200) + 100;
      return { id: i, src: "https://picsum.photos/" + random + "/" + random };
    });
    that.setState({
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
