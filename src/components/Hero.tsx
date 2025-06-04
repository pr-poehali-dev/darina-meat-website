import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Высококачественная
                <span className="text-red-600"> мясная продукция</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ООО «Амеди Волга» — ведущий производитель мясных изделий из
                птицы и свинины. Наша торговая марка «Дарина» символизирует
                традиции качества и инновации.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Icon name="ShoppingCart" size={20} />
                Наша продукция
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <Icon name="Play" size={20} />О производстве
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">20+</div>
                <div className="text-sm text-gray-600">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1995</div>
                <div className="text-sm text-gray-600">год основания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">контроль качества</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop&auto=format"
                alt="Качественные мясные продукты"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Factory" size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
