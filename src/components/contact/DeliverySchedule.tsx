import Icon from "@/components/ui/icon";

const DeliverySchedule = () => {
  const deliverySchedule = [
    { city: "Нижний Новгород", days: "Ежедневно кроме воскресенья" },
    { city: "Арзамас", days: "Понедельник, Четверг" },
    { city: "Лукоянов", days: "Понедельник, Четверг" },
    { city: "Перевоз", days: "Понедельник, Четверг" },
    { city: "Саранск", days: "Вторник, Пятница" },
    { city: "Первомайск", days: "Понедельник, Четверг" },
    { city: "Балахна", days: "Понедельник, Среда, Пятница" },
    { city: "Городец", days: "Вторник, Пятница" },
    { city: "Заволжье", days: "Вторник, Пятница" },
    { city: "Богородск", days: "Вторник, Пятница" },
    { city: "Павлово", days: "Вторник, Четверг, Суббота" },
    { city: "Сосновское", days: "Вторник, Четверг, Суббота" },
    { city: "Муром", days: "Понедельник, Вторник, Среда, Четверг, Пятница" },
    { city: "Вача", days: "Среда, Суббота" },
    { city: "Выкса", days: "Понедельник, Четверг" },
    { city: "Новашино", days: "Понедельник, Четверг" },
    { city: "Кулебаки", days: "Понедельник, Четверг" },
    { city: "Дзержинск", days: "Ежедневно кроме воскресенья" },
    { city: "Мулино", days: "Понедельник, Среда, Пятница" },
    { city: "Кстово", days: "Ежедневно кроме воскресенья" },
    { city: "Лысково", days: "Вторник, Четверг, Суббота" },
    { city: "Дружный", days: "Понедельник, Среда, Пятница" },
    { city: "Зеленый город", days: "Понедельник, Среда, Пятница" },
    { city: "Запрудное, Подлесово", days: "Вторник, Четверг, Суббота" },
    { city: "Чернуха", days: "Понедельник, Среда, Пятница" },
    { city: "Линда", days: "Вторник, Пятница" },
    { city: "Семенов", days: "Вторник, Пятница" },
    { city: "Воскресенское", days: "Вторник" },
    { city: "Спасское, Чистое поле", days: "Пятница" },
    { city: "Беласовка, Керженец", days: "Вторник, Пятница" },
    { city: "Бор", days: "Ежедневно кроме воскресенья" },
    { city: "ППК", days: "Среда, Пятница (к 14:00)" },
    {
      city: "Чебоксары",
      days: "При условии сбора заказов на целую машину (5000кг)",
    },
    {
      city: "Йошкар-Ола",
      days: "При условии сбора заказов на целую машину (5000кг)",
    },
    { city: "Иваново", days: "Среда, Воскресенье" },
    { city: "Чкаловск", days: "Среда" },
    { city: "Казань", days: "Вторник" },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Truck" size={24} className="text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">График поставок</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">
                Населенный пункт
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">
                Дни доставки
              </th>
            </tr>
          </thead>
          <tbody>
            {deliverySchedule.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-white transition-colors"
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  {item.city}
                </td>
                <td className="py-3 px-4 text-gray-600">{item.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
        <div className="flex items-start gap-2">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-800">
            График может изменяться в зависимости от праздничных дней, погодных
            условий и объема заказов. Уточняйте актуальную информацию у
            менеджера.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySchedule;
