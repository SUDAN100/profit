
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart, FileText, Globe } from "lucide-react";
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "SEO Optimization",
      description: "Improve your search rankings with our comprehensive on-page and off-page SEO services including keyword research and content optimization.",
      icon: <Search className="h-8 w-8 text-purple-700" />,
      buttonText: "Boost Rankings",
      price: "Starting at $499/mo"
    },
    {
      id: 2,
      title: "PPC Management",
      description: "Drive immediate traffic and leads with expertly managed Google Ads and Meta Ads campaigns with A/B testing and conversion optimization.",
      icon: <BarChart className="h-8 w-8 text-purple-700" />,
      buttonText: "Get Traffic Now",
      price: "Starting at $599/mo"
    },
    {
      id: 3,
      title: "Content Writing",
      description: "Engage your audience with SEO-optimized blog posts, website content, and copywriting that converts visitors into customers.",
      icon: <FileText className="h-8 w-8 text-purple-700" />,
      buttonText: "Create Content",
      price: "Starting at $349/mo"
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Build your brand presence on Facebook, Instagram, LinkedIn and Twitter with strategic content and paid advertising campaigns.",
      icon: <Globe className="h-8 w-8 text-purple-700" />,
      buttonText: "Grow Following",
      price: "Starting at $449/mo"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Digital Marketing Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            High-converting strategies to boost your online presence and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[100px]">{service.description}</CardDescription>
                <p className="text-purple-700 font-medium mt-4">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 transition-colors duration-300">
                  {service.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
