"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      {/* Header */}
      <header className="glass-effect border-b border-pink-200/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-script text-2xl gradient-text">
              Yuki & Yukihiro
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/gallery" className="text-rose-700 hover:text-rose-900 font-serif transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-rose-700 hover:text-rose-900 font-serif transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-rose-700 hover:text-rose-900 font-serif transition-colors border-b-2 border-rose-400">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-4xl mb-4 block">📧</span>
            <h1 className="font-script text-5xl gradient-text mb-4">
              Contact Us
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-rose-700 font-serif">
              お気軽にメッセージをお送りください
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="font-script text-3xl gradient-text mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">💌</div>
                  <h4 className="font-serif text-2xl text-rose-800 mb-4">
                    メッセージを送信しました！
                  </h4>
                  <p className="text-rose-600">
                    ありがとうございます。お返事をお待ちください。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-serif text-rose-800 mb-2">
                      お名前
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none glass-effect text-rose-800 font-serif placeholder-rose-400"
                      placeholder="山田太郎"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-serif text-rose-800 mb-2">
                      メールアドレス
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none glass-effect text-rose-800 font-serif placeholder-rose-400"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-serif text-rose-800 mb-2">
                      メッセージ
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-rose-400 focus:outline-none glass-effect text-rose-800 font-serif placeholder-rose-400 resize-none"
                      placeholder="素敵な結婚式でした！おめでとうございます。"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-2xl font-serif text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💌 メッセージを送信
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="font-script text-3xl gradient-text mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-serif text-lg text-rose-800 mb-1">Location</h4>
                      <p className="text-rose-600">Tokyo, Japan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h4 className="font-serif text-lg text-rose-800 mb-1">Email</h4>
                      <p className="text-rose-600">yuki.yukihiro.wedding@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📱</div>
                    <div>
                      <h4 className="font-serif text-lg text-rose-800 mb-1">SNS</h4>
                      <p className="text-rose-600">@yukiyukihiro_wedding</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-8">
                <h3 className="font-script text-2xl gradient-text mb-4">Thank you</h3>
                <p className="text-rose-700 font-serif leading-relaxed">
                  私たちの特別な日を一緒にお祝いしてくださった皆様、
                  心から感謝しています。これからも末永くよろしくお願いします。
                </p>
                <div className="text-center mt-6">
                  <span className="text-3xl">💕</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
