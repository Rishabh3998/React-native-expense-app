import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "./Navigation/navigation";
import ExpensesContextProvider from "./store/ExpensesContext";

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <Navigator />
      </ExpensesContextProvider>
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
