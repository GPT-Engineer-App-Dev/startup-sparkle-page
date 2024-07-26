import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

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
                <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and take your productivity to the next level.</p>
          <Button size="lg" variant="secondary">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
