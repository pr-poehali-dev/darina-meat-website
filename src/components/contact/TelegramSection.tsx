import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TelegramSection = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
      <CardContent className="p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Icon name="MessageCircle" size={32} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Telegram</h3>
          <p className="text-gray-700">
            Отсканируйте QR-код для связи с менеджером по продажам
          </p>
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <img
              src="https://cdn.poehali.dev/files/7abc8a4f-6361-4aaf-97ee-b84c2cea6b07.png"
              alt="QR-код Telegram @K_Elena_nn"
              className="w-48 h-48 mx-auto"
            />
          </div>
          <a
            href="https://t.me/K_Elena_nn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            @K_Elena_nn
          </a>
          <p className="text-sm text-gray-500">
            Прямая связь с менеджером по продажам
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TelegramSection;
