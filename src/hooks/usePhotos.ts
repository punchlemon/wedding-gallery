import { useState, useEffect } from 'react';
import { staticPhotos } from '@/data/photos-static';

export interface Photo {
  id: number;
  src: string;
  alt: string;
  filename: string;
}

export function usePhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // 静的データを直接使用（API呼び出しなし）
      setPhotos(staticPhotos);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load photos');
      setLoading(false);
    }
  }, []);

  return { photos, loading, error };
}
