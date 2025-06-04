import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Factory",
      title: "Современное производство",
      description:
        "Оборудование европейского уровня и строгие стандарты качества на каждом этапе",
    },
    {
      icon: "Shield",
      title: "Сертификация ХАССП",
      description:
        "Полный контроль безопасности продукции от сырья до готового изделия",
    },
    {
      icon: "Truck",
      title: "Логистика по всей России",
      description:
        "Развитая сеть дистрибуции обеспечивает свежесть продукции в любой точке страны",
    },
    {
      icon: "Users",
      title: "Команда профессионалов",
      description:
        "Опытные технологи и качественное сырье — основа нашего успеха",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            О компании Амеди Волга
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 20 лет мы производим высококачественную мясную продукцию,
            объединяя традиционные рецептуры с современными технологиями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-red-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Наша миссия</h3>
              <p className="text-gray-700 leading-relaxed">
                Обеспечивать российские семьи качественными и безопасными
                мясными продуктами, сохраняя традиции мясопереработки и внедряя
                инновационные технологии. Мы стремимся быть эталоном качества в
                отрасли.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="CheckCircle" className="text-green-600" size={24} />
                <span className="text-gray-700">
                  Сертифицированное производство
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="CheckCircle" className="text-green-600" size={24} />
                <span className="text-gray-700">Экологически чистое сырье</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="CheckCircle" className="text-green-600" size={24} />
                <span className="text-gray-700">
                  Постоянный контроль качества
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/cc61a163-cd31-4f41-9453-5163e3e9e63d.png"
                alt="Производство мясных продуктов"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
