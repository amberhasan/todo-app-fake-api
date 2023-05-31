import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TodoItems = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  const { selectedUserId, userName } = props.route.params;

  async function getUserTodo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${selectedUserId}`
    );
    const jsonData = await response.json();
    setTodoItems(jsonData);
  }

  useEffect(() => {
    // componentDidMount()
    props.navigation.setOptions({
      title: userName,
    });
    getUserTodo();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todoItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Text style={styles.todoItem}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    margin: 5,
  },
});

export default TodoItems;
