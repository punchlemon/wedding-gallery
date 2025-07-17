"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 via-amber-50 to-orange-50">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 text-6xl opacity-20"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-32 text-4xl opacity-20"
        >
          💐
        </motion.div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-32 text-5xl opacity-20"
        >
          🦋
        </motion.div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-pink-200/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="font-script text-3xl gradient-text">
                Yuki & Yukihiro
              </span>
              <span className="font-serif text-sm text-rose-600 tracking-widest">
                WEDDING GALLERY
              </span>
            </motion.div>
            
            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              {[
                { name: 'Gallery', href: '/gallery' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-rose-700 hover:text-rose-900 transition-all duration-300 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Main Visual Area */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with multiple layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-pink-100/50 to-rose-200/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-6xl">💕</span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-script text-6xl md:text-8xl gradient-text mb-4 relative"
          >
            <span className="sparkle relative">Yuki & Yukihiro</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-2xl md:text-3xl text-rose-800 mb-6 tracking-wide"
          >
            Our Unforgettable Day
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-serif text-lg text-rose-700 mb-12"
          >
            June 15, 2025 • Tokyo, Japan
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              href="/gallery"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(190, 24, 93, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-serif text-lg text-rose-800 hover:text-rose-900 transition-all duration-300 border-2 border-rose-200/50 hover:border-rose-300/70 floating-animation"
              >
                ✨ View Our Gallery ✨
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-rose-400 text-sm mb-2 font-serif">Scroll</span>
            <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center relative">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-rose-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 px-6 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl mb-6 block"
            >
              📸
            </motion.span>
            <h2 className="font-script text-5xl md:text-6xl gradient-text mb-6">
              Gallery Highlights
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-rose-700 max-w-3xl mx-auto font-serif leading-relaxed">
              私たちの特別な一日の最も美しい瞬間を、愛と共に捉えました。
              永遠に残したい思い出のコレクションをご覧ください。
            </p>
          </motion.div>

          {/* Enhanced Gallery Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-2xl">🌸</div>
              <div className="absolute top-4 right-4 text-2xl">🌸</div>
              <div className="absolute bottom-4 left-4 text-2xl">🌸</div>
              <div className="absolute bottom-4 right-4 text-2xl">🌸</div>
            </div>
            
            <div className="text-center relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-8"
              >
                �
              </motion.div>
              <h3 className="font-script text-4xl text-rose-800 mb-6">Coming Soon</h3>
              <p className="text-rose-600 mb-8 font-serif text-lg">
                美しい結婚式の写真ギャラリーをご用意しています。<br />
                特別なパスワードでアクセスしてください。
              </p>
              <Link href="/gallery">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(135deg, #be185d, #ec4899, #f97316)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-serif text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🔐 Enter Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-rose-100 via-pink-100 to-orange-100 py-16 border-t border-pink-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-script text-3xl gradient-text mb-4">
              Thank you for celebrating with us
            </div>
            <p className="text-rose-700 mb-6 font-serif">
              © 2025 Yuki & Yukihiro Wedding Gallery. Made with 💕
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              <span>🌸</span>
              <span>💕</span>
              <span>🌸</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
