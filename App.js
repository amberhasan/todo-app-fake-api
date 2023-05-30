import React from "react";
import UserList from "./UserList";
import TodoItems from "./TodoItems";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen
            name="TodoItems"
            component={TodoItems}
            options={({ route }) => ({ title: route.params.userName })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
