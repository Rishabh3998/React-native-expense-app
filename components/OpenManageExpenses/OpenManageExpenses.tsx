import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const OpenManageExpenses = () => {
  const navigation = useNavigation<any>();
  const handleClickIcon = () => {
    navigation.navigate("ManageExpenses");
  };

  return (
    <Pressable
      onPress={handleClickIcon}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="add" color="#fff" size={22} />
      </View>
    </Pressable>
  );
};

export default OpenManageExpenses;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
  iconContainer: {
    marginRight: 16,
    paddingHorizontal: 6,
    paddingVertical: 5,
    backgroundColor: "#04A783",
    borderRadius: 20,
  },
});
