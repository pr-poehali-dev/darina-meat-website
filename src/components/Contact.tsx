import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import TelegramSection from "@/components/contact/TelegramSection";
import PriceListSection from "@/components/contact/PriceListSection";
import PartnershipSection from "@/components/contact/PartnershipSection";
import SocialSection from "@/components/contact/SocialSection";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Юридический адрес",
      content: "606471 Нижегородская обл. г.Бор",
      detail: "п.Железнодорожный, ул.Центральная, д.13А",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "8(83159)30126",
      detail: "Мобильный: 8-951-910-79-80",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "ekosteeva@bk.ru",
      detail: "",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      content: "https://t.me/K_Elena_nn",
      detail: "Связь с менеджером по продажам",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "Пн-Пт: 9:00 - 17:00",
      detail: "Сб и Вс: выходной",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и обсудить сотрудничество
          </p>
        </div>

        <ContactInfo contactInfo={contactInfo} />

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <TelegramSection />
            <PriceListSection />
            <PartnershipSection />
            <SocialSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
