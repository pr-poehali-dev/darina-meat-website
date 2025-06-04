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

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            >
              <Icon name="Sparkles" size={20} />
              Узнать больше о бренде
            </Button>
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

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
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
    </section>
  );
};

export default DarinaBrand;
