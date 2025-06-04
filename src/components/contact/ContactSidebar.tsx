import TelegramSection from "@/components/contact/TelegramSection";
import PriceListSection from "@/components/contact/PriceListSection";
import PartnershipSection from "@/components/contact/PartnershipSection";
import SocialSection from "@/components/contact/SocialSection";

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <TelegramSection />
      <PriceListSection />
      <PartnershipSection />
      <SocialSection />
    </div>
  );
};

export default ContactSidebar;
