
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <NewsEventsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
