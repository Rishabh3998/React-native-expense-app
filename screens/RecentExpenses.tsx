import { StyleSheet, Text, View } from "react-native";

const RecentExpenses = () => {
  return (
    <View style={styles.rootScreen}>
      <Text style={styles.title}>Recent Expenses</Text>
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
