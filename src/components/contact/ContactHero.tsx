interface ContactHeroProps {
  title: string;
  description: string;
}

const ContactHero = ({ title, description }: ContactHeroProps) => {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default ContactHero;
