import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db, auth } from "../firebase";
import CustomListItem from "../components/CustomListItem";
import { Text } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
const AllTransactions = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "All Transactions",
    });
  }, []);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("expense")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => 
        setTransactions(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      );
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (transactions) {
      setFilter(
        transactions.filter(transaction => transaction.data.email === auth.currentUser.email)
      );
    }
  }, [transactions]);
  return (
    <>
      {
        filter?.length !== 0 ? (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {filter?.map((info) => (
                <View  key={info.id}>
                  <CustomListItem
                    info={info.data}
                    id ={info.id}
                    navigation={navigation}
                  />
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        ):(
        <View style={styles.containerNull}>
          <FontAwesome5 name="list-alt" size={50} />
          <Text h4 style={{ color: "green" }}>
            No Transactions Found
          </Text>
        </View>
      )
      }
    </>
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