import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DarinaBrand = () => {
  const brandValues = [
    {
      icon: "Heart",
      title: "Семейные традиции",
      description: "Рецепты, проверенные поколениями",
    },
    {
      icon: "Star",
      title: "Премиум качество",
      description: "Только лучшее сырьё и ингредиенты",
    },
    {
      icon: "Sparkles",
      title: "Инновации",
      description: "Современные технологии производства",
    },
  ];

  return (
    <section
      id="darina"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Д</span>
                </div>
                <h2 className="text-4xl font-bold">
                  Торговая марка
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                    {" "}
                    «Дарина»
                  </span>
                </h2>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                «Дарина» — это символ индивидуальности и оригинальности в мире
                мясной продукции. Каждый продукт создаётся с особой заботой и
                вниманием к деталям.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Наша торговая марка объединяет в себе лучшие традиции
                мясопереработки с современными инновациями, создавая продукты
                исключительного качества для самых взыскательных покупателей.
              </p>
            </div>

            <div className="grid gap-4">
              {brandValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={value.icon}
                      size={24}
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                <Icon name="Sparkles" size={20} />
                Узнать больше о бренде
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/files/c033b586-9c11-4b60-9da8-b1404c1883ea.jpg"
                    alt="Каталог продукции торговой марки Дарина"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Выбор профессионалов
                      </h4>
                      <p className="text-sm text-gray-700">
                        Продукция «Дарина» используется ведущими ресторанами и
                        кулинарами России
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-xs">лет качества</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Почему выбирают «Дарину»?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-red-600">98%</div>
                  <div className="text-sm text-gray-600">
                    покупателей рекомендуют друзьям
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-red-600">1000+</div>
                  <div className="text-sm text-gray-600">
                    торговых точек по всей России
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Стать партнером «Дарина»
                </h3>
                <p className="text-gray-600">
                  Для заключения договора партнерства необходимо предоставить
                  следующие документы
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Icon
                          name="Building"
                          size={16}
                          className="text-white"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Основные документы организации
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-orange-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Копия Свидетельства или листа записи ЕГРЮЛ о создании
                          организации
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-orange-500 mt-0.5 flex-shrink-0"
                        />
                        <span>Копия Свидетельства ИНН</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-orange-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Копия Устава в действующей редакции, а также изменения
                          к нему
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Icon name="Users" size={16} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        О директоре и представителях
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-red-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Копия решения участников о назначении руководителя
                          организации и гл. бухгалтера
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-red-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Доверенность на представителя, если при исполнении
                          сделки от вас будет выступать представитель
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="Package" size={16} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        О наличии ресурсов
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Копия договора аренды нежилого помещения (здания) если
                          Юридическое лицо является Арендатором
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Копия лицензии, если она требуется для исполнения
                          договора
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={16} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Об отсутствии споров с ИФНС
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Icon
                          name="FileText"
                          size={14}
                          className="text-green-500 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Справка из ИФНС об отсутствии задолженности по
                          платежам в бюджет
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                >
                  <Icon name="Handshake" size={20} />
                  Начать партнерство
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* График поставок по населенным пунктам */}
      <div className="mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              График поставок по населенным пунктам
            </h3>
            <p className="text-gray-600">
              Регулярные поставки свежей продукции во все точки региона
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Москва",
                day: "Понедельник",
                time: "08:00 - 10:00",
                color: "blue",
              },
              {
                city: "Санкт-Петербург",
                day: "Понедельник",
                time: "14:00 - 16:00",
                color: "green",
              },
              {
                city: "Нижний Новгород",
                day: "Вторник",
                time: "09:00 - 11:00",
                color: "purple",
              },
              {
                city: "Казань",
                day: "Вторник",
                time: "13:00 - 15:00",
                color: "orange",
              },
              {
                city: "Воронеж",
                day: "Среда",
                time: "08:30 - 10:30",
                color: "red",
              },
              {
                city: "Ростов-на-Дону",
                day: "Среда",
                time: "15:00 - 17:00",
                color: "indigo",
              },
              {
                city: "Екатеринбург",
                day: "Четверг",
                time: "09:00 - 11:00",
                color: "pink",
              },
              {
                city: "Самара",
                day: "Четверг",
                time: "14:00 - 16:00",
                color: "teal",
              },
              {
                city: "Краснодар",
                day: "Пятница",
                time: "08:00 - 10:00",
                color: "yellow",
              },
            ].map((delivery, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-l-4 border-${delivery.color}-500 bg-${delivery.color}-50 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{delivery.city}</h4>
                  <div
                    className={`w-3 h-3 rounded-full bg-${delivery.color}-500`}
                  ></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Calendar"
                      size={14}
                      className={`text-${delivery.color}-600`}
                    />
                    <span className="font-medium text-gray-700">
                      {delivery.day}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Clock"
                      size={14}
                      className={`text-${delivery.color}-600`}
                    />
                    <span className="text-gray-600">{delivery.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Truck"
                      size={14}
                      className={`text-${delivery.color}-600`}
                    />
                    <span className="text-gray-600">Регулярная доставка</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon
                name="Info"
                size={20}
                className="text-orange-600 mt-1 flex-shrink-0"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Условия поставок
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Минимальный заказ от 50 000 рублей</li>
                  <li>• Предварительная заявка за 2 рабочих дня</li>
                  <li>• Возможна корректировка времени доставки</li>
                  <li>• Экстренные поставки по согласованию</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarinaBrand;
