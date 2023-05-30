import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  async function getUserData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    // componentDidMount()
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <User data={item} />;
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
