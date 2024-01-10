import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../Card/Card";

interface IExpensesList {
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
}

const ExpensesList = ({ expenses }: IExpensesList) => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 10,
  },
  periodLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
