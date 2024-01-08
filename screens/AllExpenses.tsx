import { StyleSheet, Text, View } from "react-native";

const AllExpenses = () => {
  return (
    <View style={styles.rootScreen}>
      <Text style={styles.title}>All Expenses</Text>
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
  },
  title: {
    color: "#fff",
  },
});
