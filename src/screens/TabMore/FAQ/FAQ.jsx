import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import BlueArrowIcon from "@assets/icons/blueArrow.svg";
import { styles } from "./FAQ.styles";

import { getFaqs } from "@api/services/faqApi";

const FAQ = () => {
  let _questions = [
    {
      id: "1",
      question: "Какие услуги вы предоставляете?",
      answer:
        "Мы предлагаем полный спектр ИТ-услуг, включая разработку веб-сайтов, мобильных приложений, чат-ботов, а также UX/UI дизайн. Наша команда экспертов поможет вам реализовать проект любой сложности от концепции до запуска.",
    },
    {
      id: "2",
      question: "Сколько стоит разработка сайта или мобильного приложения?",
      answer:
        "Стоимость разработки зависит от множества факторов, включая сложность проекта, функциональные требования и сроки выполнения. Для получения более точной оценки, пожалуйста, свяжитесь с нами для обсуждения вашего проекта.",
    },
    {
      id: "3",
      question: "Как долго разрабатывается сайт или приложение?",
      answer:
        "Время разработки зависит от сложности и объема проекта. В среднем, на создание простого сайта уходит от 4 до 8 недель, тогда как разработка мобильного приложения может занять от 3 до 6 месяцев. Точные сроки мы определяем после обсуждения всех деталей проекта.",
    },
    {
      id: "4",
      question:
        "Можете ли вы модернизировать или поддерживать уже существующий сайт или приложение?",
      answer:
        "Да, мы предоставляем услуги по модернизации и поддержке уже существующих сайтов и приложений. Наша команда может помочь вам улучшить функциональность, обновить дизайн или устранить технические проблемы.",
    },
    {
      id: "5",
      question: "Как происходит процесс разработки?",
      answer:
        "Наш процесс разработки включает несколько этапов: анализ требований, планирование, дизайн, разработка, тестирование и запуск. Мы тесно сотрудничаем с клиентами на каждом этапе, чтобы убедиться, что конечный продукт соответствует их ожиданиям и требованиям.",
    },
    {
      id: "6",
      question: "Как вы обеспечиваете защиту данных и безопасность приложений?",
      answer:
        "Мы применяем передовые методы и технологии для обеспечения безопасности данных и приложений. Наши специалисты регулярно проводят аудит безопасности и тестирование на уязвимости, чтобы защитить ваш продукт от потенциальных угроз.",
    },
    {
      id: "7",
      question: "Как мне начать сотрудничество с вашей компанией?",
      answer:
        "Чтобы начать сотрудничество, вы можете связаться с нами через форму обратной связи на сайте или по телефону. Мы обсудим ваши потребности и предложим оптимальное решение для вашего проекта. После этого мы подготовим коммерческое предложение и заключим договор.",
    },
  ];
  const [questions, setQuestions] = useState([]);
  const [questionToDisplay, setQuestionToDisplay] = useState("");

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch faqs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Часто задаваемые вопросы</Text>
        <View>
          {questions.map(faq => (
            <View key={faq.id}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.questionButton}
                onPress={() =>
                  faq.question === questionToDisplay
                    ? setQuestionToDisplay("")
                    : setQuestionToDisplay(faq.question)
                }>
                <BlueArrowIcon
                  style={[
                    styles.arrowIcon,
                    faq.question === questionToDisplay &&
                      styles.rotateArrowIcon,
                  ]}
                />
                <Text style={styles.questionText}>{faq.question}</Text>
              </TouchableOpacity>
              {questionToDisplay === faq.question && (
                <Text style={styles.answerText}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQ;
