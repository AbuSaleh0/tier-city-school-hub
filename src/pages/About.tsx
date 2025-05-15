
import MainLayout from "@/components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Vidya Bharati Academy</h1>
          <p className="max-w-2xl mx-auto">Our vision, mission, values, and history</p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-neutral-dark mb-6">
                To be a premier educational institution that nurtures intellectual curiosity, fosters personal growth, and instills social responsibility in students to prepare them as future leaders and global citizens.
              </p>
              <div className="bg-neutral-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-baseline">
                    <span className="bg-primary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Excellence:</strong> Pursuing the highest standards in all endeavors</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="bg-primary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Integrity:</strong> Acting with honesty and strong moral principles</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="bg-primary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Respect:</strong> Valuing diversity and treating everyone with dignity</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="bg-primary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Responsibility:</strong> Taking ownership of actions and their impact</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="bg-primary w-2 h-2 rounded-full mr-3 mt-2"></span>
                    <span><strong>Innovation:</strong> Embracing creativity and forward-thinking approaches</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-neutral-dark mb-4">
                Vidya Bharati Academy is committed to providing a holistic education that:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <span className="bg-secondary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Fosters academic excellence through a comprehensive curriculum that balances traditional knowledge with modern skills</span>
                </li>
                <li className="flex">
                  <span className="bg-secondary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Nurtures character development and cultural values deeply rooted in Indian heritage while embracing global perspectives</span>
                </li>
                <li className="flex">
                  <span className="bg-secondary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Encourages critical thinking, creativity, and innovation through experiential learning</span>
                </li>
                <li className="flex">
                  <span className="bg-secondary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span>Develops leadership qualities and social responsibility to contribute positively to society</span>
                </li>
                <li className="flex">
                  <span className="bg-secondary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <span>Builds a collaborative community of students, parents, and educators working together for student success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <h3 className="text-xl font-semibold text-primary mb-2">1995 - Foundation</h3>
              <p className="text-neutral-dark mb-6">
                Vidya Bharati Academy was established by a group of visionary educators and community leaders led by Dr. Ramesh Sharma with the aim of providing quality education in the growing city of Raipur. The school started with just 120 students and 10 teachers in a modest building.
              </p>
            </div>
            
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <h3 className="text-xl font-semibold text-primary mb-2">2000 - Growth & Expansion</h3>
              <p className="text-neutral-dark mb-6">
                By the turn of the millennium, the school had grown to over 500 students. A new campus was inaugurated with modern facilities including science laboratories, a library, and sports infrastructure. This period also saw the introduction of the CBSE curriculum.
              </p>
            </div>
            
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <h3 className="text-xl font-semibold text-primary mb-2">2010 - Technological Advancement</h3>
              <p className="text-neutral-dark mb-6">
                The school embraced technological advancements by introducing smart classrooms, computer labs, and digital learning resources. This period marked our commitment to blending traditional teaching methods with modern educational technology.
              </p>
            </div>
            
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <h3 className="text-xl font-semibold text-primary mb-2">2015 - Academic Excellence & Recognition</h3>
              <p className="text-neutral-dark mb-6">
                The school received several awards for academic excellence and innovative teaching practices. Our students began consistently achieving top ranks in board examinations and competitive entrance tests at state and national levels.
              </p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <h3 className="text-xl font-semibold text-primary mb-2">Present Day - A Center of Holistic Education</h3>
              <p className="text-neutral-dark">
                Today, Vidya Bharati Academy stands as one of the most respected educational institutions in the region with over 1,500 students and 100 faculty members. We continue to evolve our educational approach while staying true to our founding values and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Principal" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">Dr. Sanjay Mehta</h3>
                <p className="text-secondary font-medium mb-3">Principal</p>
                <p className="text-neutral-dark text-sm">
                  With over 25 years of experience in education, Dr. Mehta brings a wealth of knowledge and innovative leadership to our institution. He holds a Ph.D. in Education from Delhi University.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Vice Principal" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">Mrs. Anjali Sharma</h3>
                <p className="text-secondary font-medium mb-3">Vice Principal</p>
                <p className="text-neutral-dark text-sm">
                  Mrs. Sharma oversees academic programs and student development. Her 18 years of teaching and administrative experience have been instrumental in shaping our curriculum.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Chairman" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">Mr. Rakesh Agarwal</h3>
                <p className="text-secondary font-medium mb-3">Chairman</p>
                <p className="text-neutral-dark text-sm">
                  As the Chairman of the Board of Trustees, Mr. Agarwal provides strategic direction and governance oversight. He is a respected entrepreneur and philanthropist in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
