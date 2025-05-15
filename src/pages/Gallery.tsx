
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Gallery categories and images
const galleryData = {
  campus: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3",
      alt: "School Building Front View",
      description: "Main academic block"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3",
      alt: "School Library",
      description: "Our extensive library collection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3",
      alt: "Playground",
      description: "Sports ground with athletic track"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3",
      alt: "Computer Lab",
      description: "State-of-the-art computer laboratory"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3",
      alt: "Science Laboratory",
      description: "Fully equipped science laboratory"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3",
      alt: "Auditorium",
      description: "Multi-purpose auditorium for events"
    }
  ],
  events: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3",
      alt: "Annual Day Celebration",
      description: "Cultural performances during Annual Day 2023"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?ixlib=rb-4.0.3",
      alt: "Science Exhibition",
      description: "Innovation on display at the Science Fair"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3",
      alt: "Sports Day",
      description: "Students competing in athletics competitions"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3",
      alt: "Cultural Program",
      description: "Traditional dance performance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3",
      alt: "Graduation Ceremony",
      description: "Class XII graduation ceremony 2023"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3",
      alt: "Republic Day Celebration",
      description: "Flag hoisting ceremony on Republic Day"
    }
  ],
  classroom: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
      alt: "Interactive Classroom",
      description: "Engaged learning with smart boards"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3",
      alt: "Science Class",
      description: "Hands-on experiments in science class"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3",
      alt: "Library Session",
      description: "Students during a library research period"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
      alt: "Computer Class",
      description: "Coding and digital skills in the computer lab"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3",
      alt: "Art Class",
      description: "Creativity flourishing in art class"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-4.0.3",
      alt: "Math Class",
      description: "Problem-solving in mathematics class"
    }
  ],
  sports: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3",
      alt: "Cricket Match",
      description: "Inter-house cricket tournament"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3",
      alt: "Basketball",
      description: "Students practicing basketball"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3",
      alt: "Football Match",
      description: "School team during a football competition"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3",
      alt: "Badminton",
      description: "Badminton courts in the indoor sports complex"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3",
      alt: "Swimming",
      description: "Students learning swimming techniques"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1576458078030-939a5f28beb9?ixlib=rb-4.0.3",
      alt: "Athletics",
      description: "Track and field events during Sports Day"
    }
  ]
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    description: string;
  }>(null);

  const [activeTab, setActiveTab] = useState("campus");

  const openLightbox = (image: { src: string; alt: string; description: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <MainLayout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Photo Gallery</h1>
          <p className="max-w-2xl mx-auto">Explore our vibrant school life through images</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="campus" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="classroom">Classroom</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(galleryData).map(([category, images]) => (
              <TabsContent key={category} value={category} className="focus:outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image) => (
                    <div 
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-5xl w-full max-h-screen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full max-h-[80vh] object-contain mb-4"
            />
            <div className="bg-black/80 p-4 rounded-lg">
              <h3 className="text-white text-xl font-medium mb-1">{selectedImage.alt}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Gallery;
