import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SocialSection = () => {
  const socialLinks = [
    { icon: "Globe", label: "amedivolga.ru", href: "#" },
    { icon: "MessageCircle", label: "Telegram канал", href: "#" },
    { icon: "Video", label: "YouTube канал", href: "#" },
  ];

  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Социальные сети
        </h3>
        <div className="space-y-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Icon name={link.icon} size={20} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialSection;
