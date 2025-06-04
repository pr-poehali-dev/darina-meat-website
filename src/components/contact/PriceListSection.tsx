import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PriceListSection = () => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
      <CardContent className="p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Icon name="Download" size={32} className="text-green-600" />
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
            onClick={() => {
              // Проверяем доступность файла и скачиваем
              try {
                const link = document.createElement("a");
                link.href = "/price-list-2024.pdf";
                link.download = "price-list-2024.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              } catch (error) {
                console.error("Ошибка при скачивании прайс-листа:", error);
                // Откроем файл в новой вкладке как запасной вариант
                window.open("/price-list-2024.pdf", "_blank");
              }
            }}
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
  );
};

export default PriceListSection;
