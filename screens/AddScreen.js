import React, { useLayoutEffect, useState } from "react";
import { Text, Button } from "react-native-elements";
import { View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import format from "date-fns/format";
import { Picker } from "@react-native-picker/picker";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
const AddScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("expense");
  const [submitLoading, setSubmitLoading] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Expense",
    });
  }, [navigation]);
  const createExpense = () => {
    if( input && amount && date && selected && auth) {
      setSubmitLoading(true);
      db.collection("expense").add({
        text: input,
        price: Number(amount),
        type: selected,
        email: auth.currentUser.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userDate: format(date, "dd/MM/yyyy"),
      }).then(() => clearInput()).catch((error) => alert(error.message));
    } else {
        alert("Please fill all fields correctly.");
        setSubmitLoading(false); 
    }
  };
  const clearInput = () => {
    alert("Added successfully!")
    setInput("");
    setAmount("")
    setDate(new Date());
    setSelected("expense");
    navigation.navigate("Home");
    setSubmitLoading(false);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatePicker = () => {
    showMode('date');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  const result = format(date, "dd/MM/yyyy");
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter text" value={input} onChangeText={(text) => setInput(text)} />
        {show && (<DateTimePicker value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />)}
        <TextInput style={styles.input} placeholder="Enter amount" value={amount} onChangeText={(number) => setAmount(number)} keyboardType="numeric" />
        <Text style={styles.input} placeholder="Select Date" value={result} onPress={showDatePicker} >
          {result ? result : new Date()}
        </Text>
        <Picker selectedValue={selected} onValueChange={(itemValue) => setSelected(itemValue)} >
          <Picker.Item label="Expense" value="expense" />
          <Picker.Item label="Income" value="income" />
        </Picker>
        <Button title="Add" onPress={createExpense} loading={submitLoading} containerStyle={styles.button} />
      </View>
    </KeyboardAvoidingView>
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
