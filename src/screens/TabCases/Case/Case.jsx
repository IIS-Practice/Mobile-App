import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { styles } from "./Case.styles";
import { WebView } from "react-native-webview";
import BlueStar from "@assets/icons/blue_star.svg";
import WhiteStar from "@assets/icons/white_star.svg";

const Case = ({ navigation, route }) => {
  const caseId = route.params;

  if (!caseId) {
    return <Text>Error: caseId is missing.</Text>;
  }

  const _case = {
    id: caseId,
    name: "PITA STREET FOOD",
    shortDescription:
      "Разработка сайта для корректного отображения на всех устройствах!",
    innerHtml: `
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Gujarati:wght@100..900&display=swap");
    .case-description {
        margin-top: 40px;
    }

    .case-description h2 {
        font-weight: 600;
	      font-size: 2.187em;
        margin-bottom: 20px;
        line-height: 1.2em;
    }

    .case-description p {
	      font-weight: 400;
	      font-size: 1.875em;
        margin-bottom: 25px;
        line-height: 1.2em;
    }

    .project-details-image img {
        height: 37.3em;
        width: 27.7em;
        object-fit: cover;
        margin-right: 3%;
    }

    .info .mobile-image {
        display: none;
    }

    .project-details-image {
        display: flex;
        flex-direction: row;
    }

    .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .info p {
        font-weight: 400;
        text-align: left;
	      font-size: 1.125em;
        line-height: 1.371em;
    }

    .info .mobile-image {
        display: block;
            width: 100%;
            height: auto;
            margin: 30px 0;
    }

    .project-details-image .desktop-image {
            display: none;
    }

    @media (max-width: 768px) {
        .info .mobile-image {
            display: none;
        }

        .case-description {
            margin-top: 100px;
        }

        .case-description h2 {
            	font-size: 1.75em;
        	line-height: 2.133em;
        	margin-bottom: 60px;
        }

        .case-description p {
		      font-size: 1.5em;
        	line-height: 1.828em;
        	margin-bottom: 15px;
        }

        .info p {
            font-size: 1.5em;
            line-height: 1.828em;
        }
    }
</style>
<div class="case-description">
    <h2>PITA STREET FOOD</h2>
    <p>Специализируется на <br /> кулинарии</p>
</div>
<div class="project-details-image">
    <div class="project-details-image">
        <img src="https://avatars.mds.yandex.net/i?id=48a4918289cb9ad4a778c06b628dfd8765dc83a0-12146588-images-thumbs&n=13"
            alt="Project Details" class="desktop-image" />
        <div class="info">
            <p>Компания “PITA STREET FOOD” обратилась к нам за разработкой полноценного сайта их заведения. В ходе
                живого общения с нашими специалистами, заказчик четко определился со структурой сайта, также в ТЗ была
                включена реализация платёжной системы сайта.</p>
            <img src="https://avatars.mds.yandex.net/i?id=48a4918289cb9ad4a778c06b628dfd8765dc83a0-12146588-images-thumbs&n=13"
                alt="Project Details" class="mobile-image" />
            <p>На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реализации, в рамках
                которых вели дальнейшую разработку проекта.</p>
        </div>
    </div>
</div>`,
    startDate: "2024-05-28T12:39:27.3643085",
    endDate: "2024-06-28T12:39:27.3643086",
    cost: 500,
    complexity: 2,
    services: [{ id: 1, name: "разработка сайта" }],
    images: [
      "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/21nidwfy.png",
      "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/a0nhh1d3.jpg",
    ],
  };

  const htmlBlock = `
  <div style="font-size: 40px; line-height: normal; font-family: "Montserrat", sans-serif;">
      ${_case.innerHtml}
  </div>
  `;
  const width = Dimensions.get("window").width * 0.9;
  const getWeeksBetweenDates = (start, end) => {
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);

    let diff = (endDate.getTime() - startDate.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7;

    return Math.abs(Math.round(diff));
  };

  const getWeekWord = n => {
    const remainder = n % 100;
    const lastDigit = n % 10;

    if (remainder >= 11 && remainder <= 14) {
      return `${n} недель`;
    } else {
      switch (lastDigit) {
        case 1:
          return `${n} неделю`;
        case 2:
        case 3:
        case 4:
          return `${n} недели`;
        default:
          return `${n} недель`;
      }
    }
  };

  const getEndOfService = serviceName => {
    serviceName = serviceName.toLowerCase();

    const services = {
      "разработка сайта": "разработке сайтов",
      "разработка мобильного приложения": "разработке мобильного приложения",
      "разработка ботов": "разработке ботов",
      "ux/ui Дизайн": "UX/UI дизайну",
    };

    return serviceName in services ? services[serviceName] : serviceName;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>
          Кейс{" "}
          {_case.services
            .map(service => `по ${getEndOfService(service.name)}`)
            .join(", ")}{" "}
          для "{_case.name}"
        </Text>

        <Image source={{ uri: _case.images[0] }} style={styles.image} />

        <WebView
          style={{ height: 960, width: width, flex: 1, marginTop: 20 }}
          source={{ html: htmlBlock }}
        />

        <View style={styles.detailContainer}>
          <Text style={styles.detailHeader}>Разработка сайта</Text>
          <Text style={styles.detailText}>Реализация проекта заняла</Text>
          <Text style={styles.boldDetailText}>
            {getWeekWord(getWeeksBetweenDates(_case.startDate, _case.endDate))}
          </Text>

          <Text style={styles.detailText}>Сложность проекта</Text>

          <View style={styles.starContainer}>
            {[...Array(5)].map((_, i) =>
              i >= _case.complexity ? (
                <WhiteStar key={i} style={styles.starImage} />
              ) : (
                <BlueStar key={i} style={styles.starImage} />
              ),
            )}
          </View>

          <Text style={styles.costContainer}>
            <Text style={styles.detailText}>Стоимость проекта{`\t\t\t\t`}</Text>
            <Text style={styles.boldDetailText}>{_case.cost}$</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Case;
