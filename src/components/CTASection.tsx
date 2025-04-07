
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-purple-100 mx-auto">
            Get a free consultation and discover how our digital marketing services can help you achieve your business goals.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-3 px-8 rounded-md text-lg">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
