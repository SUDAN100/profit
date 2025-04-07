
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BlogPreviewSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover the most effective SEO techniques that are driving real results for businesses this year.',
      author: 'Maya Johnson',
      date: 'April 2, 2025',
      category: 'SEO',
      imageUrl: '/lovable-uploads/71e68298-e6dc-4e59-bf46-c0e5df224255.png',
    },
    {
      id: 2,
      title: 'How to Create PPC Campaigns That Convert',
      excerpt: 'Learn the step-by-step process for creating high-converting PPC campaigns across Google and Meta platforms.',
      author: 'Alex Chen',
      date: 'March 28, 2025',
      category: 'PPC',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      title: 'Content Marketing Trends to Watch This Year',
      excerpt: 'Stay ahead of the curve with these emerging content marketing trends that are reshaping the digital landscape.',
      author: 'Sarah Williams',
      date: 'March 15, 2025',
      category: 'Content',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Marketing Insights
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Actionable tips and strategies to improve your digital marketing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm text-purple-600 font-medium mb-1">{post.category}</div>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-3">{post.excerpt}</CardDescription>
                <div className="text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/blog" className="text-purple-700 font-medium hover:text-purple-800 transition-colors duration-300">
                  Read More →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" className="border-2 border-purple-700 text-purple-700 hover:bg-purple-50 font-medium py-2 px-6">
              View All Blog Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
