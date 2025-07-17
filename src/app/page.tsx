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
            className="font-script gradient-text mb-8 leading-tight text-center"
          >
            <div className="text-6xl md:text-8xl">Yuki</div>
            <div className="text-4xl md:text-5xl opacity-80 my-2">&</div>
            <div className="text-6xl md:text-8xl">Yukihiro</div>
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
            2025.07.12 • Tokyo
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
      </section>
    </div>
  );
}
