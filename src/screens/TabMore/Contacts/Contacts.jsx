import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import SharedForm from "@components/shared/SharedForm";
import { styles } from "./Contacts.styles";
import PhoneIcon from "@assets/icons/phone.svg";
import MailIcon from "@assets/icons/mail.svg";
import GeoIcon from "@assets/icons/geo.svg";

const Contacts = () => {
  const contactsData = [
    {
      Icon: <PhoneIcon style={styles.contactIcon} />,
      title: "Телефон",
      text: "Наши специалисты готовы принимать Ваши звонки в рабочее время офиса с 9:00 до 17:00 с понедельника по пятницу.",
      link: "tel:+375296764510",
      data: "+375 (29) 676-45-10",
    },
    {
      Icon: <MailIcon style={styles.contactIcon} />,
      title: "Электронная почта",
      text: "Заявки на электронную почту мы принимаем ежедневно в режиме 24/7. Будьте уверены, мы обязательно с вами свяжемся!",
      link: "mailto:Почта@почта",
      data: "Почта@почта",
    },
    {
      Icon: <GeoIcon style={styles.contactIcon} />,
      title: "Местоположение офиса",
      text: "Приглашаем Вас в наш офис. Также, есть возможность встреч с партнерами и заказчиками в удобном для Вас месте.",
      link: "https://yandex.by/maps/157/minsk/house/Zk4YcwJnSUIHQFtpfXVwd3prYA==/?ll=27.557070%2C53.916685&z=17.15",
      data: "г. Минск, ул. Кропоткина, д.44",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.contactContainer}>
          {contactsData.map((contact, index) => (
            <View key={index} style={styles.contactBlock}>
              <View>{contact.Icon}</View>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Text style={styles.contactText}>{contact.text}</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(contact.link)}
                activeOpacity={1}>
                <Text style={styles.contactLink}>{contact.data}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.formTitle}>
            Мы рады увидеть <Text style={styles.titleHighlighting}>Вашу</Text>{" "}
            заявку!
          </Text>
          <Text style={styles.formDescription}>
            Пожалуйста оставьте Ваши имя и телефон, мы будем счастливы помочь
            Вам.
          </Text>
          <SharedForm lightMode={false} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Contacts;
