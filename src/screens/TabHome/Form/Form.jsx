import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import SharedForm from "@components/shared/SharedForm";
import { styles } from "./Form.styles";

const Form = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.headerText}>СВЯЖИТЕСЬ С&nbsp;НАМИ</Text>
        <SharedForm lightMode={true} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Form;
