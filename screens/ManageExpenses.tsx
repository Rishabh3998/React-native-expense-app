import { useContext, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card/Card";
import { DUMMY_DATA } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button/Button";
import { ExpensesContext } from "../store/ExpensesContext";

const ManageExpenses = ({ navigation, route }: any) => {
  const expenseId = route?.params?.id;
  const expenseCtx = useContext(ExpensesContext);

  const initialDescription: any = expenseCtx?.expenses?.find(
    (i: any) => i?.id === expenseId
  );

  const initialAmount: any = expenseCtx?.expenses?.find(
    (i: any) => i?.id === expenseId
  );

  const [description, setDescription] = useState<string>(
    initialDescription?.description
  );
  const [amount, setAmount] = useState<string>(
    initialAmount?.amount.toString()
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit expense" : "Add expense",
      headerTintColor: "#87959D",
      headerStyle: { backgroundColor: "#1F2D32" },
    });
  }, [navigation, expenseId]);

  const currentItem: any = expenseCtx.expenses.find(
    (item: any) => item?.id === expenseId
  );

  const handleDelete = () => {
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    const amountIsInvalid = isNaN(Number(amount)) || Number(amount) <= 0;
    const descriptionIsInvalid = !description || description?.trim() === "";

    console.log({ amountIsInvalid, descriptionIsInvalid, description, amount });
    if (amountIsInvalid || descriptionIsInvalid) {
      Alert.alert("Invalid data", "Please fill required data", [
        {
          text: "Okay",
          style: "default",
        },
      ]);
    } else {
      expenseCtx.addExpense({
        amount: Number(amount),
        description: description,
        date: new Date(),
      });
      navigation.goBack();
    }
  };

  const handleUpdate = () => {
    expenseCtx.updateExpense(expenseId, {
      id: expenseId,
      amount: Number(amount),
      description: description,
    });
    navigation.goBack();
  };

  return expenseId ? (
    <View style={styles.rootScreen}>
      <View style={styles.itemContainer}>
        <Card item={currentItem} customStyles={styles.cardContainer} />
        <Ionicons name="trash" color="#fff" size={30} onPress={handleDelete} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={description}
          cursorColor="#fff"
          placeholder="Enter description"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(value) => setDescription(value)}
          selectionColor="#fff"
        />
        <TextInput
          value={amount}
          cursorColor="#fff"
          placeholder="Enter amount"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(value) => setAmount(value)}
          selectionColor="#fff"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button backgroundColor="transparent" onPress={handleCancel}>
          Cancel
        </Button>
        <Button onPress={handleUpdate}>Update</Button>
      </View>
    </View>
  ) : (
    <View style={styles.rootScreen}>
      <View style={styles.inputContainer}>
        <TextInput
          value={description}
          cursorColor="#fff"
          placeholder="Enter description"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(value) => setDescription(value)}
          selectionColor="#fff"
        />
        <TextInput
          value={amount}
          cursorColor="#fff"
          placeholder="Enter amount"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(value) => setAmount(value)}
          selectionColor="#fff"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button backgroundColor="transparent" onPress={handleCancel}>
          Cancel
        </Button>
        <Button onPress={handleConfirm}>Confirm</Button>
      </View>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#131B23",
    width: "100%",
  },
  title: {
    color: "#fff",
  },
  itemContainer: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    paddingTop: 20,
  },
  cardContainer: {
    width: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingTop: 20,
  },
  input: {
    color: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#1F2D32",
  },
  inputContainer: {
    padding: 20,
    justifyContent: "space-around",
    width: "100%",
  },
});
