import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock, FiStar, FiShoppingCart } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// Kenyan food images
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
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [reservationGuests, setReservationGuests] = useState(2);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { 
      id: 1,
      name: "Nyama Choma Platter", 
      price: 1200, 
      description: "Tender roasted meat served with kachumbari and ugali", 
      category: "main",
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      spicy: true,
      popular: true
    },
    { 
      id: 2,
      name: "Ugali & Sukuma Wiki", 
      price: 450, 
      description: "Maize meal with braised collard greens and fried fish", 
      category: "main",
      image: 'https://images.unsplash.com/photo-1633945274419-a7c0d72b4715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      vegan: true
    },
    { 
      id: 3,
      name: "Pilau Feast", 
      price: 600, 
      description: "Aromatic rice dish with tender beef and spices", 
      category: "main",
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      popular: true
    },
    { 
      id: 4,
      name: "Chapati Combo", 
      price: 250, 
      description: "3 soft, flaky flatbreads with beans or vegetables", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1633945274309-9d9e0ea0a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      vegan: true
    },
    { 
      id: 5,
      name: "Mandazi Delight", 
      price: 150, 
      description: "6 pieces of sweet fried dough with coconut dip", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1633945274309-9d9e0ea0a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      popular: true
    },
    { 
      id: 6,
      name: "Samosa Trio", 
      price: 300, 
      description: "3 spiced pastries with beef, chicken or vegetable filling", 
      category: "snacks",
      image: 'https://images.unsplash.com/photo-1589302168068-964664a93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      spicy: true
    },
    { 
      id: 7,
      name: "Tusker Lager", 
      price: 300, 
      description: "Kenya's premium lager served chilled", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alcoholic: true
    },
    { 
      id: 8,
      name: "Dawa Cocktail", 
      price: 450, 
      description: "Vodka, honey, lime and sugar - Kenya's signature drink", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alcoholic: true,
      popular: true
    },
    { 
      id: 9,
      name: "Fresh Juice", 
      price: 200, 
      description: "Seasonal fruits blended to perfection", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      vegan: true
    },
    { 
      id: 10,
      name: "Ice Cream Sundae", 
      price: 350, 
      description: "Homemade vanilla or chocolate with fruit toppings", 
      category: "desserts",
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    { 
      id: 11,
      name: "Fruit Salad", 
      price: 350, 
      description: "Seasonal fruits with yogurt and honey drizzle", 
      category: "desserts",
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      vegan: true
    },
    { 
      id: 12,
      name: "Kenyan Coffee", 
      price: 200, 
      description: "Freshly brewed from Kenyan highlands", 
      category: "drinks",
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1633945274419-a7c0d72b4715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1589302168068-964664a93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
  ];

  const categories = ['all', 'main', 'snacks', 'drinks', 'desserts'];
  const filters = ['all', 'popular', 'spicy', 'vegan'];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const totalCartAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const specialOffers = [
    {
      title: "Nyama Choma Wednesday",
      description: "20% off all meat dishes every Wednesday",
      code: "NYAMA20",
      expires: "31/12/2025"
    },
    {
      title: "Family Feast",
      description: "Buy 3 main dishes, get 1 dessert free",
      code: "FAMILYFEAST",
      expires: "30/11/2025"
    },
    {
      title: "Happy Hour",
      description: "50% off all drinks 4-6pm daily",
      code: "HAPPYHOUR",
      expires: "Ongoing"
    }
  ];

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
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-800 font-bold text-xl">KD</span>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Kenyan Delights
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {['menu', 'gallery', 'offers', 'about', 'contact'].map((item) => (
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
            <motion.button
              className="relative text-white text-2xl ml-4"
              onClick={() => setIsCartOpen(!isCartOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-green-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </motion.button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              className="relative text-white text-2xl mr-4"
              onClick={() => setIsCartOpen(!isCartOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-green-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </motion.button>
            <motion.button 
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
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
                {['menu', 'gallery', 'offers', 'about', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-white capitalize py-2"
                    onClick={() => {
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

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl z-50 p-6 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
                <motion.button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Menu
                </motion.button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <motion.div 
                      key={`${item.id}-${index}`}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">KSh {item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiX />
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>KSh {totalCartAmount}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg mb-3"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Proceed to Checkout
                </motion.button>
                
                <button 
                  className="w-full text-green-600 font-medium py-2"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#menu"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.a>
            <motion.a
              href="#reservation"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.a>
          </div>
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
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search menu items..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
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
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No items found matching your search</h3>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-green-600 font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image || foodImages[item.category] || foodImages.pizza} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {item.popular && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                          <FiStar className="mr-1" size={12} />
                          Popular
                        </div>
                      )}
                      {item.spicy && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Spicy
                        </div>
                      )}
                      {item.vegan && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Vegan
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                          KSh {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                      <motion.button
                        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => addToCart(item)}
                      >
                        <FiShoppingCart className="mr-2" />
                        Add to Order
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Food Gallery */}
        <section id="gallery" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Food Gallery
            </motion.h2>
            
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === activeGalleryImage ? 1 : 0,
                    scale: index === activeGalleryImage ? 1 : 1.05
                  }}
                  transition={{ duration: 1 }}
                />
              ))}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGalleryImage(index)}
                    className={`w-3 h-3 rounded-full ${index === activeGalleryImage ? 'bg-yellow-500' : 'bg-white bg-opacity-50'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveGalleryImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section id="offers" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Special Offers
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{offer.title}</h3>
                    <div className="bg-yellow-500 text-green-900 font-bold text-xs px-2 py-1 rounded">
                      {offer.expires}
                    </div>
                  </div>
                  <p className="mb-4">{offer.description}</p>
                  <div className="bg-black bg-opacity-20 p-3 rounded-lg">
                    <p className="text-sm font-mono">Use code: <span className="font-bold">{offer.code}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-green-700 text-white p-8 md:p-12 flex flex-col justify-center">
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Book a Table
                  </motion.h2>
                  <motion.p 
                    className="mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Reserve your table online and enjoy a seamless dining experience.
                  </motion.p>
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center">
                      <FiPhone className="mr-3 text-yellow-400" />
                      <span>+254 712 345 678</span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="mr-3 text-yellow-400" />
                      <span>reservations@kenyandelights.co.ke</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                  <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Date</label>
                        <input 
                          type="date" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          value={reservationDate}
                          onChange={(e) => setReservationDate(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Time</label>
                        <input 
                          type="time" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          value={reservationTime}
                          onChange={(e) => setReservationTime(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Number of Guests</label>
                      <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        value={reservationGuests}
                        onChange={(e) => setReservationGuests(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                        <option value="9+">9+ people</option>
                      </select>
                    </div>
                    
                    <motion.button
                      type="button"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => alert('Table reservation submitted (demo)')}
                    >
                      Reserve Now
                    </motion.button>
                  </motion.form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
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
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-green-700">Local Ingredients</h4>
                    <p className="text-sm text-gray-600">Sourced from Kenyan farms</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
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
        <section className="py-16 bg-gray-100">
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
                  rating: 5,
                  location: "Nairobi"
                },
                {
                  quote: "Authentic Kenyan flavors with excellent service. The ugali is perfect!",
                  author: "Wanjiru Kariuki",
                  rating: 5,
                  location: "Mombasa"
                },
                {
                  quote: "Their Dawa cocktail is legendary! Great atmosphere too.",
                  author: "David Omondi",
                  rating: 5,
                  location: "Kisumu"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
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
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
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
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                
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
                      <p>+254 712 345 678</p>
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

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-yellow-300"
                      whileHover={{ y: -3 }}
                    >
                      <FaFacebook size={24} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-yellow-300"
                      whileHover={{ y: -3 }}
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-yellow-300"
                      whileHover={{ y: -3 }}
                    >
                      <FaTwitter size={24} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-yellow-300"
                      whileHover={{ y: -3 }}
                    >
                      <FaWhatsapp size={24} />
                    </motion.a>
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
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Subject"
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
                    type="button"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert('Message sent (demo)')}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808722618234!2d36.82154831475399!3d-1.286899835980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5b3c9%3A0x4a0c81f1f4a0c81f!2sMoi%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Restaurant Location"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Kenyan Delights</h3>
              <p className="text-green-200">Authentic Kenyan Cuisine since 2005</p>
              <div className="flex space-x-4 mt-4">
                {[FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-white hover:text-yellow-300"
                    whileHover={{ y: -3 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Menu', 'Gallery', 'Offers', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-yellow-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li>123 Moi Avenue, Nairobi</li>
                <li>+254 712 345 678</li>
                <li>info@kenyandelights.co.ke</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="mb-2 text-green-200">Subscribe for updates and offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 text-gray-800 rounded-l-md w-full focus:outline-none"
                />
                <motion.button
                  className="bg-yellow-500 text-green-900 px-4 py-2 rounded-r-md font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </motion.button>
              </div>
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