import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />

      <Text>Here is the counter {counter}</Text>
    </View>
  );
};

export default function App() {
  const [counter, setCounter] = useState(true);

  // useEffect(() => {
  //   console.log("Here is the counter", counter);
  // });

  useEffect(() => {
    // this is componentDidUpdate()
    console.log("When state updates I will get called");
    // return () => {
    //   console.log(
    //     "I will get update before the state update component will update"
    //   );
    // };
  });

  useEffect(() => {
    // this is componentDidMount()
    console.log("I am component Did Mount, and I only get called once");
    // return () => {
    //   console.log("I am unmounting");
    // };
  }, []);

  useEffect(() => {
    console.log("I get called when click changed", counter);
  }, [counter]);

  console.log("----------------------------------------");

  return (
    <View style={styles.container}>
      {counter ? <Counter /> : null}
      <Button
        title="Click"
        onPress={() => {
          setCounter(!counter);
        }}
      ></Button>
      <Text>Click click click {counter}</Text>
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
