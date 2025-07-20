"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePhotos } from "@/hooks/usePhotos";

const GALLERY_PASSWORD = "milk"; // パスワード

export default function Gallery() {
  const { photos, loading, error } = usePhotos();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const togglePhotoSelection = (photoId: number) => {
    setSelectedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleDownloadSelected = async () => {
    if (selectedPhotos.length === 0) return;
    
    for (const photoId of selectedPhotos) {
      const photo = photos.find(p => p.id === photoId);
      if (photo) {
        try {
          const response = await fetch(photo.src);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `wedding_photo_${photo.id}.jpg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Download failed:', error);
        }
      }
    }
  };

  const selectAllPhotos = () => {
    if (selectedPhotos.length === photos.length) {
      // 全て選択されている場合は全ての選択を解除
      setSelectedPhotos([]);
    } else {
      // 一部または何も選択されていない場合は全て選択
      setSelectedPhotos(photos.map(photo => photo.id));
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === GALLERY_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError("パスワードが間違っています");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        {/* Subtle Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-20 h-20 opacity-10"
            style={{
              background: 'radial-gradient(circle, var(--gold), transparent)',
            }}
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.95, 1] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 right-32 w-16 h-16 opacity-10"
            style={{
              background: 'radial-gradient(circle, var(--rose-gold), transparent)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto p-8"
        >
          <div className="luxury-card rounded-none p-12 relative overflow-hidden">
            <div className="text-center mb-12">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M6 10C6 7.79086 7.79086 6 10 6H14C16.2091 6 18 7.79086 18 10V14C18 16.2091 16.2091 18 14 18H10C7.79086 18 6 16.2091 6 14V10Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 7L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 12L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </motion.div>
              <h1 className="font-serif text-4xl gradient-text mb-4">
                Private Collection
              </h1>
              <div className="elegant-divider mb-6"></div>
              <p className="elegant-text text-lg">
                パスワードを入力してギャラリーをご覧ください
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-8">
              <div>
                <label htmlFor="password" className="block subtitle-elegant mb-3">
                  Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 rounded-none border-b-2 border-gold/30 focus:border-gold focus:outline-none bg-transparent elegant-text placeholder-gray-400"
                  placeholder="Enter password"
                  required
                />
              </div>

              <AnimatePresence>
                {passwordError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 subtitle-elegant text-center"
                  >
                    {passwordError}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full luxury-button"
              >
                Enter Gallery
              </motion.button>
            </form>

            <div className="mt-12 text-center">
              <Link href="/" className="nav-link text-sm">
                ← Return Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="elegant-text">Loading photos...</p>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-red-400 elegant-text mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="luxury-button"
          >
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Fixed Header for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b-2 border-gold px-4 py-4 shadow-lg lg:hidden"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold text-white bg-gold px-3 py-1 rounded-full">
              {selectedPhotos.length} / {photos.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={selectAllPhotos}
              className="text-sm px-4 py-2 bg-white/30 text-white border border-white/50 rounded-full font-medium shadow-lg backdrop-blur-sm"
            >
              {selectedPhotos.length === photos.length ? 'Clear All' : 'Select All'}
            </motion.button>
          </div>
          
          {selectedPhotos.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadSelected}
              className="w-12 h-12 bg-white text-gold rounded-full shadow-lg flex items-center justify-center relative border-2 border-gold"
              title={`Download ${selectedPhotos.length} photo${selectedPhotos.length > 1 ? 's' : ''}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M12 3V16M12 16L16 12M12 16L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21H15C16.1046 21 17 20.1046 17 19V18H7V19C7 20.1046 7.89543 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Fixed Header for Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b-2 border-gold px-8 py-4 shadow-lg hidden lg:block"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold text-white bg-gold px-3 py-1 rounded-full">
              {selectedPhotos.length} / {photos.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={selectAllPhotos}
              className="text-sm px-4 py-2 bg-white/30 text-white border border-white/50 rounded-full font-medium shadow-lg backdrop-blur-sm"
            >
              {selectedPhotos.length === photos.length ? 'Clear All' : 'Select All'}
            </motion.button>
          </div>
          
          {selectedPhotos.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadSelected}
              className="w-12 h-12 bg-white text-gold rounded-full shadow-lg flex items-center justify-center relative border-2 border-gold"
              title={`Download ${selectedPhotos.length} photo${selectedPhotos.length > 1 ? 's' : ''}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
                <path d="M12 3V16M12 16L16 12M12 16L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21H15C16.1046 21 17 20.1046 17 19V18H7V19C7 20.1046 7.89543 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Gallery Content */}
      <main className="px-4 sm:px-6 pt-24">
        <div className="max-w-full mx-auto px-2 md:px-4">
          {/* Photo Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-12"
          >
            {photos.map((photo, index) => {
              const isSelected = selectedPhotos.includes(photo.id);
              return (                  <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="w-full"
                >
                  <motion.button
                    onClick={() => togglePhotoSelection(photo.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden transition-all duration-300 w-full outline-none focus:outline-none ${
                      isSelected 
                        ? 'shadow-2xl transform scale-105 z-10' 
                        : 'hover:shadow-lg scale-85'
                    }`}
                  >
                    {/* Photo in Square Tile */}
                    <div className={`relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden transition-all duration-300 ${
                      isSelected ? 'bg-gradient-to-br from-gold/10 to-rose-gold/10' : ''
                    }`}>
                      <Image
                        src={photo.src}
                        alt={`Wedding photo ${photo.id}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                        className="object-contain transition-all duration-300"
                      />
                      
                      {/* Overlay for unselected state */}
                      {!isSelected && (
                        <div 
                          className="absolute inset-0 transition-all duration-300 z-20 pointer-events-none"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                        ></div>
                      )}
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
