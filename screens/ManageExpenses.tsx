import { StyleSheet, Text, View } from "react-native";

const ManageExpenses = () => {
  return (
    <View style={styles.rootScreen}>
      <Text style={styles.title}>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
  },
});
