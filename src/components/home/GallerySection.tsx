
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
    alt: "Science laboratory with students",
    category: "Academics"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3",
    alt: "Sports day competition",
    category: "Sports"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3",
    alt: "Cultural program performance",
    category: "Cultural"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
    alt: "School library with students",
    category: "Infrastructure"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3",
    alt: "Outdoor play area",
    category: "Infrastructure"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3",
    alt: "Art and craft activities",
    category: "Activities"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
            Our School Gallery
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Take a visual tour of our campus, activities, and events that make Vidya Bharati Academy special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white/80 text-sm">{image.category}</span>
                <h3 className="text-white font-medium">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
