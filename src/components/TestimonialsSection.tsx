
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "WebGrowthPro transformed our online presence. Our organic traffic increased by 187% in just 4 months, and our conversion rate doubled. Highly recommended!",
      author: "Sarah Johnson",
      position: "Marketing Director, TechStart Inc."
    },
    {
      id: 2,
      content: "The PPC campaigns they set up for our e-commerce store generated a 320% ROI in the first quarter. Their data-driven approach really works.",
      author: "Michael Chen",
      position: "E-commerce Manager, StyleShop"
    },
    {
      id: 3,
      content: "Their content strategy completely revitalized our blog. We're now ranking for over 50 high-value keywords, and our email sign-ups have increased 5x.",
      author: "Amanda Torres",
      position: "Content Manager, LearnSpace"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
