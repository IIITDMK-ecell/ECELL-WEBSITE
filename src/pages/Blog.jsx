import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './nav.jsx';
import Footer from './Footer.jsx';
import '../styles/Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  
  // Sample blog data - you can expand this or integrate with a CMS later
  const [blogs] = useState([
    {
      id: 1,
      title: "The Startup Mindset: 5 Essential Traits Every Entrepreneur Needs",
      excerpt: "Discover the core mindset shifts that separate successful entrepreneurs from the rest. Learn how to cultivate resilience, embrace failure, and think like a true innovator.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 4, 2024",
      readTime: "5 min read",
      category: "Entrepreneurship",
      image: "/assets/images/blog-startup-mindset.jpg",
      featured: true,
      content: `
        <h2>Introduction</h2>
        <p>In the fast-paced world of entrepreneurship, success isn't just about having a great idea. It's about developing the right mindset that can navigate the challenges, uncertainties, and opportunities that come with building something from scratch.</p>
        
        <h2>1. Embrace Failure as a Learning Tool</h2>
        <p>The most successful entrepreneurs understand that failure isn't the opposite of success—it's a stepping stone to it. Every failure provides valuable lessons that can't be learned in any classroom.</p>
        
        <blockquote>"Failure is simply the opportunity to begin again, this time more intelligently." - Henry Ford</blockquote>
        
        <h2>2. Cultivate Resilience</h2>
        <p>Entrepreneurship is a marathon, not a sprint. The ability to bounce back from setbacks, maintain focus during tough times, and persist when others give up is what separates successful entrepreneurs from those who quit.</p>
        
        <h2>3. Think Customer-First</h2>
        <p>Great entrepreneurs don't just solve problems they think are important—they solve problems that customers actually care about. This customer-centric approach ensures that your solutions have real market demand.</p>
        
        <h2>4. Embrace Continuous Learning</h2>
        <p>The business landscape is constantly evolving. Successful entrepreneurs are lifelong learners who stay curious, adapt to new technologies, and continuously upgrade their skills.</p>
        
        <h2>5. Take Calculated Risks</h2>
        <p>Entrepreneurship isn't about taking blind risks—it's about taking calculated ones. Successful entrepreneurs assess opportunities, minimize downside risks, and make informed decisions even with incomplete information.</p>
        
        <h2>Conclusion</h2>
        <p>Developing an entrepreneurial mindset is a journey, not a destination. By embracing these five traits, you'll be better equipped to navigate the challenging but rewarding path of entrepreneurship. Remember, every successful entrepreneur started exactly where you are now.</p>
      `
    },
    {
      id: 2,
      title: "From Idea to IPO: Understanding the Startup Funding Journey",
      excerpt: "Navigate the complex world of startup funding from pre-seed to IPO. Learn about different funding stages, what investors look for, and how to prepare your startup for investment.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 28, 2024",
      readTime: "8 min read",
      category: "Funding",
      image: "/assets/images/blog-funding-journey.jpg",
      featured: false,
      content: `
        <h2>Introduction</h2>
        <p>Understanding the funding landscape is crucial for any entrepreneur looking to scale their startup. This comprehensive guide walks you through each stage of the funding journey.</p>
        
        <h2>Pre-Seed and Seed Funding</h2>
        <p>The early stages of funding focus on proving your concept and building your MVP. Angels and early-stage VCs look for strong teams and market opportunity.</p>
        
        <h2>Series A and Beyond</h2>
        <p>As your startup grows, later funding rounds focus on scaling operations, expanding markets, and achieving profitability milestones.</p>
      `
    },
    {
      id: 3,
      title: "Building a Strong Team: The Foundation of Every Successful Startup",
      excerpt: "Learn how to attract, hire, and retain top talent for your startup. Discover the key roles you need to fill and strategies for building a cohesive, high-performing team.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 21, 2024",
      readTime: "6 min read",
      category: "Team Building",
      image: "/assets/images/blog-team-building.jpg",
      featured: false,
      content: `
        <h2>Introduction</h2>
        <p>Behind every successful startup is a strong, dedicated team. Building the right team is often the difference between success and failure in the startup world.</p>
        
        <h2>Identifying Key Roles</h2>
        <p>Start by identifying the critical roles needed for your startup's success. Focus on hiring for skills gaps that are essential for your immediate goals.</p>
        
        <h2>Creating a Strong Culture</h2>
        <p>Company culture isn't just about perks—it's about creating an environment where talented people can do their best work and grow together.</p>
      `
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Entrepreneurship', 'Funding', 'Team Building', 'Innovation', 'Success Stories'];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlog = blogs.find(blog => blog.featured);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blog-page">
      <Nav />
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>E-Cell Blog</h1>
          <p>Insights, stories, and wisdom from the entrepreneurial journey</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{blogs.length}</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Readers</span>
            </div>
            <div className="stat">
              <span className="stat-number">Weekly</span>
              <span className="stat-label">Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="featured-blog-section">
          <div className="container">
            <h2 className="section-title">Featured Article</h2>
            <div className="featured-blog" onClick={() => handleBlogClick(featuredBlog.id)}>
              <div className="featured-blog-image">
                <div className="blog-image-placeholder">
                  <span>📚</span>
                </div>
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-blog-content">
                <div className="blog-meta">
                  <span className="category">{featuredBlog.category}</span>
                  <span className="date">{featuredBlog.date}</span>
                  <span className="read-time">{featuredBlog.readTime}</span>
                </div>
                <h3>{featuredBlog.title}</h3>
                <p>{featuredBlog.excerpt}</p>
                <div className="author-info">
                  <span>By {featuredBlog.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {filteredBlogs.filter(blog => !blog.featured).map(blog => (
              <article key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog.id)}>
                <div className="blog-card-image">
                  <div className="blog-image-placeholder">
                    <span>📰</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="category">{blog.category}</span>
                    <span className="read-time">{blog.readTime}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-footer">
                    <span className="date">{blog.date}</span>
                    <span className="read-more">Read More →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;