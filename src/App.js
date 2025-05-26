import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

// Kenyan food images from Unsplash
const foodImages = {
  pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80',
  snacks: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80',
  drinks: 'https://images.unsplash.com/photo-1551023408-9c4ed8d25a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  main: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80'
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: "Nyama Choma", 
      price: "KSh 1200", 
      description: "Tender roasted meat served with kachumbari", 
      category: "main",
      image: 'https://images.unsplash.com/photo-1604908812529-36a6a6f17fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Ugali & Sukuma Wiki", 
      price: "KSh 450", 
      description: "Maize meal with braised collard greens", 
      category: "main",
      image: 'https://images.unsplash.com/photo-1633945274419-a7c0d72b4715?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
    },
    { 
      name: "Pilau", 
      price: "KSh 600", 
      description: "Aromatic rice dish with tender meat", 
      category: "main",
      image: ''
    },
    { 
      name: "Chapati", 
      price: "KSh 100", 
      description: "Soft, flaky flatbread", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1633945274309-9d9e0ea0a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Mandazi", 
      price: "KSh 50", 
      description: "Sweet fried dough", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1633945274309-9d9e0ea0a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Samosa", 
      price: "KSh 80", 
      description: "Spiced pastry with meat or vegetable filling", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Tusker Beer", 
      price: "KSh 300", 
      description: "Kenya's premium lager", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Dawa Cocktail", 
      price: "KSh 450", 
      description: "Vodka, honey, lime and sugar", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    { 
      name: "Fresh Juice", 
      price: "KSh 200", 
      description: "Seasonal fruits blended to perfection", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    { 
      name: "Ice Cream", 
      price: "KSh 250", 
      description: "Homemade vanilla or chocolate", 
      category: "desserts",
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    { 
      name: "Fruit Salad", 
      price: "KSh 350", 
      description: "Seasonal fruits with yogurt", 
      category: "desserts",
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <motion.header 
        className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-green-900 shadow-lg' : 'bg-green-700'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto p-4 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Kenyan Delights
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['menu', 'about', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`text-white capitalize hover:text-yellow-300 transition-colors ${activeCategory === item ? 'text-yellow-300 font-semibold' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-green-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto p-4 flex flex-col space-y-3">
                {['menu', 'about', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-white capitalize py-2"
                    onClick={() => {
                      setActiveCategory(item);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-green-700 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Taste of Kenya
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Authentic Kenyan cuisine with fresh local ingredients
          </motion.p>
          <motion.a
            href="#menu"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
          >
            View Menu
          </motion.a>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Main content */}
      <main className="flex-grow pt-20 pb-10">
        {/* Menu Section */}
        <section id="menu" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Menu
            </motion.h2>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <div className="inline-flex rounded-md shadow-sm space-x-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 text-sm font-medium rounded-md capitalize whitespace-nowrap ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-white text-green-600 hover:bg-green-50 border border-green-200'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems
                .filter(item => activeCategory === 'all' || item.category === activeCategory)
                .map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image || foodImages[item.category] || foodImages.pizza} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                      <motion.button
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add to Order
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Kenyan Heritage</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in Nairobi in 2005, Kenyan Delights celebrates the rich culinary traditions of Kenya. Our chefs combine traditional recipes with modern techniques to create unforgettable dining experiences.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We source our ingredients from local farmers and markets, supporting Kenyan agriculture while bringing you the freshest flavors.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-700">Local Ingredients</h4>
                    <p className="text-sm text-gray-600">Sourced from Kenyan farms</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-700">Traditional Recipes</h4>
                    <p className="text-sm text-gray-600">Authentic Kenyan flavors</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Kenyan cuisine" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Customers Say
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The Nyama Choma here reminds me of home. Best I've had in the city!",
                  author: "James Mwangi",
                  rating: 5
                },
                {
                  quote: "Authentic Kenyan flavors with excellent service. The ugali is perfect!",
                  author: "Wanjiru Kariuki",
                  rating: 5
                },
                {
                  quote: "Their Dawa cocktail is legendary! Great atmosphere too.",
                  author: "David Omondi",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Visit Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMapPin className="text-yellow-400 mt-1 mr-3 text-xl" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p>123 Moi Avenue, Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiPhone className="text-yellow-400 mt-1 mr-3 text-xl" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p>+254 115 735 292</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiMail className="text-yellow-400 mt-1 mr-3 text-xl" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>info@kenyandelights.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiClock className="text-yellow-400 mt-1 mr-3 text-xl" />
                    <div>
                      <h4 className="font-semibold">Hours</h4>
                      <p>Monday - Friday: 10am - 10pm</p>
                      <p>Saturday - Sunday: 9am - 11pm</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.form
                className="bg-white p-6 rounded-lg shadow-lg text-gray-800"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">Kenyan Delights</h3>
              <p className="text-green-200">Authentic Kenyan Cuisine</p>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 mt-6 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-white hover:text-yellow-300 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-green-800 mt-8 pt-6 text-center text-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Kenyan Delights. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;