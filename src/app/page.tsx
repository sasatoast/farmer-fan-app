import Link from 'next/link';
import { experiences } from '@/lib/data';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale/ja';
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaYenSign,
  FaUsers,
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen warm-gradient">
      {/* ヒーローセクション */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-yellow-400/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaLeaf className="text-sm" />
              <span>安心・安全な農家体験</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            週末、畑に会いに行こう。
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            全国各地の農家さんと一緒に、
            <br />
            自然と触れ合う体験をしてみませんか？
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-green-500" />
              <span className="text-sm">全国対応</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="text-green-500" />
              <span className="text-sm">季節に合わせた体験</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaUsers className="text-green-500" />
              <span className="text-sm">家族・グループ対応</span>
            </div>
          </div>
        </div>
      </section>

      {/* 体験一覧セクション */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            今月の体験プログラム
          </h2>
          <p className="text-gray-600 text-lg">
            季節に合わせた様々な農業体験をご用意しています
          </p>
        </div>

        {/* 体験カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Link
              key={experience.id}
              href={`/experience/${experience.id}`}
              className="group"
            >
              <div className="warm-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-green-100 hover:border-green-200">
                {/* 画像 */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-yellow-400/20 z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
                    <FaLeaf className="text-6xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* 価格バッジ */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <FaYenSign className="text-xs" />
                    {experience.price.toLocaleString()}
                  </div>
                  {/* 日付バッジ */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {format(new Date(experience.date), 'M月d日(E)', {
                      locale: ja,
                    })}
                  </div>
                </div>

                {/* カード内容 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {experience.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-green-500 flex-shrink-0" />
                      <span className="text-sm truncate">
                        {experience.farmerName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-green-500 flex-shrink-0" />
                      <span className="text-sm">
                        {format(new Date(experience.date), 'yyyy年M月d日(E)', {
                          locale: ja,
                        })}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-gray-600 text-sm leading-relaxed overflow-hidden mb-4"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {experience.description}
                  </p>

                  {/* 詳細ボタン */}
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center gap-2 text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors">
                      詳細を見る
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA セクション */}
        <div className="text-center mt-20">
          <div className="warm-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                まだ体験したことのない農業体験
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                自然と触れ合い、食の大切さを学べる貴重な体験です。
                <br />
                お気軽にお申し込みください。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-green-600">
                <div className="flex items-center gap-2">
                  <FaLeaf className="text-2xl" />
                  <span className="font-medium">自然と共に、新しい発見を</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-xl" />
                  <span className="font-medium">家族・友達と一緒に</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-xl" />
                  <span className="font-medium">全国各地で体験可能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
