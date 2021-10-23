import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from "../components/Form";
import Title from "../components/Title";
import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";
import firebase from "firebase";

export default function Home() {
  const [errorMessage, setError] = useState(""),
    [successMessage, setSuccess] = useState("");

  const login = (email, password) => {
    if (!email && !password) alert("Please enter all the required fields");
    else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setSuccess(`User login successfully, ${user.user.uid}`);
          setError("");
        })
        .catch((err) => {
          setError(err.message);
          setSuccess("");
        });
    }
  };
  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Login" />
        {!!errorMessage && (
          <Text style={tw`bg-red-400 p-1 my-2 text-yellow-700`}>
            {" "}
            {errorMessage}{" "}
          </Text>
        )}
        {!!successMessage && (
          <Text style={tw`bg-green-400 p-1 my-2 text-yellow-700`}>
            {" "}
            {successMessage}{" "}
          </Text>
        )}
        <Form signup={false} onSubmit={login} />
      </View>
    </Layout>
  );
}
