
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Trophy, Server, Code, PenTool, Brain, Beaker, Calculator, Globe, BookText, ChevronRight } from "lucide-react";

const Academics = () => {
  return (
    <MainLayout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Academic Programs</h1>
          <p className="max-w-2xl mx-auto">Empowering young minds through a comprehensive and balanced curriculum</p>
        </div>
      </div>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Our Curriculum</h2>
            <p className="text-neutral-dark mb-8">
              At Vidya Bharati Academy, we follow the Central Board of Secondary Education (CBSE) curriculum, enriched with additional programs that focus on holistic development. Our academic structure is designed to build a strong foundation in core subjects while nurturing creativity, critical thinking, and life skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Primary School (Classes I-V)</h3>
                <p className="text-neutral-dark mb-4">
                  Our primary school curriculum focuses on developing foundational skills in language, mathematics, environmental studies, and general knowledge. We emphasize:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Language development through English, Hindi, and a third language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Building strong numerical abilities and spatial understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Inquiry-based learning about the natural and social world</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Creative expression through art, music, and dance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Physical education and team activities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Middle School (Classes VI-VIII)</h3>
                <p className="text-neutral-dark mb-4">
                  The middle school program builds on the primary foundation while introducing more specialized subjects. Key components include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Advanced language studies in English, Hindi, and Sanskrit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Mathematics with emphasis on problem-solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Specialized science subjects: Physics, Chemistry, and Biology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Social sciences: History, Geography, Civics, and Economics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Introduction to computer science and digital literacy</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Secondary School (Classes IX-X)</h3>
                <p className="text-neutral-dark mb-4">
                  Our secondary program prepares students for the CBSE Class X Board Examinations while developing critical thinking and analytical skills:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>English and Hindi/Sanskrit language studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Advanced Mathematics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Science (Physics, Chemistry, Biology)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Social Science (History, Geography, Civics, Economics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span>Information Technology (optional)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Senior Secondary School (Classes XI-XII)</h3>
                <p className="text-neutral-dark mb-4">
                  Students can choose from three streams based on their interests and career goals:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Science:</strong> Physics, Chemistry, Mathematics/Biology, English, and an elective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Commerce:</strong> Accountancy, Business Studies, Economics, English, and an elective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Humanities:</strong> History, Political Science, Geography/Psychology, English, and an elective</span>
                  </li>
                </ul>
                <p className="text-neutral-dark mt-4">
                  All streams include career counseling, competitive exam preparation, and skill development programs.
                </p>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <Link to="/academics/curriculum">
                <Button>View Detailed Curriculum</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Special Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">STEM Education</h3>
              <p className="text-neutral-dark">
                Our integrated Science, Technology, Engineering, and Mathematics program encourages innovation through hands-on projects and experiments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Global Exposure</h3>
              <p className="text-neutral-dark">
                International exchange programs, virtual collaborations with global schools, and Model United Nations develop global citizenship.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <PenTool className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Arts Integration</h3>
              <p className="text-neutral-dark">
                Our arts program spans visual arts, music, dance, and theater, helping students express themselves creatively across disciplines.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Coding & Robotics</h3>
              <p className="text-neutral-dark">
                Students learn programming languages, develop applications, and build robots, preparing them for the digital future.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <BookText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Value Education</h3>
              <p className="text-neutral-dark">
                Our program nurtures ethical values, cultural awareness, and character development through workshops and community service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Sports Excellence</h3>
              <p className="text-neutral-dark">
                Our comprehensive sports program includes professional coaching, regular tournaments, and specialized training for talented athletes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Faculty</h2>
              <p className="text-neutral-dark mb-6">
                Our dedicated team of educators brings together academic excellence, innovative teaching methods, and genuine care for student development. Our teachers are:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span><strong>Highly Qualified:</strong> Most faculty members hold advanced degrees in their subjects and regularly update their knowledge through professional development.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span><strong>Experienced:</strong> Our teachers average 10+ years of teaching experience, bringing depth and perspective to their classrooms.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span><strong>Innovative:</strong> They embrace modern teaching methods, technology integration, and creative approaches to engage students.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span><strong>Nurturing:</strong> Beyond academics, our teachers mentor students, identify individual strengths, and provide personalized support.</span>
                </li>
              </ul>
              <div className="flex justify-start">
                <Link to="/academics/faculty">
                  <Button className="flex items-center">
                    Meet Our Faculty <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1559485629-f42c1a80ef11?ixlib=rb-4.0.3" alt="Teacher in classroom" className="rounded-lg shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3" alt="Science lab demonstration" className="rounded-lg shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3" alt="Student presentation" className="rounded-lg shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3" alt="Group discussion" className="rounded-lg shadow-md w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Academic Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3" 
                alt="Modern Classroom" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Modern Classrooms</h3>
                <p className="text-white/90 text-sm">Spacious, well-ventilated classrooms equipped with smart boards, digital projectors, and ergonomic furniture.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3" 
                alt="Science Laboratories" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Science Laboratories</h3>
                <p className="text-white/90 text-sm">Fully equipped Physics, Chemistry, and Biology labs with modern apparatus for practical learning and experiments.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3" 
                alt="Computer Labs" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Computer Labs</h3>
                <p className="text-white/90 text-sm">State-of-the-art computer labs with high-speed internet, latest software, and dedicated spaces for coding and robotics.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3" 
                alt="Library" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Library & Resource Center</h3>
                <p className="text-white/90 text-sm">Extensive collection of books, journals, digital resources, and comfortable reading areas to encourage research and reading habits.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?ixlib=rb-4.0.3" 
                alt="Arts Studio" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Arts & Music Studios</h3>
                <p className="text-white/90 text-sm">Dedicated spaces for visual arts, music practice, dance, and theater with professional equipment and instruments.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3" 
                alt="Astronomy Lab" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Innovation Labs</h3>
                <p className="text-white/90 text-sm">Specialized labs for robotics, astronomy, environmental studies, and engineering projects to foster innovation.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/academics/facilities">
              <Button>Explore All Facilities</Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Academics;
