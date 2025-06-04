import ContactLayout from "@/components/contact/ContactLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import DeliverySchedule from "@/components/contact/DeliverySchedule";
import ContactContent from "@/components/contact/ContactContent";
import { contactInfoData } from "@/data/contactInfo";

const Contact = () => {
  return (
    <ContactLayout>
      <ContactHero
        title="Свяжитесь с нами"
        description="Мы всегда готовы ответить на ваши вопросы и обсудить сотрудничество"
      />

      <ContactInfo contactInfo={contactInfoData} />

      <div className="mb-12">
        <DeliverySchedule />
      </div>

      <ContactContent />
    </ContactLayout>
  );
};

export default Contact;
