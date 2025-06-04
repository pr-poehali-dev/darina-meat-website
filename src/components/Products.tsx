import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Products = () => {
  const categories = [
    {
      title: "Продукция из мяса птицы",
      description: "Свежие части тушки цыплят-бройлеров и филейная продукция",
      image:
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop&auto=format",
      products: [
        "Цыпленок-бройлер целый (13кг)",
        "Бедро с хребтом (5/10кг)",
        "Грудка (5/10кг)",
        "Окорочок с хребтом (5/10кг)",
        "Филе бройлерное (5/10кг)",
        "Крылышко (5/10кг)",
      ],
      badge: "Свежее",
      specs: "Срок хранения: 5 сут (охл) / 6-8 мес (зам)",
    },
    {
      title: "Фарш и полуфабрикаты из птицы",
      description: "Готовые к приготовлению изделия из мяса цыплят-бройлеров",
      image:
        "https://images.unsplash.com/photo-1606909924998-93d5bbaa9b73?w=400&h=300&fit=crop&auto=format",
      products: [
        "Фарш «Популярный» из бедра",
        "Фарш «Премиум» из филе",
        "Купаты «Дарина» с филе и шпиком",
        "Котлеты «Пожарские»",
        "Котлеты «По-Киевски»",
        "Шницель «Столичный»",
      ],
      badge: "Популярное",
      specs:
        "Срок хранения: 5 сут (охл) / 6 мес (зам) / 90 сут (зам полуфабрикаты)",
    },
    {
      title: "Продукция из свинины",
      description: "Отрубы и полуфабрикаты из свинины высшего качества",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&auto=format",
      products: [
        "Вырезка категория А",
        "Карбонат бескостный",
        "Окорок тазобедренный",
        "Лопатка без кости",
        "Фарш «Фермерский»",
        "Котлеты «Фирменные»",
      ],
      badge: "Премиум",
      specs: "Срок хранения: 5 сут (охл) / 120 сут (зам)",
    },
    {
      title: "Варено-копченая продукция",
      description: "Деликатесы варено-копченого приготовления «Дарина»",
      image:
        "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400&h=300&fit=crop&auto=format",
      products: [
        "Бедро ЦБ в/у кв. с пряностями",
        "Грудка ЦБ в/у кв.",
        "Окорочок ЦБ в/у кв.",
        "Рулет ЦБ бескостный",
        "Окорок «Традиционный»",
        "Грудинка свиная",
      ],
      badge: "Деликатес",
      specs: "Срок хранения: 7-12 сут (охл) / 12 мес (зам)",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Наша продукция</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент высококачественных мясных изделий для любого
            случая
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-700">
                  {category.badge}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{category.title}</span>
                  <Icon name="ChefHat" className="text-red-600" size={24} />
                </CardTitle>
                <p className="text-gray-600">{category.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, productIndex) => (
                      <div
                        key={productIndex}
                        className="flex items-center space-x-2"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-600"
                        />
                        <span className="text-sm text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Доступно в магазинах
                      </span>
                      <Icon name="Store" size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Качество, которому доверяют
            </h3>
            <p className="text-gray-600 mb-6">
              Вся продукция ООО «Амеди Волга» под ТМ «Дарина» производится с
              соблюдением ГОСТ и санитарных норм на современном оборудовании
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <Icon
                  name="Award"
                  size={32}
                  className="text-orange-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">Сертификат ISO</div>
              </div>
              <div className="text-center">
                <Icon
                  name="Shield"
                  size={32}
                  className="text-green-600 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">ХАССП</div>
              </div>
              <div className="text-center">
                <Icon
                  name="Leaf"
                  size={32}
                  className="text-green-500 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">Эко-продукция</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
