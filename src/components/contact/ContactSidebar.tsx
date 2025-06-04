import TelegramSection from "@/components/contact/TelegramSection";
import PriceListSection from "@/components/contact/PriceListSection";
import SocialSection from "@/components/contact/SocialSection";

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <TelegramSection />
      <PriceListSection />
      <SocialSection />
    </div>
  );
};

export default ContactSidebar;
