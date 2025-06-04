export interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  detail: string;
}

export const contactInfoData: ContactInfoItem[] = [
  {
    icon: "MapPin",
    title: "Юридический адрес",
    content: "606471 Нижегородская обл. г.Бор",
    detail: "п.Железнодорожный, ул.Центральная, д.13А",
  },
  {
    icon: "Phone",
    title: "Телефон",
    content: "8(83159)30126",
    detail: "Мобильный: 8-951-910-79-80",
  },
  {
    icon: "Mail",
    title: "Email",
    content: "ekosteeva@bk.ru",
    detail: "",
  },
  {
    icon: "MessageCircle",
    title: "Telegram",
    content: "https://t.me/K_Elena_nn",
    detail: "Связь с менеджером по продажам",
  },
  {
    icon: "Clock",
    title: "Режим работы",
    content: "Пн-Пт: 9:00 - 17:00",
    detail: "Сб и Вс: выходной",
  },
];
