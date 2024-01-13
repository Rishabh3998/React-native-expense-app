import { StyleSheet, Text, View } from "react-native";
import Expenses from "../components/ExpensesOutput/Expenses";
import { useContext } from "react";
import { ExpensesContext } from "../store/ExpensesContext";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.rootScreen}>
      <Expenses expenses={expensesCtx.expenses} periodLabel="Total" />
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
