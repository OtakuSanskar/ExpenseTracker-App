import { View, Text, StyleSheet } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
    },
    inputContainer: {
      width: 300,
    },
    button: {
      width: 300,
      marginTop: 10,
    },
  });
  