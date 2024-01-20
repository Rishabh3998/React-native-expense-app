import { StyleSheet, Text, View } from "react-native";
import Expenses from "../components/ExpensesOutput/Expenses";
import { DUMMY_DATA } from "../data/data";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../utils/utils";
import { useGetExpenses } from "../utils/http";
import Loading from "../components/LoadingOverlay/Loading";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await useGetExpenses();
      expensesCtx.setExpenses(expenses);
      setIsFetching(false);
      return expenses;
    };
    const data = getExpenses()
      .then((res) => res)
      .catch((err) => err);
  }, []);

  const recentExpensesData = expensesCtx.expenses.filter((expense: any) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date >= sevenDaysAgo && expense.date <= today;
  });
  return (
    <View style={styles.rootScreen}>
      {!isFetching ? (
        <Expenses expenses={recentExpensesData} periodLabel="Last 7 days" />
      ) : (
        <Loading />
      )}
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
    width: "100%",
  },
  title: {
    color: "#fff",
  },
});
