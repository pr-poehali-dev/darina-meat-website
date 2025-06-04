import TelegramSection from "@/components/contact/TelegramSection";
import SocialSection from "@/components/contact/SocialSection";

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <TelegramSection />
      <SocialSection />
    </div>
  );
};

export default ContactSidebar;
