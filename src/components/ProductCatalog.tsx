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
