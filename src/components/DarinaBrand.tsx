import BrandHeader from "@/components/brand/BrandHeader";
import BrandValues from "@/components/brand/BrandValues";
import BrandShowcase from "@/components/brand/BrandShowcase";
import BrandStats from "@/components/brand/BrandStats";
import PartnershipSection from "@/components/brand/PartnershipSection";

const DarinaBrand = () => {
  return (
    <section
      id="darina"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <BrandHeader />
            <BrandValues />
          </div>
          <BrandShowcase />
        </div>

        <div className="mt-16">
          <BrandStats />
        </div>

        <div className="mt-16">
          <PartnershipSection />
        </div>
      </div>
    </section>
  );
};

export default DarinaBrand;
