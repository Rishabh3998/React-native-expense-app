import { Pressable, StyleSheet, View } from "react-native";
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
  return (
    <View style={styles.rootScreen}>
      <ExpensesSummary expenses={expenses} periodLabel={periodLabel} />
      <ExpensesList expenses={expenses} />
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
});
