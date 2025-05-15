
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Parent",
    content: "Vidya Bharati Academy has provided an excellent learning environment for my daughter. The teachers are caring and attentive to individual needs. The holistic approach to education has helped her grow not just academically but as a well-rounded individual.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Meera Sharma",
    role: "Alumni (2018)",
    content: "The years I spent at Vidya Bharati shaped my future in ways I couldn't imagine. The discipline, values, and knowledge imparted by my teachers prepared me well for higher education and life challenges. I'm forever grateful for the foundation I received here.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Anand Verma",
    role: "Parent",
    content: "What stands out about this school is how they balance academics with extracurricular activities. My son has discovered his passion for music while maintaining excellent grades. The faculty truly understands that education goes beyond textbooks.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Alumni (2020)",
    content: "The confidence I gained at Vidya Bharati helped me secure admission to a prestigious university. The school's emphasis on communication skills and practical knowledge gave me an edge over others. I still cherish the memories and lessons learned here.",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            What Our Community Says
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from our parents, students, and alumni about their experiences at Vidya Bharati Academy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex justify-center md:justify-start mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="#F6AD55" color="#F6AD55" />
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-white/90 italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                  activeIndex === index ? "bg-secondary" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
