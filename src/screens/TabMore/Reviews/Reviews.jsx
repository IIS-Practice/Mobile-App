import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getReviews } from "@api/services/reviewApi";
import AvatarIconSvg from "@assets/icons/AvatarIcon";
import LeftButtonIconSvg from "@assets/icons/LeftButtonIcon";
import RightButtonIconSvg from "@assets/icons/RightButtonIcon";
import { styles } from "./Reviews.styles";

// const reviews = {
//   review1: {
//     image: <AvatarIconSvg />,
//     name: "Евгений Кузнецов",
//     text: "Отличная компания. Достаточно быстро разработали приложение в соответствии с моими желаниями."
//   },
//   review2: {
//     image: <AvatarIconSvg />,
//     name: "Илья Даниленко",
//     text: "Отличная компания. Достаточно быстро разработали приложение в соответствии с моими желаниями."
//   },
//   review3: {
//     image: <AvatarIconSvg />,
//     name: "Владислав Сачивко",
//     text: "Отличная компания. Достаточно быстро разработали приложение в соответствии с моими желаниями."
//   },
// };

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    setDisablePrev(currentIndex === 0);
    setDisableNext(currentIndex === reviews.length - 1);
  }, [currentIndex]);

  const currentReview = [reviews[currentIndex]];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <View style={styles.reviewContainer}>
            <TouchableOpacity 
              onPress={handlePrev} 
              style={[styles.leftButton, disablePrev && styles.hiddenButton]}
              disabled={disablePrev} 
            >
              <LeftButtonIconSvg></LeftButtonIconSvg>
            </TouchableOpacity>
            <View style={styles.imageAndName}>
              <AvatarIconSvg />
              <Text style={styles.nameText}>{currentReview.username}</Text>
            </View>
            <Text style={styles.reviewText}>{currentReview.text}</Text>
            <TouchableOpacity 
              onPress={handleNext} 
              style={[styles.rightButton, disableNext && styles.hiddenButton]}
              disabled={disableNext}
            >
              <RightButtonIconSvg></RightButtonIconSvg>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Reviews;
