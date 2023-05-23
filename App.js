import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Here is the counter", counter);
  });
  return (
    <View style={styles.container}>
      <Button
        title="Counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        Button
      </Button>
      <Text>Here is the counter {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
