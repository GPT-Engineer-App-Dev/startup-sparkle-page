import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const customerLogos = [
  { name: "Company A", logo: "/placeholder.svg" },
  { name: "Company B", logo: "/placeholder.svg" },
  { name: "Company C", logo: "/placeholder.svg" },
  { name: "Company D", logo: "/placeholder.svg" },
  { name: "Company E", logo: "/placeholder.svg" },
  { name: "Company F", logo: "/placeholder.svg" },
  { name: "Company G", logo: "/placeholder.svg" },
  { name: "Company H", logo: "/placeholder.svg" },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Intuitive Interface", description: "Easy-to-use platform that requires no learning curve." },
              { title: "Advanced Analytics", description: "Gain valuable insights with our powerful analytics tools." },
              { title: "24/7 Support", description: "Our dedicated team is always here to help you succeed." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {customerLogos.map((customer, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={customer.logo} alt={customer.name} className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={[
            { name: "John Doe", role: "CEO, TechCorp", content: "This platform has transformed the way we work. Highly recommended!", image: "/placeholder.svg" },
            { name: "Jane Smith", role: "Freelancer", content: "I've tried many tools, but this one stands out. It's a game-changer!", image: "/placeholder.svg" },
            { name: "Mike Johnson", role: "Project Manager", content: "The features and support are unparalleled. It's been a fantastic experience.", image: "/placeholder.svg" },
            { name: "Sarah Lee", role: "Marketing Director", content: "Our team's productivity has skyrocketed since we started using this platform.", image: "/placeholder.svg" },
          ]} />
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-pink-400 text-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and take your productivity to the next level.</p>
          <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-pink-600">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
