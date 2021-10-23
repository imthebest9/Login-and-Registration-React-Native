import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import FormButton from "./FormButton";
import Forminput from "./Forminput";
import FormLabel from "./FormLabel";
import { useNavigation } from '@react-navigation/native';

const FormInputGroup = ({ children }) => {
  return <View style={tw`my-3`}>{children}</View>;
};

export default function Form({signup, onSubmit}) {
  const navigation = useNavigation(),
  screen  = signup ? "Home" : "Register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <FormInputGroup>
        <FormLabel text="Email" />
        <Forminput onChangeText={(text) => setEmail(text)} value={email} />
      </FormInputGroup>

      <FormInputGroup>
        <FormLabel text="Password" />
        <Forminput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </FormInputGroup>

      <FormButton
        primary={true}
        text={!signup ? "Login" : "Register"}
        onPress={() => onSubmit(email, password)}
      />
      <FormButton primary={false} onPress={() => navigation.navigate(screen)} text={signup ? "Login" : "Register" } />
    </View>
  );
}
