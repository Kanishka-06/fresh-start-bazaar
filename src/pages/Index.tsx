import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Heart, Users, MapPin, Utensils, Bed, Laptop, Coffee, Wifi, Sofa, Star, TrendingUp, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { CategoryCard } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedLoader } from '@/components/AnimatedLoader';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { title: 'Kitchen Items', icon: Utensils, count: 156, color: 'from-orange-400 to-red-500' },
    { title: 'Bedding', icon: Bed, count: 89, color: 'from-blue-400 to-indigo-500' },
    { title: 'Electronics', icon: Laptop, count: 134, color: 'from-green-400 to-teal-500' },
    { title: 'Furniture', icon: Sofa, count: 67, color: 'from-purple-400 to-pink-500' },
    { title: 'Study Gear', icon: Coffee, count: 92, color: 'from-yellow-400 to-orange-500' },
    { title: 'Connectivity', icon: Wifi, count: 43, color: 'from-cyan-400 to-blue-500' }
  ];

  const stats = [
    { 
      label: 'Items Shared', 
      value: 10000, 
      suffix: '+',
      icon: Heart,
      description: 'Essential items helping students settle'
    },
    { 
      label: 'Cities Covered', 
      value: 25, 
      suffix: '+',
      icon: MapPin,
      description: 'Major Indian cities and counting'
    },
    { 
      label: 'Happy Users', 
      value: 5000, 
      suffix: '+',
      icon: Users,
      description: 'Students and professionals helped'
    }
  ];

  const floatingItems = [
    { icon: Bed, position: 'top-20 left-10', delay: 0 },
    { icon: Utensils, position: 'top-40 right-20', delay: 0.5 },
    { icon: Laptop, position: 'bottom-40 left-20', delay: 1 },
    { icon: Coffee, position: 'bottom-20 right-10', delay: 1.5 },
    { icon: Wifi, position: 'top-60 left-1/2', delay: 2 },
    { icon: Sofa, position: 'bottom-60 right-1/3', delay: 2.5 }
  ];

  const motivationalQuotes = [
    "Every new city is a fresh start waiting to happen! 🌟",
    "Home is where you make it, we help you get there! 🏠",
    "Building communities, one shared item at a time! 🤝",
    "Your journey to independence starts here! 🚀"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  if (loading) {
    return <AnimatedLoader />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blob-animation opacity-60" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blob-animation opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blob-animation opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 gradient-animated opacity-5"
        />
        
        {/* Floating Icons */}
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute hidden lg:block ${item.position} text-primary/30`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.8 }}
          >
            <div className="floating">
              <item.icon size={40} />
            </div>
          </motion.div>
        ))}

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl lg:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block text-foreground">Start Fresh</span>
                  <span className="block">in a{' '}</span>
                  <span className="gradient-text block">New City</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Connect with fellow students & professionals. Discover, share, and 
                  acquire essential items to transform any space into home. 
                  <span className="text-primary font-semibold"> Your journey starts here!</span>
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-2xl font-semibold pulse-glow hover:scale-105 transition-all duration-300" 
                  asChild
                >
                  <a href="/browse">
                    Explore Items
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 rounded-2xl font-semibold border-2 hover:scale-105 transition-all duration-300" 
                  asChild
                >
                  <a href="/post">Share Your Items</a>
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center gap-8 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Trusted Community</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">25+ Cities</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y: y2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={heroImage} 
                  alt="Students and workers in Indian cities" 
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-muted/20 to-accent/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Popular <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Discover everything you need to transform your new space into a comfortable home
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card-hover"
              >
                <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{category.count}</p>
                    <p className="text-sm text-muted-foreground">items available</p>
                    
                    <motion.div 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:bg-primary/10"
                        onClick={() => window.location.href = '/browse'}
                      >
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-animated opacity-5"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
              <CardContent className="py-16 relative z-10">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Making a <span className="gradient-text">Difference</span>
                  </h2>
                  <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    Together, we're revolutionizing how students and professionals start fresh in new cities
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="mb-6 flex justify-center"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                      
                      <div className="text-5xl lg:text-6xl font-black gradient-text mb-3">
                        <AnimatedCounter 
                          from={0} 
                          to={stat.value} 
                          suffix={stat.suffix}
                          duration={2.5}
                        />
                      </div>
                      
                      <div className="text-xl font-bold text-foreground mb-2">{stat.label}</div>
                      <p className="text-muted-foreground text-sm max-w-xs mx-auto">{stat.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to <span className="gradient-text">Get Started?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join thousands of students and professionals who are building communities and 
              helping each other create home in new cities. Your journey to independence starts here!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 rounded-2xl font-bold pulse-glow hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href="/browse">
                  <Star className="mr-3 h-6 w-6" />
                  Find Your Essentials
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-12 py-6 rounded-2xl font-bold border-2 hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href="/post">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Share & Earn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-navy text-white overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4 gradient-text">FreshStart</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Empowering students and professionals to start fresh in new cities through 
                community-driven sharing and support.
              </p>
              
              <motion.div 
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-medium text-lg italic"
              >
                {motivationalQuotes[currentQuote]}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Browse Items', 'Post Item', 'About Us', 'Contact'].map((link, index) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Get the latest updates and tips!</p>
              
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                />
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Subscribe
                </Button>
              </motion.div>
              
              <div className="flex space-x-4 mt-6">
                {[Heart, Users, MapPin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0] 
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-primary/20 cursor-pointer transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-white/20 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400">
              © 2024 FreshStart. Made with ❤️ for students and dreamers everywhere.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
