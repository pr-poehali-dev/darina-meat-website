import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PartnershipSection = () => {
  return (
    <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Стать партнёром
        </h3>
        <p className="text-gray-700 mb-6">
          Приглашаем к сотрудничеству магазины, рестораны и дистрибьюторов.
          Выгодные условия и качественная продукция!
        </p>
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50"
        >
          <Icon name="Handshake" size={20} />
          Условия партнёрства
        </Button>
      </CardContent>
    </Card>
  );
};

export default PartnershipSection;
