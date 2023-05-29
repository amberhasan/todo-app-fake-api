import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData[0]);
    setUsers(jsonData);
  }

  useEffect(() => {
    // component Did Mount
    getUserData();
    console.log("After the user data");
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          <User />;
          console.log("item", item.name);
          console.log("\n\n\n");
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserList;
