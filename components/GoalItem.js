import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  /* const pressHandler = () => {
    props.onDeleteItem(props.id)
  } */

  return (
    <View style={styles.goalsItems}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //style={(pressData) => {pressData.pressed && styles.pressedData.pressed}} below is same but with object destructuring
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsItems: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    marginBottom: 20,
  },
  goalText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
