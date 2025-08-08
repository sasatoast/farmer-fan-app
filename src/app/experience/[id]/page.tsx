import { notFound } from 'next/navigation';
import { getExperienceById, getFarmerById } from '@/lib/data';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale/ja';
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaYenSign,
  FaClock,
  FaUsers,
  FaArrowLeft,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Link from 'next/link';

interface ExperiencePageProps {
  params: {
    id: string;
  };
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = getExperienceById(params.id);

  if (!experience) {
    notFound();
  }

  const farmer = getFarmerById(experience.farmerName) || {
    id: 'unknown',
    name: experience.farmerName,
    location: '未設定',
    description: '農家情報は準備中です。',
    imageUrl: '/images/default-farmer.jpg',
    specialties: [],
  };

  return (
    <div className="min-h-screen warm-gradient">
      {/* 戻るボタン */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-6"
        >
          <FaArrowLeft className="text-sm" />
          <span>体験一覧に戻る</span>
        </Link>
      </div>

      {/* ヒーローセクション */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="warm-card overflow-hidden">
          {/* ヒーロー画像 */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-yellow-400/30 z-10" />
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
              <FaLeaf className="text-8xl text-green-400" />
            </div>
            {/* 価格バッジ */}
            <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold flex items-center gap-2">
              <FaYenSign />
              {experience.price.toLocaleString()}
            </div>
          </div>

          {/* 体験情報 */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* メインコンテンツ */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {experience.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>{farmer.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-green-500" />
                    <span>
                      {format(new Date(experience.date), 'yyyy年M月d日(E)', {
                        locale: ja,
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-green-500" />
                    <span>約2-3時間</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-green-500" />
                    <span>最大10名</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    体験内容
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* 農家紹介 */}
                <div className="warm-card p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    農家さんについて
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaLeaf className="text-2xl text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {farmer.name}
                      </h4>
                      <p className="text-gray-600 mb-2">{farmer.location}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {farmer.description}
                      </p>
                      {farmer.specialties.length > 0 && (
                        <div className="mt-3">
                          <span className="text-sm text-gray-500">
                            専門分野:{' '}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {farmer.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* サイドバー - 予約セクション */}
              <div className="lg:col-span-1">
                <div className="warm-card p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    体験の詳細
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">価格</span>
                      <span className="text-2xl font-bold text-green-600">
                        ¥{experience.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">開催日</span>
                      <span className="font-medium">
                        {format(new Date(experience.date), 'M月d日(E)', {
                          locale: ja,
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">時間</span>
                      <span className="font-medium">約2-3時間</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">定員</span>
                      <span className="font-medium">最大10名</span>
                    </div>
                  </div>

                  {/* 予約ボタン */}
                  <a
                    href={experience.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <FaExternalLinkAlt className="text-sm relative z-10" />
                    <span className="relative z-10">体験を予約する</span>
                  </a>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    ※ 予約はGoogleフォームで受け付けています
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
