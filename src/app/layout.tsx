import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import {
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farmer Fan - 週末、畑に会いに行こう。',
  description:
    '全国各地の農家さんと一緒に、自然と触れ合う体験をしてみませんか？安心・安全な農家体験をご提供します。',
  keywords: '農家体験, 農業体験, 自然体験, りんご狩り, 田植え, チーズ作り',
};

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <FaLeaf className="text-2xl" />
            <span className="text-xl font-bold">Farmer Fan</span>
          </Link>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              体験一覧
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              私たちについて
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* お問い合わせボタン */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0120-123-456"
              className="hidden sm:flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <FaPhone className="text-sm" />
              <span className="text-sm font-medium">0120-123-456</span>
            </a>
            <a
              href="mailto:info@farmerfan.com"
              className="hidden sm:flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm font-medium">お問い合わせ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="text-2xl text-green-400" />
              <span className="text-xl font-bold">Farmer Fan</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              全国各地の農家さんと一緒に、自然と触れ合う体験を提供しています。
              安心・安全な農家体験を通じて、食の大切さと自然の素晴らしさを感じてください。
            </p>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-green-400" />
              <span className="text-sm">東京都渋谷区○○○○</span>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors"
                >
                  体験一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  私たちについて
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <span className="text-sm">0120-123-456</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                <span className="text-sm">info@farmerfan.com</span>
              </div>
            </div>

            {/* ソーシャルメディア */}
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3">フォローする</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Farmer Fan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
