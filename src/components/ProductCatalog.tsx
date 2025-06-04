import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const products = [
    {
      name: "Купаты «Дачные»",
      description: "Сочные купаты с натуральными специями",
      weight: "1 кг",
      price: "от 350 руб",
      image:
        "https://cdn.poehali.dev/files/86e76497-6273-46ad-8232-b9d7a0ade236.png",
      category: "Купаты",
      badge: "Хит",
    },
    {
      name: "Купаты «Дарина»",
      description: "Премиум купаты с филе и шпиком",
      weight: "1 кг",
      price: "от 420 руб",
      image:
        "https://cdn.poehali.dev/files/ed4e314e-f63a-461e-ba68-d414e50ea16b.png",
      category: "Купаты",
      badge: "Премиум",
    },
    {
      name: "Купаты «Для жарки»",
      description: "Идеальны для жарки на сковороде",
      weight: "1 кг",
      price: "от 380 руб",
      image:
        "https://cdn.poehali.dev/files/9ccb0d86-d2ba-42bd-a768-65787bd9eb51.png",
      category: "Купаты",
      badge: "Новинка",
    },
    {
      name: "Полуфабрикаты «Дарина»",
      description: "Каталог готовых полуфабрикатов",
      weight: "Разные",
      price: "от 250 руб",
      image:
        "https://cdn.poehali.dev/files/b03d376c-165c-47a8-aaa1-c81c60a9c612.png",
      category: "Полуфабрикаты",
      badge: "Каталог",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Каталог продукции
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полуфабрикаты высокого качества под торговой маркой «Дарина»
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-3 left-3 ${
                    product.badge === "Хит"
                      ? "bg-red-600 hover:bg-red-700"
                      : product.badge === "Премиум"
                        ? "bg-orange-600 hover:bg-orange-700"
                        : product.badge === "Новинка"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {product.badge}
                </Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Icon
                    name="Heart"
                    size={16}
                    className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
                  />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                  {product.name}
                </CardTitle>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Package"
                        size={16}
                        className="text-gray-400"
                      />
                      <span className="text-sm text-gray-600">
                        {product.weight}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">
                        {product.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors">
                      <Icon name="ShoppingCart" size={16} />
                      <span className="text-sm font-medium">В корзину</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Свежие полуфабрикаты каждый день
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Все полуфабрикаты изготавливаются из свежего мяса с соблюдением
              технологии и санитарных норм
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-blue-600 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">
                  Быстрое приготовление
                </div>
              </div>
              <div className="text-center">
                <Icon
                  name="Snowflake"
                  size={32}
                  className="text-cyan-600 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">Заморозка -18°C</div>
              </div>
              <div className="text-center">
                <Icon
                  name="Star"
                  size={32}
                  className="text-yellow-600 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">Высшее качество</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
