import { StyleSheet, Text, View } from "react-native";
import Expenses from "../components/ExpensesOutput/Expenses";
import { DUMMY_DATA } from "../data/data";

const RecentExpenses = () => {
  return (
    <View style={styles.rootScreen}>
      <Expenses expenses={DUMMY_DATA} periodLabel="Last 7 days" />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131B23",
  },
  title: {
    color: "#fff",
  },
});
