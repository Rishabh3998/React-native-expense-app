import { StyleSheet, Text, View } from "react-native";
import Expenses from "../components/ExpensesOutput/Expenses";
import { DUMMY_DATA } from "../data/data";
import { useContext } from "react";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../utils/utils";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpensesData = expensesCtx.expenses.filter((expense: any) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date > sevenDaysAgo;
  });
  return (
    <View style={styles.rootScreen}>
      <Expenses expenses={recentExpensesData} periodLabel="Last 7 days" />
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
