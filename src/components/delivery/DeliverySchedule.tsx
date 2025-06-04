import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DeliveryDay {
  day: string;
  cities: string[];
}

interface DailyCity {
  name: string;
  note: string;
}

interface SpecialCondition {
  name: string;
  condition: string;
}

const DeliverySchedule = () => {
  const deliveryData: DeliveryDay[] = [
    {
      day: "Понедельник",
      cities: [
        "Арзамас",
        "Лукоянов",
        "Перевоз",
        "Первомайск",
        "Балахна",
        "Муром",
        "Выкса",
        "Новашино",
        "Кулебаки",
        "Мулино",
        "Дружный",
        "Зеленый город",
        "Чернуха",
      ],
    },
    {
      day: "Вторник",
      cities: [
        "Саранск",
        "Городец",
        "Заволжье",
        "Богородск",
        "Павлово",
        "Сосновское",
        "Муром",
        "Лысково",
        "Запрудное/Подлесово",
        "Линда",
        "Семенов",
        "Воскресенское",
        "Беласовка/Керженец",
        "Казань",
      ],
    },
    {
      day: "Среда",
      cities: [
        "Балахна",
        "Муром",
        "Мулино",
        "Дружный",
        "Зеленый город",
        "Чернуха",
        "ППК к 14:00",
        "Иваново",
        "Чкаловск",
      ],
    },
    {
      day: "Четверг",
      cities: [
        "Арзамас",
        "Лукоянов",
        "Перевоз",
        "Первомайск",
        "Павлово",
        "Сосновское",
        "Муром",
        "Выкса",
        "Новашино",
        "Кулебаки",
        "Лысково",
        "Запрудное/Подлесово",
      ],
    },
    {
      day: "Пятница",
      cities: [
        "Саранск",
        "Городец",
        "Заволжье",
        "Богородск",
        "Балахна",
        "Муром",
        "Мулино",
        "Дружный",
        "Зеленый город",
        "Чернуха",
        "Линда",
        "Семенов",
        "Спасское/Чистое поле",
        "Беласовка/Керженец",
        "ППК к 14:00",
      ],
    },
    {
      day: "Суббота",
      cities: ["Павлово", "Сосновское", "Лысково", "Запрудное/Подлесово"],
    },
    {
      day: "Воскресенье",
      cities: ["Иваново"],
    },
  ];

  const dailyCities: DailyCity[] = [
    { name: "Нижний Новгород", note: "ежедневно кроме воскресенья" },
    { name: "Дзержинск", note: "ежедневно кроме воскресенья" },
    { name: "Кстово", note: "ежедневно кроме воскресенья" },
    { name: "Бор", note: "ежедневно кроме воскресенья" },
  ];

  const specialConditions: SpecialCondition[] = [
    {
      name: "Чебоксары",
      condition:
        "при условии сбора заказов на целую машину грузоподъемностью 5000кг",
    },
    {
      name: "Йошкар-Ола",
      condition:
        "при условии сбора заказов на целую машину грузоподъемностью 5000кг",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">График доставки</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Расписание поставок по населенным пунктам Нижегородской области и
            соседних регионов
          </p>
        </div>

        <div className="space-y-8">
          {/* Ежедневная доставка */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Truck" className="text-green-600" />
                <span>Ежедневная доставка</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {dailyCities.map((city, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <h4 className="font-semibold text-gray-900">{city.name}</h4>
                    <p className="text-sm text-green-700">{city.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* График по дням недели */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Calendar" className="text-blue-600" />
                <span>График поставок по дням недели</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deliveryData.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {day.day}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                      {day.cities.map((city, cityIndex) => (
                        <span
                          key={cityIndex}
                          className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Особые условия */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="AlertCircle" className="text-orange-600" />
                <span>Особые условия доставки</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialConditions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 p-4 rounded-lg border border-orange-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-orange-700">{item.condition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySchedule;
