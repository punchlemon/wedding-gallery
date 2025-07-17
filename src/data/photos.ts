// Wedding Photo Configuration
// 本番写真をここで管理してください

export interface Photo {
  id: number;
  src: string;
  alt?: string;
  caption?: string;
}

// 本番写真のリスト（例）
export const weddingPhotos: Photo[] = [
  {
    id: 1,
    src: "/photos/wedding_001.jpg",
    alt: "Wedding ceremony",
    caption: "Beautiful ceremony moment"
  },
  {
    id: 2,
    src: "/photos/wedding_002.jpg", 
    alt: "Wedding reception",
    caption: "Reception celebration"
  },
  // 写真を追加する場合は、ここに新しいオブジェクトを追加してください
];

// デモ用のサンプル写真（開発用）
export const samplePhotos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 2"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 3"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 4"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 5"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1602722053020-af31042989d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sample wedding photo 6"
  }
];

// 環境変数で本番/開発を切り替え
export const photos = process.env.NODE_ENV === 'production' ? weddingPhotos : samplePhotos;
