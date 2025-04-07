
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const seoFeatures = [
    "Comprehensive website SEO audit",
    "Competitor analysis",
    "Keyword research and strategy",
    "On-page SEO optimization",
    "Content optimization",
    "Technical SEO fixes",
    "Off-page SEO and link building",
    "Local SEO optimization",
    "Monthly reporting and analysis"
  ];

  const ppcFeatures = [
    "PPC account setup and optimization",
    "Keyword research and selection",
    "Ad copywriting and testing",
    "Landing page optimization",
    "Bid management strategy",
    "Google Ads campaign management",
    "Meta Ads (Facebook & Instagram) management",
    "Remarketing campaigns",
    "Conversion tracking and reporting"
  ];

  const contentFeatures = [
    "Content strategy development",
    "SEO-optimized blog posts",
    "Website copywriting",
    "Product descriptions",
    "Email marketing content",
    "Social media content",
    "Content calendar creation",
    "Content performance tracking",
    "Content updates and optimization"
  ];

  const socialFeatures = [
    "Social media audit and strategy",
    "Profile setup and optimization",
    "Content calendar creation",
    "Regular posting schedule",
    "Community engagement",
    "Paid social media campaigns",
    "Audience targeting",
    "Performance analytics",
    "Competitor monitoring"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Services Header */}
        <div className="bg-purple-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Our Digital Marketing Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Comprehensive digital marketing solutions tailored to help your business grow online and achieve measurable results.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <ServicesSection />

        {/* Detailed Service Descriptions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {/* SEO Service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">SEO Optimization</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our comprehensive SEO services are designed to improve your website's visibility in search engines, drive organic traffic, and increase your online presence. We use data-driven strategies to help you rank higher for relevant keywords.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seoFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Packages</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Starter SEO</h4>
                          <p className="text-gray-600 mb-2">For small businesses getting started with SEO</p>
                          <p className="text-2xl font-bold text-gray-900">$499<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">3-month minimum commitment</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Growth SEO</h4>
                          <p className="text-gray-600 mb-2">For businesses ready to expand their online presence</p>
                          <p className="text-2xl font-bold text-gray-900">$899<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">3-month minimum commitment</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Enterprise SEO</h4>
                          <p className="text-gray-600 mb-2">Comprehensive SEO for established businesses</p>
                          <p className="text-2xl font-bold text-gray-900">$1,499<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">6-month minimum commitment</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* PPC Service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-purple-50 p-8 rounded-lg">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">PPC Packages</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Basic PPC</h4>
                          <p className="text-gray-600 mb-2">For businesses new to paid advertising</p>
                          <p className="text-2xl font-bold text-gray-900">$599<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">+ Ad spend (min. $500 recommended)</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Advanced PPC</h4>
                          <p className="text-gray-600 mb-2">For businesses looking to scale their ads</p>
                          <p className="text-2xl font-bold text-gray-900">$999<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">+ Ad spend (min. $1,000 recommended)</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Multi-Platform PPC</h4>
                          <p className="text-gray-600 mb-2">Google, Meta, and LinkedIn campaigns</p>
                          <p className="text-2xl font-bold text-gray-900">$1,799<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">+ Ad spend (min. $2,000 recommended)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">PPC Management</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our PPC management services help you maximize your return on ad spend with expertly crafted campaigns on Google Ads and Meta Ads platforms. We focus on driving qualified traffic that converts into customers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ppcFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Writing Service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Writing</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our professional content writing services create engaging, SEO-optimized content that resonates with your audience and drives conversions. From blog posts to website copy, we craft content that tells your brand story.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contentFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Packages</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Essential Content</h4>
                          <p className="text-gray-600 mb-2">4 blog posts/month (1,000 words each)</p>
                          <p className="text-2xl font-bold text-gray-900">$349<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">Includes keyword research & optimization</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Business Content</h4>
                          <p className="text-gray-600 mb-2">8 blog posts/month (1,000 words each)</p>
                          <p className="text-2xl font-bold text-gray-900">$649<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">Includes content strategy & optimization</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Website Content</h4>
                          <p className="text-gray-600 mb-2">Full website copy (up to 10 pages)</p>
                          <p className="text-2xl font-bold text-gray-900">$1,299<span className="text-lg font-normal text-gray-600">/project</span></p>
                          <p className="text-gray-500 text-sm">One-time project fee, includes revisions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Media Service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-purple-50 p-8 rounded-lg">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Packages</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Basic Social</h4>
                          <p className="text-gray-600 mb-2">2 platforms, 12 posts/month</p>
                          <p className="text-2xl font-bold text-gray-900">$449<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">Community management included</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Growth Social</h4>
                          <p className="text-gray-600 mb-2">3 platforms, 20 posts/month</p>
                          <p className="text-2xl font-bold text-gray-900">$799<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">+ Basic ad management</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-purple-700">Premium Social</h4>
                          <p className="text-gray-600 mb-2">4 platforms, 30 posts/month</p>
                          <p className="text-2xl font-bold text-gray-900">$1,199<span className="text-lg font-normal text-gray-600">/month</span></p>
                          <p className="text-gray-500 text-sm">+ Advanced ad management & analytics</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Social Media Marketing</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Build your brand presence on social media platforms with our strategic content creation and community management services. We help you engage with your audience and drive traffic to your website.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {socialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />
        
        {/* Call to Action */}
        <CTASection />
        
        <Footer />
      </div>
    </div>
  );
};

export default Services;
