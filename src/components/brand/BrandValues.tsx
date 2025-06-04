import Icon from "@/components/ui/icon";

interface BrandValue {
  icon: string;
  title: string;
  description: string;
}

const BrandValues = () => {
  const brandValues: BrandValue[] = [
    {
      icon: "Heart",
      title: "Семейные традиции",
      description: "Рецепты, проверенные поколениями",
    },
    {
      icon: "Star",
      title: "Премиум качество",
      description: "Только лучшее сырьё и ингредиенты",
    },
    {
      icon: "Sparkles",
      title: "Инновации",
      description: "Современные технологии производства",
    },
  ];

  return (
    <div className="grid gap-4">
      {brandValues.map((value, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-lg"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={value.icon} size={24} className="text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandValues;
