import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const User = function (props) {
  // console.log("props", props);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("TodoItems", {
          userName: props.data.name,
          selectedUserId: props.data.id,
        });
      }}
      style={{
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "lightgrey",
        borderWidth: 1,
        margin: 5,
      }}
    >
      <Text>{props.data.name}</Text>
    </TouchableOpacity>
  );
};

export default User;
