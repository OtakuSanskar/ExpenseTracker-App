import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image, Input, Button, Text } from "react-native-elements";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [name, setName] = useState("");
  const signUp = () => {
    if (email && password && name) {
      setSubmitLoading(true);
      auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
          clearInput() &
            authUser.user.updateProfile({ displayName: name });
      }).catch((error) => alert(error.message) & setSubmitLoading(false));
    } else {
      alert("All fields are required");
      setSubmitLoading(false);
    }
  };
  const clearInput = () => {
    alert("Successfully registered!");
    navigation.replace("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} >
      <StatusBar style="light" />
      <Image
        source={{ uri: "https://u7.uidownload.com/vector/771/239/vector-money-in-wallet-icon-.jpg"}}
        style={{ width: 100, height: 100, marginBottom: 50 }}
      />
      <Text h4 style={{ marginBottom: 50 }}>Create Account</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter your name"
          type="text"
          autofocus
          value={name}
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChangeText={(mail) => setEmail(mail)}
          style={styles.input}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(pass) => setPassword(pass)}
          style={styles.input}
        />
      </View>
      <Button
        title="Register"
        onPress={signUp}
        loading={submitLoading}
        disabled={!email || !password || !name || submitLoading}
        containerStyle={styles.button}
        />
        <Button
          title="Register"
          containerStyle={styles.button}
        />
    </KeyboardAvoidingView>
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
  