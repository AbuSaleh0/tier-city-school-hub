
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarIcon, Download, FileText, Clock, CheckCircle } from "lucide-react";

const Admissions = () => {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <MainLayout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Admissions</h1>
          <p className="max-w-2xl mx-auto">Join our vibrant community of learners and begin your journey towards excellence</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="process">Admission Process</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="fees">Fee Structure</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="process">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Admission Process</h2>
                
                <div className="mb-8">
                  <p className="text-neutral-dark mb-4">
                    Thank you for your interest in Vidya Bharati Academy. Our admission process is designed to be thorough yet straightforward, allowing us to identify students who will thrive in our academic environment while making the experience as smooth as possible for families.
                  </p>
                </div>

                <div className="space-y-8 mb-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Application Submission</h3>
                      <p className="text-neutral-dark mb-3">
                        Fill out the online application form or collect a physical form from our administrative office. Submit the completed form along with the required documents and application fee.
                      </p>
                      <div className="flex gap-3">
                        <div className="flex items-center text-neutral-dark text-sm">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>Deadline: January 31, 2025</span>
                        </div>
                        <div className="flex items-center text-neutral-dark text-sm">
                          <FileText size={16} className="mr-2" />
                          <span>Application Fee: ₹1,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Entrance Assessment</h3>
                      <p className="text-neutral-dark mb-3">
                        Students applying for Classes II and above will need to take an entrance assessment to evaluate their academic readiness. For Nursery to Class I, we conduct an informal interaction session.
                      </p>
                      <div className="flex gap-3">
                        <div className="flex items-center text-neutral-dark text-sm">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>Assessment Dates: February 10-20, 2025</span>
                        </div>
                        <div className="flex items-center text-neutral-dark text-sm">
                          <Clock size={16} className="mr-2" />
                          <span>Duration: 1-2 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Parent and Student Interview</h3>
                      <p className="text-neutral-dark mb-3">
                        Following the assessment, shortlisted candidates and their parents will be invited for an interview with school administrators. This helps us understand the family's educational philosophy and expectations.
                      </p>
                      <div className="flex gap-3">
                        <div className="flex items-center text-neutral-dark text-sm">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>Interview Dates: March 1-15, 2025</span>
                        </div>
                        <div className="flex items-center text-neutral-dark text-sm">
                          <Clock size={16} className="mr-2" />
                          <span>Duration: 30 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Admission Offer and Enrollment</h3>
                      <p className="text-neutral-dark mb-3">
                        Successful candidates will receive an admission offer. To secure the place, parents must complete the enrollment process by paying the admission fee and first-term tuition by the specified deadline.
                      </p>
                      <div className="flex gap-3">
                        <div className="flex items-center text-neutral-dark text-sm">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>Results Announcement: March 31, 2025</span>
                        </div>
                        <div className="flex items-center text-neutral-dark text-sm">
                          <CalendarIcon size={16} className="mr-2" />
                          <span>Fee Payment Deadline: April 15, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-light p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">Important Dates for 2025-26 Admissions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Application Period</h4>
                      <p className="text-neutral-dark">November 15, 2024 - January 31, 2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Entrance Assessments</h4>
                      <p className="text-neutral-dark">February 10-20, 2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Parent-Student Interviews</h4>
                      <p className="text-neutral-dark">March 1-15, 2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Results Announcement</h4>
                      <p className="text-neutral-dark">March 31, 2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Fee Payment Deadline</h4>
                      <p className="text-neutral-dark">April 15, 2025</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-medium text-primary mb-2">Orientation Program</h4>
                      <p className="text-neutral-dark">June 5, 2025</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-medium">
                    Apply Online Now
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="requirements">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Admission Requirements</h2>
                
                <div className="mb-8">
                  <p className="text-neutral-dark mb-6">
                    To ensure a smooth admission process, please ensure you have all the required documents ready when submitting your application.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">Required Documents</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Completed application form</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Four passport-sized photographs of the student (recent)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Birth certificate (original and photocopy)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Aadhar card of the student (photocopy)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Report cards/Progress reports from the previous school (for Class II and above)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Transfer Certificate from the previous school (for Class II and above)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Residential proof (Electricity bill/Telephone bill/Rent agreement)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span>Passport-sized photographs of both parents (2 each)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">Age Requirements</h3>
                        <p className="text-neutral-dark mb-4">
                          The minimum age requirement as of April 1, 2025 for different classes are:
                        </p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex justify-between pb-2 border-b border-neutral-medium">
                            <span>Nursery</span>
                            <span className="font-medium">3+ years</span>
                          </li>
                          <li className="flex justify-between pb-2 border-b border-neutral-medium">
                            <span>LKG</span>
                            <span className="font-medium">4+ years</span>
                          </li>
                          <li className="flex justify-between pb-2 border-b border-neutral-medium">
                            <span>UKG</span>
                            <span className="font-medium">5+ years</span>
                          </li>
                          <li className="flex justify-between pb-2 border-b border-neutral-medium">
                            <span>Class I</span>
                            <span className="font-medium">6+ years</span>
                          </li>
                          <li className="flex justify-between">
                            <span>For higher classes</span>
                            <span className="font-medium">Age appropriate</span>
                          </li>
                        </ul>
                        <p className="text-sm text-neutral-dark">
                          Note: A 30-day relaxation in the minimum age requirement may be considered in exceptional cases.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">Downloadable Forms</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        <Download size={16} className="mr-2" />
                        Application Form
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Download size={16} className="mr-2" />
                        Medical Record Form
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Download size={16} className="mr-2" />
                        Transport Request Form
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Fee Structure (2025-26)</h2>
                
                <div className="mb-8">
                  <p className="text-neutral-dark mb-6">
                    At Vidya Bharati Academy, we strive to provide quality education at reasonable costs. Our fee structure is designed to be transparent and comprehensive.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">One-Time Fees</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="border px-4 py-2 text-left">Fee Type</th>
                            <th className="border px-4 py-2 text-right">Nursery to Class V</th>
                            <th className="border px-4 py-2 text-right">Class VI to VIII</th>
                            <th className="border px-4 py-2 text-right">Class IX to XII</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Registration Fee</td>
                            <td className="border px-4 py-2 text-right">₹1,000</td>
                            <td className="border px-4 py-2 text-right">₹1,000</td>
                            <td className="border px-4 py-2 text-right">₹1,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Admission Fee</td>
                            <td className="border px-4 py-2 text-right">₹25,000</td>
                            <td className="border px-4 py-2 text-right">₹30,000</td>
                            <td className="border px-4 py-2 text-right">₹35,000</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Security Deposit (Refundable)</td>
                            <td className="border px-4 py-2 text-right">₹10,000</td>
                            <td className="border px-4 py-2 text-right">₹10,000</td>
                            <td className="border px-4 py-2 text-right">₹10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">Annual Fees</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="border px-4 py-2 text-left">Fee Type</th>
                            <th className="border px-4 py-2 text-right">Nursery to Class V</th>
                            <th className="border px-4 py-2 text-right">Class VI to VIII</th>
                            <th className="border px-4 py-2 text-right">Class IX to XII</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Annual Development Fee</td>
                            <td className="border px-4 py-2 text-right">₹10,000</td>
                            <td className="border px-4 py-2 text-right">₹12,000</td>
                            <td className="border px-4 py-2 text-right">₹15,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Computer Lab Fee</td>
                            <td className="border px-4 py-2 text-right">₹4,000</td>
                            <td className="border px-4 py-2 text-right">₹5,000</td>
                            <td className="border px-4 py-2 text-right">₹6,000</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Science Lab Fee</td>
                            <td className="border px-4 py-2 text-right">N/A</td>
                            <td className="border px-4 py-2 text-right">₹5,000</td>
                            <td className="border px-4 py-2 text-right">₹7,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Sports & Activities Fee</td>
                            <td className="border px-4 py-2 text-right">₹3,000</td>
                            <td className="border px-4 py-2 text-right">₹4,000</td>
                            <td className="border px-4 py-2 text-right">₹5,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">Quarterly Tuition Fees</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="border px-4 py-2 text-left">Class</th>
                            <th className="border px-4 py-2 text-right">Quarterly Amount</th>
                            <th className="border px-4 py-2 text-right">Annual Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Nursery to KG</td>
                            <td className="border px-4 py-2 text-right">₹15,000</td>
                            <td className="border px-4 py-2 text-right">₹60,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Class I to V</td>
                            <td className="border px-4 py-2 text-right">₹17,500</td>
                            <td className="border px-4 py-2 text-right">₹70,000</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Class VI to VIII</td>
                            <td className="border px-4 py-2 text-right">₹20,000</td>
                            <td className="border px-4 py-2 text-right">₹80,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Class IX to X</td>
                            <td className="border px-4 py-2 text-right">₹22,500</td>
                            <td className="border px-4 py-2 text-right">₹90,000</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Class XI to XII (Science)</td>
                            <td className="border px-4 py-2 text-right">₹27,500</td>
                            <td className="border px-4 py-2 text-right">₹110,000</td>
                          </tr>
                          <tr className="bg-neutral-light">
                            <td className="border px-4 py-2">Class XI to XII (Commerce)</td>
                            <td className="border px-4 py-2 text-right">₹25,000</td>
                            <td className="border px-4 py-2 text-right">₹100,000</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border px-4 py-2">Class XI to XII (Humanities)</td>
                            <td className="border px-4 py-2 text-right">₹22,500</td>
                            <td className="border px-4 py-2 text-right">₹90,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-neutral-light p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-3">Payment Schedule & Methods</h3>
                    <p className="text-neutral-dark mb-3">
                      Tuition fees can be paid in quarterly installments according to the following schedule:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex justify-between pb-2 border-b border-neutral-medium">
                        <span>Quarter 1</span>
                        <span className="font-medium">April 1-15</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-neutral-medium">
                        <span>Quarter 2</span>
                        <span className="font-medium">July 1-15</span>
                      </li>
                      <li className="flex justify-between pb-2 border-b border-neutral-medium">
                        <span>Quarter 3</span>
                        <span className="font-medium">October 1-15</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Quarter 4</span>
                        <span className="font-medium">January 1-15</span>
                      </li>
                    </ul>
                    <p className="text-neutral-dark mb-3">
                      Acceptable payment methods include:
                    </p>
                    <ul className="space-y-1">
                      <li>• Online payment through the school portal</li>
                      <li>• NEFT/RTGS transfer</li>
                      <li>• Demand Draft in favor of "Vidya Bharati Academy"</li>
                      <li>• Cash payment at the school fee counter</li>
                    </ul>
                  </div>

                  <div className="text-neutral-dark">
                    <p className="mb-2">
                      <strong>Note:</strong> All fees are subject to review and may be revised annually. Any revisions will be communicated to parents well in advance.
                    </p>
                    <p>
                      For detailed information about scholarships, fee concessions, and sibling discounts, please contact the Admissions Office.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">
                      What is the admission process for new students?
                    </AccordionTrigger>
                    <AccordionContent>
                      The admission process involves four main steps: application submission, entrance assessment (for Class II and above), parent-student interview, and enrollment. Please refer to the Admission Process tab for detailed information about each step and important dates.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">
                      Is there an entrance test for all classes?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, students applying for Nursery to Class I undergo an informal interaction session instead of a formal entrance test. Students applying for Class II and above take an entrance assessment to evaluate their academic readiness for the appropriate grade level.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">
                      What curriculum does the school follow?
                    </AccordionTrigger>
                    <AccordionContent>
                      Vidya Bharati Academy follows the Central Board of Secondary Education (CBSE) curriculum. We enrich this with additional programs focused on holistic development, including language skills, performing arts, sports, and character education.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">
                      Does the school provide transportation services?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, the school provides transportation services through a fleet of school buses that cover most areas within the city. Transportation fees vary based on the distance from school. You can download the Transport Request Form from our website or collect it from the administrative office.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-medium">
                      Are there any scholarships available?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer merit scholarships to academically outstanding students and need-based financial aid for deserving students from economically weaker sections. Scholarship applications are reviewed by a dedicated committee, and decisions are based on academic performance, extracurricular achievements, and financial need.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-medium">
                      What are the school timings?
                    </AccordionTrigger>
                    <AccordionContent>
                      School timings vary by grade level:
                      <ul className="mt-2 space-y-1">
                        <li>• Nursery to Class II: 8:30 AM to 1:30 PM</li>
                        <li>• Class III to V: 8:00 AM to 2:30 PM</li>
                        <li>• Class VI to XII: 8:00 AM to 3:00 PM</li>
                      </ul>
                      The school operates Monday through Friday, with occasional Saturday sessions for co-curricular activities and special programs.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left font-medium">
                      What extracurricular activities are offered?
                    </AccordionTrigger>
                    <AccordionContent>
                      We offer a wide range of extracurricular activities including:
                      <ul className="mt-2 space-y-1">
                        <li>• Sports: Cricket, Basketball, Football, Badminton, Table Tennis, Chess, etc.</li>
                        <li>• Arts: Classical Dance, Music (Vocal and Instrumental), Drama, Drawing and Painting</li>
                        <li>• Clubs: Science Club, Coding Club, Robotics, Literary Club, Eco Club, etc.</li>
                        <li>• Leadership programs: Student Council, Model UN, Community Service</li>
                      </ul>
                      These activities are integrated into the school schedule, with some advanced training sessions held after school hours.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left font-medium">
                      Can I apply for mid-session admission?
                    </AccordionTrigger>
                    <AccordionContent>
                      Mid-session admissions are considered on a case-by-case basis, subject to seat availability and valid reasons for transfer (such as family relocation). The admission process remains similar, with additional requirements like a No Objection Certificate from the previous school.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left font-medium">
                      How can I check the status of my application?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can check your application status by logging into the parent portal using your registration credentials. Alternatively, you can contact our Admissions Office directly at admissions@vidyabharati.edu or call +91 98765 43210 during office hours (9:00 AM to 3:00 PM, Monday to Friday).
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-10">
                    <AccordionTrigger className="text-left font-medium">
                      Do you have special programs for gifted students?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we have enrichment programs for academically gifted students that provide advanced learning opportunities beyond the standard curriculum. These include specialized workshops, participation in national and international competitions, mentorship programs, and collaborative projects with educational institutions and industry partners.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="text-center">
                  <p className="text-neutral-dark mb-6">
                    If you have more questions or need further clarification, feel free to contact our Admissions Office.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Contact Admissions Office</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default Admissions;
