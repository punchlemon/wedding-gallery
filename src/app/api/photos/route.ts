import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public/photos');
    
    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(photosDirectory)) {
      fs.mkdirSync(photosDirectory, { recursive: true });
    }
    
    // 画像ファイルのみを取得
    const files = fs.readdirSync(photosDirectory);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    // ファイル名でソート
    imageFiles.sort();
    
    // 写真データを生成
    const photos = imageFiles.map((file, index) => ({
      id: index + 1,
      src: `/photos/${file}`,
      alt: `Wedding photo ${index + 1}`,
      filename: file
    }));
    
    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error reading photos directory:', error);
    return NextResponse.json({ error: 'Failed to load photos' }, { status: 500 });
  }
}
