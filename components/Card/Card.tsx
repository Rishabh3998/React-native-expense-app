import { Pressable, StyleSheet, Text, View } from "react-native";
import { getFormattedDate } from "../../utils/utils";
import { useNavigation } from "@react-navigation/native";

interface ICard {
  item: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  };
  customStyles?: any;
}

const Card = ({ item, customStyles }: ICard) => {
  const navigation = useNavigation<any>();
  const handleClickItem = () => {
    navigation.navigate("ManageExpenses", {
      id: item.id,
    });
  };

  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={handleClickItem}
    >
      <View style={[styles.rootContainer, customStyles]}>
        <View>
          <Text style={[styles.text, styles.description]}>
            {item.description}
          </Text>
          <Text style={[styles.text, { paddingTop: 8 }]}>
            {getFormattedDate(item.date)}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            ₹{item.amount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#1F2D32",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    borderRadius: 10,
  },
  text: {
    color: "#ECE5DD",
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  amountContainer: {
    backgroundColor: "#04A783",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ECE5DD",
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
