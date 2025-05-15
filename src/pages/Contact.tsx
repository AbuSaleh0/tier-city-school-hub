
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto">We're here to help. Reach out to us with your questions or feedback.</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
              
              <div className="mb-8">
                <p className="text-neutral-dark mb-6">
                  We welcome your inquiries and feedback. Please fill out the form, and our team will get back to you as soon as possible.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input id="subject" placeholder="Enter subject" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} required />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-neutral-dark">+91 98765 43210 (Main)</p>
                      <p className="text-neutral-dark">+91 98765 43211 (Admissions)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-neutral-dark">info@vidyabharati.edu</p>
                      <p className="text-neutral-dark">admissions@vidyabharati.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-neutral-dark">
                        Vidya Nagar, Civil Lines,<br />
                        Raipur, Chhattisgarh - 492001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-neutral-dark">Monday to Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-neutral-dark">Saturday: 9:00 AM - 1:00 PM (Administrative Office only)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Button className="w-full flex items-center justify-center bg-secondary hover:bg-secondary-dark">
                  <PhoneCall size={16} className="mr-2" />
                  Call Us Now
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Our Location</h2>
              <div className="bg-neutral-light p-4 rounded-lg mb-6">
                <div className="aspect-[4/3] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59858.75308236632!2d81.58856057665551!3d21.248429578963768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda768f28e35%3A0x5b37b0da148a0d7a!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1652989841183!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    className="border-0 w-full h-full"
                    allowFullScreen 
                    loading="lazy"
                    title="School Location Map"
                  ></iframe>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">How to Reach Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">By Public Transport</h4>
                    <p className="text-neutral-dark">
                      The school is well-connected by city bus routes. Bus numbers 12, 15, and 23 stop directly in front of the school gate. Auto-rickshaws and taxis are also readily available.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">By Car</h4>
                    <p className="text-neutral-dark">
                      From the city center, take the Civil Lines Road heading north. At the second traffic light, turn right onto Vidya Marg. The school is located 500 meters ahead on the left side. Visitor parking is available.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">From Railway Station</h4>
                    <p className="text-neutral-dark">
                      The school is approximately 5 kilometers from Raipur Railway Station. A 15-minute drive by taxi or auto-rickshaw will bring you to the campus.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">From Airport</h4>
                    <p className="text-neutral-dark">
                      Swami Vivekananda Airport is about 15 kilometers from the school. The journey takes approximately 30 minutes by car, depending on traffic conditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Visit Our Campus</h3>
                <p className="mb-4">
                  We welcome prospective parents and students to visit our campus. Campus tours are conducted every Saturday between 10:00 AM and 12:00 PM. Please call our Admissions Office to schedule your visit.
                </p>
                <Button className="bg-white text-primary hover:bg-neutral-light w-full">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Department Contact Information</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Admissions</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">+91 98765 43211</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">admissions@vidyabharati.edu</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Academic Office</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">+91 98765 43212</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">academics@vidyabharati.edu</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Accounts & Fees</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">+91 98765 43213</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">accounts@vidyabharati.edu</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Transport Department</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">+91 98765 43214</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="text-primary mr-2" />
                  <span className="text-neutral-dark">transport@vidyabharati.edu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
