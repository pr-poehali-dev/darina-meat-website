import { Card, CardContent } from "@/components/ui/card";

const BrandShowcase = () => {
  return (
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
  );
};

export default BrandShowcase;
