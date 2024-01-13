import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ children, backgroundColor = "#04A783", onPress }: any) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={[styles.buttonContainer, { backgroundColor }]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
