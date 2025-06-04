import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import DocumentCard from "./DocumentCard";

const PartnershipSection = () => {
  const documentCategories = [
    {
      title: "Основные документы организации",
      iconName: "Building",
      iconColor: "bg-orange-500",
      bgColor: "bg-orange-50",
      documents: [
        {
          icon: "FileText",
          text: "Копия Свидетельства или листа записи ЕГРЮЛ о создании организации",
        },
        {
          icon: "FileText",
          text: "Копия Свидетельства ИНН",
        },
        {
          icon: "FileText",
          text: "Копия Устава в действующей редакции, а также изменения к нему",
        },
      ],
    },
    {
      title: "О директоре и представителях",
      iconName: "Users",
      iconColor: "bg-red-500",
      bgColor: "bg-red-50",
      documents: [
        {
          icon: "FileText",
          text: "Копия решения участников о назначении руководителя организации и гл. бухгалтера",
        },
        {
          icon: "FileText",
          text: "Доверенность на представителя, если при исполнении сделки от вас будет выступать представитель",
        },
      ],
    },
    {
      title: "О наличии ресурсов",
      iconName: "Package",
      iconColor: "bg-blue-500",
      bgColor: "bg-blue-50",
      documents: [
        {
          icon: "FileText",
          text: "Копия договора аренды нежилого помещения (здания) если Юридическое лицо является Арендатором",
        },
        {
          icon: "FileText",
          text: "Копия лицензии, если она требуется для исполнения договора",
        },
      ],
    },
    {
      title: "Об отсутствии споров с ИФНС",
      iconName: "Shield",
      iconColor: "bg-green-500",
      bgColor: "bg-green-50",
      documents: [
        {
          icon: "FileText",
          text: "Справка из ИФНС об отсутствии задолженности по платежам в бюджет",
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Стать партнером «Дарина»
          </h3>
          <p className="text-gray-600">
            Для заключения договора партнерства необходимо предоставить
            следующие документы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {documentCategories.slice(0, 2).map((category, index) => (
              <DocumentCard key={index} {...category} />
            ))}
          </div>
          <div className="space-y-6">
            {documentCategories.slice(2).map((category, index) => (
              <DocumentCard key={index} {...category} />
            ))}
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-200">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            <Icon name="Handshake" size={20} />
            Начать партнерство
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
