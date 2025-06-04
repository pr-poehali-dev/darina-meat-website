import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
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
      title: "Telegram бот",
      content: "t.me/Amedy_bot",
      detail: "Быстрые ответы на вопросы",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "Пн-Пт: 9:00 - 17:00",
      detail: "Сб и Вс: выходной",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и обсудить сотрудничество
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon} size={32} className="text-red-600" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-600">{info.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Расскажите о ваших потребностях..."
                ></textarea>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                <Icon name="Send" size={20} />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Icon
                      name="Download"
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Скачать прайс-лист
                  </h3>
                  <p className="text-gray-700">
                    Актуальный прайс-лист с ценами на всю нашу продукцию
                  </p>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                    size="lg"
                  >
                    <Icon name="FileDown" size={20} />
                    Скачать прайс (.pdf)
                  </Button>
                  <p className="text-sm text-gray-500">
                    Последнее обновление: декабрь 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Стать партнёром
                </h3>
                <p className="text-gray-700 mb-6">
                  Приглашаем к сотрудничеству магазины, рестораны и
                  дистрибьюторов. Выгодные условия и качественная продукция!
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <Icon name="Handshake" size={20} />
                  Условия партнёрства
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Социальные сети
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Icon name="Globe" size={20} />
                    <span>amedivolga.ru</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span>Telegram канал</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <Icon name="Video" size={20} />
                    <span>YouTube канал</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
