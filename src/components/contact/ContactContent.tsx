import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

const ContactContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <ContactForm />
      <ContactSidebar />
    </div>
  );
};

export default ContactContent;
