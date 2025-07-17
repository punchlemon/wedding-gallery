"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Elegant Header */}
      <header className="luxury-glass border-b border-gold/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-script text-3xl gradient-text">
              Yuki & Yukihiro
            </Link>
            <nav className="hidden md:flex space-x-12">
              <Link href="/gallery" className="nav-link">
                Gallery
              </Link>
              <Link href="/about" className="nav-link" style={{ color: 'var(--gold)' }}>
                Our Story
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-24 px-8 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            <span className="subtitle-elegant block mb-8">
              About Us
            </span>
            <h1 className="font-serif text-5xl md:text-6xl gradient-text mb-8 leading-tight">
              Our Love Story
            </h1>
            <div className="elegant-divider-long mb-8"></div>
            <p className="elegant-text text-xl max-w-3xl mx-auto leading-relaxed">
              二人の出会いから結婚まで、愛で満ちた美しい物語をご紹介いたします
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="luxury-card rounded-none p-16 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center"
                >
                  <span className="text-4xl text-white">Y</span>
                </motion.div>
                <h3 className="font-serif text-4xl gradient-text mb-6">Yuki</h3>
                <p className="elegant-text text-lg leading-relaxed">
                  美しい心を持つ彼女は、いつも周りを明るくしてくれます。
                  彼女の笑顔は私にとって最高の宝物です。
                  アートと音楽を愛する感性豊かな人です。
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center"
                >
                  <span className="text-4xl text-white">Y</span>
                </motion.div>
                <h3 className="font-serif text-4xl gradient-text mb-6">Yukihiro</h3>
                <p className="elegant-text text-lg leading-relaxed">
                  優しくて頼りになる彼は、いつも私を支えてくれます。
                  彼との未来にワクワクしています。
                  写真と旅行が趣味の冒険心あふれる人です。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="luxury-card rounded-none p-16"
          >
            <div className="text-center mb-16">
              <h3 className="font-serif text-4xl gradient-text mb-6">Our Journey</h3>
              <div className="elegant-divider-long mb-8"></div>
            </div>
            
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-2xl gradient-text mb-4">2022年春 - 初めての出会い</h4>
                  <p className="elegant-text text-lg leading-relaxed">
                    友人の紹介で出会った私たち。桜咲く公園での偶然の出会いが、
                    この美しい物語の始まりでした。初めて話した時から、
                    特別な絆を感じていました。
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-gold flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-2xl gradient-text mb-4">2023年秋 - プロポーズ</h4>
                  <p className="elegant-text text-lg leading-relaxed">
                    美しい紅葉の下で、永遠の愛を誓いました。
                    二人だけの特別な瞬間に、涙と笑顔があふれました。
                    この日から、私たちの新しい人生が始まりました。
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start space-x-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                    <polyline points="9,22 9,12 15,12 15,22" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-2xl gradient-text mb-4">2025年6月 - 結婚式</h4>
                  <p className="elegant-text text-lg leading-relaxed">
                    愛する人たちに囲まれて、最高の一日を過ごしました。
                    家族や友人の温かい祝福の中で、私たちの愛を誓い合いました。
                    この日の美しい思い出は、一生の宝物です。
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
