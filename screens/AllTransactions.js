import { View, Text, StyleSheet } from "react-native";

const AllTransactions = () => {
  return (
    <View style={styles.container}>
      <Text>All Transactions Screen</Text>
    </View>
  );
};
export default AllTransactions;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 0,
      marginTop: -23,
    },
    containerNull: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })