import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  detail?: string;
}

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
}

const ContactInfo = ({ contactInfo }: ContactInfoProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactInfo.map((info, index) => (
        <Card
          key={index}
          className="text-center hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={info.icon} size={32} className="text-red-600" />
            </div>
            <CardTitle className="text-lg">{info.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-gray-900 mb-1">{info.content}</p>
            {info.detail && (
              <p className="text-sm text-gray-600">{info.detail}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
