import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "./Navigation/navigation";

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Navigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  periodLabel: {
    color: "White",
    fontSize: 20,
    fontWeight: "500",
  },
});
