import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { styles } from "./SharedForm.styles";
import { LIGHT_COLOR, DARK_COLOR } from "@utils/colors";
import { addApplication } from "@api/services/applicationApi";

const SharedForm = ({ lightMode }) => {
  const mainColor = lightMode ? LIGHT_COLOR : DARK_COLOR;

  const [author, setAuthor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSendApplication = () => {
    setIsSubmitting(true);
    setIsError(false);
    setErrors({});
    console.log(addApplication);
    addApplication(author, phoneNumber, email, description)
      .then(response => {
        console.log(response);
        setAuthor("");
        setPhoneNumber("");
        setEmail("");
        setDescription("");
      })
      .catch(error => {
        console.log(error);
        if (error.status === 400) {
          setErrors(error.errors);
          setIsError(true);
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderColor: mainColor, color: mainColor },
          errors.author && styles.inputError,
        ]}
        cursorColor={mainColor}
        placeholder="Имя"
        placeholderTextColor={mainColor}
        required
        onChangeText={value => setAuthor(value)}
        value={author}
      />
      <TextInput
        style={[
          styles.input,
          { borderColor: mainColor, color: mainColor },
          errors.phoneNumber && styles.inputError,
        ]}
        cursorColor={mainColor}
        placeholder="Телефон"
        placeholderTextColor={mainColor}
        required
        onChangeText={value => setPhoneNumber(value)}
        value={phoneNumber}
      />
      <TextInput
        style={[
          styles.input,
          { borderColor: mainColor, color: mainColor },
          errors.email && styles.inputError,
        ]}
        cursorColor={mainColor}
        placeholder="Почта"
        placeholderTextColor={mainColor}
        required
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        style={[
          styles.textArea,
          { borderColor: mainColor, color: mainColor },
          errors.description && styles.inputError,
        ]}
        cursorColor={mainColor}
        placeholder="Краткая информация"
        placeholderTextColor={mainColor}
        required
        onChangeText={value => setDescription(value)}
        value={description}
        multiline
        numberOfLines={5}
      />

      <View style={styles.buttonContainer}>
        {isError && (
          <Text style={styles.errorMessage}>Некорректные данные</Text>
        )}
        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleSendApplication}
          disabled={isSubmitting}
          activeOpacity={1}>
          <Text style={styles.buttonText}>Отправить заявку</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.footerText, { color: mainColor }]}>
        Отправляя форму, Вы даете согласие на обработку своих персональных
        данных в соответствии с политикой конфиденциальности
      </Text>
    </SafeAreaView>
  );
};

export default SharedForm;
