"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-16 w-32 h-32 opacity-5"
          style={{
            background: 'radial-gradient(circle, var(--gold), transparent)',
          }}
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-16 w-24 h-24 opacity-5"
          style={{
            background: 'radial-gradient(circle, var(--rose-gold), transparent)',
          }}
        />
      </div>

      {/* Elegant Header */}
      <header className="fixed top-0 left-0 right-0 z-50 luxury-glass">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Sophisticated Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="font-script text-4xl gradient-text leading-none">
                Yuki & Yukihiro
              </span>
              <div className="elegant-divider mt-1"></div>
              <span className="subtitle-elegant mt-1">
                Wedding Collection
              </span>
            </motion.div>
            
            {/* Refined Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex space-x-12"
            >
              {[
                { name: 'Gallery', href: '/gallery' },
                { name: 'Our Story', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Sophisticated Design */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Layered Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1606800052052-4c30c9b7825b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90"></div>
          <div className="absolute inset-0 sparkle-effect"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mb-8"
          >
            <div className="elegant-divider-long"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="font-script text-7xl md:text-9xl gradient-text mb-8 leading-tight"
          >
            Yuki & Yukihiro
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="mb-8"
          >
            <div className="elegant-divider-long"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="font-serif text-2xl md:text-3xl elegant-text mb-6"
          >
            A Celebration of Love & Commitment
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="subtitle-elegant mb-16"
          >
            June Fifteenth • Twenty Twenty-Five • Tokyo
          </motion.div>

          {/* Elegant CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <Link href="/gallery">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="luxury-button"
              >
                View Our Collection
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Minimalist Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mb-3"></div>
            <span className="subtitle-elegant">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-32 px-8 sm:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="subtitle-elegant block mb-8">
              Captured Moments
            </span>
            <h2 className="font-serif text-5xl md:text-6xl gradient-text mb-8 leading-tight">
              Our Wedding Gallery
            </h2>
            <div className="elegant-divider-long mb-8"></div>
            <p className="elegant-text text-xl max-w-3xl mx-auto leading-relaxed">
              私たちの特別な一日を、最も美しい瞬間とともに記録いたしました。
              愛に満ちた時間を、永遠に残したいと思います。
            </p>
          </motion.div>

          {/* Sophisticated Gallery Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="luxury-card rounded-none p-16 relative overflow-hidden"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-12"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
              
              <h3 className="font-serif text-3xl gradient-text mb-6">
                Private Collection
              </h3>
              <p className="elegant-text text-lg mb-12 max-w-md mx-auto">
                特別なパスワードをお持ちの方のみアクセスいただける、
                プライベートギャラリーをご用意しております。
              </p>
              
              <Link href="/gallery">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="luxury-button"
                >
                  Enter Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="py-20 border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="elegant-divider mb-8"></div>
            <p className="elegant-text text-lg mb-4">
              Thank you for celebrating this beautiful journey with us
            </p>
            <p className="subtitle-elegant">
              © 2025 Yuki & Yukihiro • Made with Love
            </p>
            <div className="elegant-divider mt-8"></div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
