import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from './nav.jsx';
import Footer from './Footer.jsx';
import '../styles/Blog.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [activeSection, setActiveSection] = useState('');

  // Function to handle smooth scrolling to sections
  const handleTocClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 100;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
    }
  };

  // Set up intersection observer to track which section is in view
  useEffect(() => {
    if (!blog || !blog.tableOfContents) return;

    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections based on the current blog's table of contents
    const sectionIds = blog.tableOfContents.map(item => `#${item.id}`).join(', ');
    const headings = document.querySelectorAll(sectionIds);
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [blog]);

  // Sample blog data
  const blogs = [
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
      content: `<h2 id="introduction">Introduction</h2><p>In the fast-paced world of entrepreneurship, success isn't just about having a great idea. It's about developing the right mindset that can navigate the challenges, uncertainties, and opportunities that come with building something from scratch.</p><h2 id="embrace-failure">1. Embrace Failure as a Learning Tool</h2><p>The most successful entrepreneurs understand that failure isn't the opposite of success—it's a stepping stone to it. Every failure provides valuable lessons that can't be learned in any classroom.</p><h2 id="cultivate-resilience">2. Cultivate Resilience</h2><p>Entrepreneurship is a marathon, not a sprint. The ability to bounce back from setbacks, maintain focus during tough times, and persist when others give up is what separates successful entrepreneurs from those who quit.</p><h2 id="think-customer-first">3. Think Customer-First</h2><p>Great entrepreneurs don't just solve problems they think are important—they solve problems that customers actually care about. This customer-centric approach ensures that your solutions have real market demand.</p><h2 id="embrace-continuous">4. Embrace Continuous Learning</h2><p>The business landscape is constantly evolving. Successful entrepreneurs are lifelong learners who stay curious, adapt to new technologies, and continuously upgrade their skills.</p><h2 id="take-calculated">5. Take Calculated Risks</h2><p>Entrepreneurship isn't about taking blind risks—it's about taking calculated ones. Successful entrepreneurs assess opportunities, minimize downside risks, and make informed decisions even with incomplete information.</p><h2 id="conclusion">Conclusion</h2><p>Developing an entrepreneurial mindset is a journey, not a destination. By embracing these five traits, you'll be better equipped to navigate the challenging but rewarding path of entrepreneurship. Remember, every successful entrepreneur started exactly where you are now.</p>`,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'embrace-failure', title: '1. Embrace Failure' },
        { id: 'cultivate-resilience', title: '2. Cultivate Resilience' },
        { id: 'think-customer-first', title: '3. Think Customer-First' },
        { id: 'embrace-continuous', title: '4. Continuous Learning' },
        { id: 'take-calculated', title: '5. Calculated Risks' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
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
      content: `<h2 id="introduction">Introduction</h2><p>Understanding the funding landscape is crucial for any entrepreneur looking to scale their startup. This comprehensive guide walks you through each stage of the funding journey.</p><h2 id="pre-seed-funding">Pre-Seed and Seed Funding</h2><p>The early stages of funding focus on proving your concept and building your MVP. Angels and early-stage VCs look for strong teams and market opportunity.</p><h2 id="series-funding">Series A and Beyond</h2><p>As your startup grows, later funding rounds focus on scaling operations, expanding markets, and achieving profitability milestones.</p><h2 id="ipo-journey">The IPO Journey</h2><p>Going public is the ultimate goal for many startups. Learn about the requirements, process, and considerations for taking your company public.</p><h2 id="conclusion">Conclusion</h2><p>The funding journey is complex but understanding each stage helps you prepare better and make informed decisions for your startup's future.</p>`,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'pre-seed-funding', title: 'Pre-Seed and Seed Funding' },
        { id: 'series-funding', title: 'Series A and Beyond' },
        { id: 'ipo-journey', title: 'The IPO Journey' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
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
      content: `<h2 id="introduction">Introduction</h2><p>Behind every successful startup is a strong, dedicated team. Building the right team is often the difference between success and failure in the startup world.</p><h2 id="key-roles">Identifying Key Roles</h2><p>Start by identifying the critical roles needed for your startup's success. Focus on hiring for skills gaps that are essential for your immediate goals.</p><h2 id="strong-culture">Creating a Strong Culture</h2><p>Company culture isn't just about perks—it's about creating an environment where talented people can do their best work and grow together.</p><h2 id="hiring-process">Effective Hiring Process</h2><p>Develop a structured hiring process that helps you identify not just skills, but also cultural fit and growth potential.</p><h2 id="conclusion">Conclusion</h2><p>Building a strong team takes time and effort, but it's the foundation that will determine your startup's long-term success.</p>`,
      tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'key-roles', title: 'Identifying Key Roles' },
        { id: 'strong-culture', title: 'Creating a Strong Culture' },
        { id: 'hiring-process', title: 'Effective Hiring Process' },
        { id: 'conclusion', title: 'Conclusion' }
      ]
    }
  ];

  useEffect(() => {
    const foundBlog = blogs.find(b => b.id === parseInt(id));
    setBlog(foundBlog);
    
    if (foundBlog) {
      const related = blogs
        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-page">
        <Nav />
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Blog post not found</h2>
          <button onClick={() => navigate('/blog')} className="btn-primary">
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Nav />
      
      <article className="blog-post">
        <header className="blog-post-header">
          <div className="container">
            <div className="blog-breadcrumb">
              <span onClick={() => navigate('/blog')} className="breadcrumb-link">Blog</span>
              <span className="breadcrumb-separator">→</span>
              <span className="breadcrumb-current">{blog.category}</span>
            </div>
            
            <div className="blog-post-meta">
              <span className="category">{blog.category}</span>
              <span className="date">{blog.date}</span>
              <span className="read-time">{blog.readTime}</span>
            </div>
            
            <h1 className="blog-post-title">{blog.title}</h1>
            <p className="blog-post-excerpt">{blog.excerpt}</p>
            
            <div className="blog-post-author">
              <div className="author-info">
                <span className="author-name">By {blog.author}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="blog-post-content">
          <div className="container">
            <div className="blog-content-wrapper">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {blog.tableOfContents && blog.tableOfContents.length > 0 && (
                <aside className="blog-sidebar">
                  <div className="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul>
                      {blog.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a 
                            onClick={() => handleTocClick(item.id)} 
                            className={activeSection === item.id ? 'active' : ''} 
                            role="button"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        {relatedBlogs.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h3>Related Articles</h3>
              <div className="related-posts-grid">
                {relatedBlogs.map(relatedBlog => (
                  <div 
                    key={relatedBlog.id} 
                    className="related-post-card"
                    onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                  >
                    <div className="related-post-image">
                      <div className="blog-image-placeholder">
                        <span>📖</span>
                      </div>
                    </div>
                    <div className="related-post-content">
                      <span className="category">{relatedBlog.category}</span>
                      <h4>{relatedBlog.title}</h4>
                      <p>{relatedBlog.excerpt.substring(0, 100)}...</p>
                      <span className="read-time">{relatedBlog.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;