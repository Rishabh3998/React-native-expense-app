import { StyleSheet, Text, View } from "react-native";
import Expenses from "../components/ExpensesOutput/Expenses";
import { DUMMY_DATA } from "../data/data";

const AllExpenses = () => {
  return (
    <View style={styles.rootScreen}>
      <Expenses expenses={DUMMY_DATA} periodLabel="Total" />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131B23",
    width: "100%",
  },
  title: {
    color: "#fff",
  },
});
