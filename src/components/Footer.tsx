import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">А</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Амеди Волга</h3>
                <p className="text-gray-400 text-sm">Качество с 1995 года</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Производство высококачественной мясной продукции под торговой
              маркой «Дарина». Традиции качества и современные технологии.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Колбасные изделия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мясные деликатесы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Продукция из птицы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Полуфабрикаты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} />
                <span>+7 (8442) 123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} />
                <span>info@amedivolga.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} />
                <span>г. Бор, Нижегородская обл.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ООО «Амеди Волга». Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Globe" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Video" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
