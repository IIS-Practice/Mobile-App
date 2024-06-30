import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import SharedForm from "@components/shared/SharedForm";
import { styles } from "./Contacts.styles";

const Contacts = () => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      <SharedForm lightMode={false} />
    </SafeAreaView>
  </ScrollView>
);

export default Contacts;
