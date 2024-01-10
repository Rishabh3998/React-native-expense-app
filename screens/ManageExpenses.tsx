import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpenses = ({ navigation }: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerTintColor: "#87959D",
      headerStyle: { backgroundColor: "#1F2D32" },
    });
  }, [navigation]);

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
    backgroundColor: "#131B23",
  },
  title: {
    color: "#fff",
  },
});
