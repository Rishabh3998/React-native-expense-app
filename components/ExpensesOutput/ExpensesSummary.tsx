import { StyleSheet, Text, View } from "react-native";

interface IExpensesSummary {
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
  periodLabel: string;
}

const ExpensesSummary = ({ expenses, periodLabel }: IExpensesSummary) => {
  const totalExpense = expenses.reduce(
    (accumulator: number, currentValue: any) => {
      return accumulator + currentValue.amount;
    },
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.periodLabel}>{periodLabel}</Text>
      <Text style={[styles.periodLabel, { fontWeight: "bold", fontSize: 20 }]}>
        ₹{totalExpense}
      </Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#128C7E",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  periodLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
