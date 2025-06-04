import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог продукции
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный ассортимент нашей продукции с подробными характеристиками,
            ценами и условиями поставки
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">
                Каталог продукции «Дарина»
              </CardTitle>
              <p className="text-gray-600">
                Актуальный каталог с полным ассортиментом мясной продукции
              </p>
            </CardHeader>

            <CardContent className="text-center">
              {/* Галерея страниц каталога */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-800">
                  Страницы каталога продукции
                </h3>

                {/* Сетка изображений каталога */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
                  {[
                    {
                      url: "https://cdn.poehali.dev/files/fa8302e8-45e1-4ca1-8941-907077884e98.jpg",
                      alt: "Каталог Дарина - Страница 1: Курица со специями",
                      page: 1,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/ef8c1167-202a-48a7-b7ad-98f91baf2184.png",
                      alt: "Каталог Дарина - Страница 2: Полуфабрикаты из курицы",
                      page: 2,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/64a704e2-6dd4-4a73-88cc-55c7446a84e3.png",
                      alt: "Каталог Дарина - Страница 3: Мясные изделия",
                      page: 3,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/9e4dc962-04b7-4118-b218-a9aafcff9bf0.png",
                      alt: "Каталог Дарина - Страница 4: Колбасные изделия",
                      page: 4,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/ffe621b9-5f97-48a9-ad4e-9618469decc5.png",
                      alt: "Каталог Дарина - Страница 5: Деликатесы",
                      page: 5,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/5f6ffac6-516d-4a22-b325-d200fc4f6e48.png",
                      alt: "Каталог Дарина - Страница 6: Котлеты и полуфабрикаты",
                      page: 6,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/af04a2fc-a451-4608-89ac-4a1a601a8885.png",
                      alt: "Каталог Дарина - Страница 7: Дополнительный ассортимент",
                      page: 7,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/636392fb-cfbd-4e4f-b2a3-07921793a3e7.png",
                      alt: "Каталог Дарина - Страница 8: Специальные предложения",
                      page: 8,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/1845f1ef-e7f8-4922-8b71-590336c97bee.png",
                      alt: "Каталог Дарина - Страница 9: Премиум продукция",
                      page: 9,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/850461f9-7962-4816-8e3e-ec83db075a12.png",
                      alt: "Каталог Дарина - Страница 10: Новинки ассортимента",
                      page: 10,
                    },
                    {
                      url: "https://cdn.poehali.dev/files/7ce93ea9-16ac-4cde-b722-b79883943ae9.png",
                      alt: "Каталог Дарина - Страница 11: Свежее мясо и стейки",
                      page: 11,
                    },
                  ].map((image, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className="relative rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-auto object-contain bg-white"
                          onClick={() => window.open(image.url, "_blank")}
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white rounded-full px-2 py-1 text-xs font-medium">
                          стр. {image.page}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <Icon
                            name="Expand"
                            size={24}
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Нажмите на изображение для просмотра в полном размере
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <Icon
                    name="Package"
                    size={24}
                    className="text-primary mb-2"
                  />
                  <h3 className="font-semibold mb-1">200+ товаров</h3>
                  <p className="text-sm text-gray-600">Полный ассортимент</p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon
                    name="DollarSign"
                    size={24}
                    className="text-primary mb-2"
                  />
                  <h3 className="font-semibold mb-1">Актуальные цены</h3>
                  <p className="text-sm text-gray-600">
                    Обновление каждую неделю
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name="Truck" size={24} className="text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Условия поставки</h3>
                  <p className="text-sm text-gray-600">Подробная информация</p>
                </div>
              </div>

              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
                onClick={() =>
                  window.open(
                    "https://disk.yandex.ru/i/X7rQamg7SZBA5g",
                    "_blank",
                  )
                }
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог продукции
              </Button>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3"
                  onClick={() => window.open("tel:89519107980", "_self")}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                PDF-файл, размер: ~2 МБ • Обновлен: декабрь 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
