import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BrandHeader = () => {
  return (
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
          «Дарина» — это символ индивидуальности и оригинальности в мире мясной
          продукции. Каждый продукт создаётся с особой заботой и вниманием к
          деталям.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Наша торговая марка объединяет в себе лучшие традиции мясопереработки
          с современными инновациями, создавая продукты исключительного качества
          для самых взыскательных покупателей.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
        >
          <Icon name="Sparkles" size={20} />
          Узнать больше о бренде
        </Button>
      </div>
    </div>
  );
};

export default BrandHeader;
