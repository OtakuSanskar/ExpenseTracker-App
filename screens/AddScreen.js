import { View, Text, StyleSheet } from "react-native";

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Screen</Text>
    </View>
  );
};
export default AddScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    inputContainer: {
      width: 300,
    },
    input: {
      height: 50,
      borderColor: "gray",
      borderBottomWidth: 1,
      marginBottom: 20,
    },
    button: {
      width: 300,
      marginTop: 10,
    },
  });
  