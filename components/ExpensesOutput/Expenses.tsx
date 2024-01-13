import { Pressable, StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface IExpenses {
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
  periodLabel: string;
}

const Expenses = ({ expenses, periodLabel }: IExpenses) => {
  let content;
  if (expenses.length === 0) {
    content = <Text style={styles.fallBackText}>No expenses yet...</Text>;
  } else {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.rootScreen}>
      <ExpensesSummary expenses={expenses} periodLabel={periodLabel} />
      {content}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  fallBackText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
});
