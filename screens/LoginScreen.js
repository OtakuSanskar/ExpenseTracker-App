import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image, Text, Input, Button } from "react-native-elements";
import { auth } from "../firebase";
import { NavigationContainer } from "@react-navigation/native";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const signIn = () => {
    if (email && password) {
      setSubmitLoading(true);
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => clearInput())
        .catch((error) => alert(error.message)&setSubmitLoading(false));
    } else {
      alert("All fields are required");
      setLoading(false);
    }
  };
  const clearInput = () => {
    alert("Successfully logged in!");
    navigation.replace("Home");
    setSubmitLoading(false);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Loading...",
    });
    if (!loading) {
      navigation.setOptions({
        title: "Login",
      });
    }
  }, [navigation, loading]);
  return (
    <>
    {!loading ? (<KeyboardAvoidingView behavior="padding" style={styles.container} >
      <StatusBar style="light" />
      <Image
        source={{ uri: "https://u7.uidownload.com/vector/771/239/vector-money-in-wallet-icon-psd-psd.jpg"}}
        style={{ width: 100, height: 100, marginBottom: 50 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
          style={styles.input}
        />
        <Button
          title="Login"
          disabled={loading || !email || !password}
          onPress={signIn}
          containerStyle={styles.button}
        />
        <Button
          title="Register"
          containerStyle={styles.button}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </KeyboardAvoidingView>): (
      <View style={styles.container}>
        <Image
          source={{ uri: "https://u7.uidownload.com/vector/771/239/vector-money-in-wallet-icon-psd-psd.jpg"}}
          style={{ width: 100, height: 100, marginBottom: 50 }}
        />
        <Text h4 style={{ marginBottom: 50 }}>Loading...</Text>
      </View>
    )}
    </>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
})
  