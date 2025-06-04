import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default ContactLayout;
