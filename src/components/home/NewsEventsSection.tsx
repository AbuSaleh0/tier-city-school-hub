
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Annual Day Celebration on December 15",
    date: "November 28, 2024",
    excerpt: "Join us for our grand Annual Day celebration featuring cultural performances, awards ceremony and more.",
    link: "/events/annual-day-2024"
  },
  {
    id: 2,
    title: "Science Exhibition Winners Announced",
    date: "November 20, 2024",
    excerpt: "Congratulations to all participants and winners of our Inter-School Science Exhibition held last week.",
    link: "/news/science-exhibition-winners"
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule",
    date: "November 15, 2024",
    excerpt: "The next Parent-Teacher Meeting will be held on December 5. Please check the schedule for timings.",
    link: "/news/ptm-december-2024"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "December 15, 2024",
    time: "4:00 PM - 8:00 PM",
    location: "School Auditorium"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "December 5, 2024",
    time: "9:00 AM - 2:00 PM",
    location: "Respective Classrooms"
  },
  {
    id: 3,
    title: "Inter-House Sports Competition",
    date: "December 10-12, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "School Grounds"
  },
  {
    id: 4,
    title: "Winter Vacation Begins",
    date: "December 24, 2024",
    time: "After School Hours",
    location: "N/A"
  }
];

const NewsEventsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* News Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Latest News</h2>
              <Link to="/news" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="space-y-6">
              {newsItems.map((item) => (
                <div key={item.id} className="border-b border-neutral-medium pb-6 last:border-0">
                  <Link to={item.link}>
                    <h3 className="text-lg font-semibold hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-sm text-neutral-dark mb-3">{item.date}</div>
                  <p className="text-neutral-dark mb-3">{item.excerpt}</p>
                  <Link 
                    to={item.link} 
                    className="text-primary hover:text-primary-light flex items-center text-sm font-medium"
                  >
                    Read More <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/news" className="w-full">View All News</Link>
              </Button>
            </div>
          </div>
          
          {/* Events Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Upcoming Events</h2>
              <Link to="/events" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                View Calendar <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="bg-neutral-light rounded-lg p-6">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-neutral-dark mb-1">
                      <CalendarIcon size={14} className="mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-neutral-dark mb-1">
                      <Clock size={14} className="mr-2" />
                      {event.time}
                    </div>
                    <div className="text-sm text-neutral-dark">
                      <strong>Venue:</strong> {event.location}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button asChild>
                  <Link to="/events" className="w-full">View All Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
