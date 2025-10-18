import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './nav.jsx';
import Footer from './Footer.jsx';
import '../styles/Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  
  // E-Cell IIITDM Blog Data
  const [blogs] = useState([
    {
      id: 1,
      title: "The Myth of a Perfect Idea",
      excerpt: "Every student dreams of finding that perfect startup idea. But here's the truth: that moment doesn't exist. Learn why execution beats the perfect idea every single time.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 25, 2025",
      readTime: "8 min read",
      category: "Entrepreneurship",
      image: "/assets/images/blog-perfect-idea.jpg",
      featured: true,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 2,
      title: "California Burrito: Selling Burritos in a Land of Biryani",
      excerpt: "How do you convince millions of people to try—and love—a product they don't even understand? Learn how California Burrito made Mexican food a sensation in South India.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 25, 2025",
      readTime: "10 min read",
      category: "Success Stories",
      image: "/assets/images/blog-california-burrito.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 3,
      title: "Urban Company: Building Trust in the Chaos",
      excerpt: "How do you bring order, safety, and trust to a completely unorganized industry? Discover how Urban Company became a trust-building machine in India's local services sector.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 26, 2025",
      readTime: "9 min read",
      category: "Success Stories",
      image: "/assets/images/blog-urban-company.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 4,
      title: "Phool.co: Turning Temple Waste into Treasure",
      excerpt: "From sacred flowers polluting the Ganges to sustainable leather alternatives—discover how Phool.co built a biotech startup from literal trash.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 27, 2025",
      readTime: "9 min read",
      category: "Success Stories",
      image: "/assets/images/blog-phool.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 5,
      title: "CRED: Making Bill Payments Feel Like a Privilege",
      excerpt: "How do you turn a boring chore into an exclusive experience? Learn how CRED built a multi-billion dollar brand by rewarding India's most responsible financial citizens.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 28, 2025",
      readTime: "8 min read",
      category: "Success Stories",
      image: "/assets/images/blog-cred.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 6,
      title: "Rebel Foods: The Invisible Food Empire",
      excerpt: "How do you serve every possible food mood from a single invisible location? Discover how Rebel Foods built a multi-billion dollar empire you've probably ordered from without realizing.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 29, 2025",
      readTime: "10 min read",
      category: "Success Stories",
      image: "/assets/images/blog-rebel-foods.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 7,
      title: "Hustle vs. Burnout: Why Smart Work Wins",
      excerpt: "We live in a world obsessed with hustle. But constant grind doesn't make you successful—it makes you exhausted. Learn why smart work beats hard work every time.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "September 30, 2025",
      readTime: "7 min read",
      category: "Entrepreneurship",
      image: "/assets/images/blog-hustle-burnout.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 8,
      title: "Why 'Copying' Isn't Always Bad in Startups",
      excerpt: "Most successful startups didn't start from scratch—they started by copying something that already existed. Learn how smart copying becomes strategic innovation.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 2, 2025",
      readTime: "7 min read",
      category: "Entrepreneurship",
      image: "/assets/images/blog-copying.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 9,
      title: "How Good Is Your Problem Statement?",
      excerpt: "Every successful venture begins with a deep understanding of a painful problem. Learn how to craft a problem statement that becomes the foundation of your entire startup.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 4, 2025",
      readTime: "8 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-problem-statement.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 10,
      title: "Who Do You Need & What Resources Do You Need?",
      excerpt: "A startup is a team sport. Discover the three core archetypes every founding team needs and how to assemble the right people and resources for success.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 6, 2025",
      readTime: "7 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-team-resources.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 11,
      title: "How to Brainstorm and Choose Your Solution?",
      excerpt: "Learn the art of expansive brainstorming and ruthless decision-making. Generate hundreds of ideas and then choose the one that will survive and thrive.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 8, 2025",
      readTime: "8 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-brainstorm.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 12,
      title: "How to Build Your MVP (Minimum Viable Product)?",
      excerpt: "The magic is in 'Viable.' Learn how to build the smallest possible version of your product that successfully delivers core value and validates your biggest assumption.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 10, 2025",
      readTime: "9 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-mvp.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 13,
      title: "How to Test, Get Feedback & Iterate?",
      excerpt: "An MVP that isn't seen by users is worthless. Master the Build-Measure-Learn loop and turn user feedback into your product roadmap.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 12, 2025",
      readTime: "8 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-feedback.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 14,
      title: "How to Validate Market & Demand?",
      excerpt: "A great product that no one wants is useless. Learn quick, clever techniques to test market demand and prove people will actually pay for your solution.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 14, 2025",
      readTime: "8 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-market-validation.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 15,
      title: "How to Present Your Demo or Pitch?",
      excerpt: "A mediocre project with a brilliant pitch beats a brilliant project with a mediocre pitch. Master the art of storytelling and deliver a pitch that wins.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 16, 2025",
      readTime: "7 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-pitch.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    },
    {
      id: 16,
      title: "How to Launch, Grow & Scale Your Startup?",
      excerpt: "The competition was just the starting line. Learn how to convert hackathon momentum into a real, sustainable business that grows and scales.",
      author: "E-Cell IIITDM Kancheepuram",
      date: "October 18, 2025",
      readTime: "10 min read",
      category: "Startup Guide",
      image: "/assets/images/blog-launch-scale.jpg",
      featured: false,
      content: `Complete content will be in BlogPost.jsx`
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Entrepreneurship', 'Success Stories', 'Startup Guide'];

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