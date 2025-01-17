import {
  HOME_SCREEN,
  FORM_SCREEN,
  WATERFALL_SCREEN,
  SCRUM_SCREEN,
  WEBDEV_SCREEN,
  MOBILEDEV_SCREEN,
  BOTDEV_SCREEN,
  UX_SCREEN,
  CASES_SCREEN,
  CASE_SCREEN,
  CONTACTS_SCREEN,
  EMPLOYEES_SCREEN,
  DEVELOPERS_SCREEN,
  DESIGNERS_SCREEN,
  ANALYSTS_SCREEN,
  EMPLOYMENT_SCREEN,
  REVIEWS_SCREEN,
  FAQ_SCREEN,
  SERVICES_SCREEN,
  MORE_SCREEN,
} from "./utils/constants";
import {
  Home,
  Form,
  Waterfall,
  Scrum,
  WebDev,
  MobileDev,
  BotDev,
  UX,
  Cases,
  Case,
  Contacts,
  Employees,
  Developers,
  Designers,
  Analysts,
  Employment,
  Reviews,
  FAQ,
  Services,
  More,
} from "./screens";

export const publicRoutes = [
  {
    name: HOME_SCREEN,
    Screen: Home,
    title: "IISolutions",
  },
  {
    name: FORM_SCREEN,
    Screen: Form,
    title: "Обратная связь",
  },
  {
    name: WATERFALL_SCREEN,
    Screen: Waterfall,
    title: "WATERFALL",
  },
  {
    name: SCRUM_SCREEN,
    Screen: Scrum,
    title: "SCRUM",
  },
  {
    name: WEBDEV_SCREEN,
    Screen: WebDev,
    title: "Разработка сайтов",
  },
  {
    name: MOBILEDEV_SCREEN,
    Screen: MobileDev,
    title: "Разработка приложения",
  },
  {
    name: BOTDEV_SCREEN,
    Screen: BotDev,
    title: "Разработка ботов",
  },
  {
    name: UX_SCREEN,
    Screen: UX,
    title: "UX/UI Дизайн",
  },
  {
    name: CASES_SCREEN,
    Screen: Cases,
    title: "Кейсы",
  },
  {
    name: CASE_SCREEN,
    Screen: Case,
    title: "Кейсы",
  },
  {
    name: CONTACTS_SCREEN,
    Screen: Contacts,
    title: "Контакты",
  },
  {
    name: EMPLOYEES_SCREEN,
    Screen: Employees,
    title: "Сотрудники",
  },
  {
    name: DEVELOPERS_SCREEN,
    Screen: Developers,
    title: "Разработчики",
  },
  {
    name: DESIGNERS_SCREEN,
    Screen: Designers,
    title: "Дизайнеры",
  },
  {
    name: ANALYSTS_SCREEN,
    Screen: Analysts,
    title: "Бизнес-аналитики",
  },
  {
    name: EMPLOYMENT_SCREEN,
    Screen: Employment,
    title: "Работа в IISolutions",
  },
  {
    name: REVIEWS_SCREEN,
    Screen: Reviews,
    title: "Отзывы",
  },
  {
    name: FAQ_SCREEN,
    Screen: FAQ,
    title: "FAQ",
  },
  {
    name: SERVICES_SCREEN,
    Screen: Services,
    title: "Услуги",
  },
  {
    name: MORE_SCREEN,
    Screen: More,
    title: "Ещё",
  },
];
