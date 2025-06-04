import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">А</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Амеди Волга</h1>
              <p className="text-xs text-gray-500">Качество с 1995 года</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              О компании
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Продукция
            </a>
            <a
              href="#darina"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Бренд «Дарина»
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
