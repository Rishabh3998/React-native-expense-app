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
