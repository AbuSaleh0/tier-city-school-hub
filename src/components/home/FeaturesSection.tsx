
import { School, BookOpen, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: <School className="h-10 w-10 text-primary" />,
    title: "Holistic Education",
    description: "Our curriculum focuses on academic excellence while nurturing physical, emotional, and social development."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, library, and sports facilities to enhance the learning experience."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Experienced Faculty",
    description: "Dedicated teachers with rich experience who inspire and motivate students to achieve their best."
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Extracurricular Focus",
    description: "Wide range of activities to discover and nurture talents beyond academics."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">Why Choose Vidya Bharati Academy?</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We provide a nurturing environment where students can learn, grow, and excel in all aspects of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
