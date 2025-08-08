// 農家の型定義
export interface Farmer {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  specialties: string[];
}

// 体験の型定義
export interface Experience {
  id: string;
  title: string;
  farmerName: string;
  price: number;
  date: string; // ISO形式の日付文字列
  imageUrl: string;
  description: string;
  googleFormUrl: string;
}

// ダミーデータ - 農家情報
export const farmers: Farmer[] = [
  {
    id: 'farmer-1',
    name: '田中農園',
    location: '長野県安曇野市',
    description:
      '標高800mの高原で、りんごと野菜を中心に栽培しています。自然豊かな環境で、安心・安全な農産物をお届けします。',
    imageUrl: '/images/farmer-tanaka.jpg',
    specialties: ['りんご', '野菜', '高原野菜'],
  },
  {
    id: 'farmer-2',
    name: '佐藤ファーム',
    location: '茨城県水戸市',
    description:
      '代々続く農家で、米作りを中心に、季節の野菜も栽培しています。減農薬にこだわり、環境に配慮した農業を実践しています。',
    imageUrl: '/images/farmer-sato.jpg',
    specialties: ['米', '野菜', '減農薬'],
  },
  {
    id: 'farmer-3',
    name: '山田牧場',
    location: '北海道十勝地方',
    description:
      '広大な北海道の大地で、乳牛の飼育と酪農製品の製造を行っています。新鮮な牛乳とチーズを直接お届けします。',
    imageUrl: '/images/farmer-yamada.jpg',
    specialties: ['乳製品', '牛乳', 'チーズ'],
  },
];

// ダミーデータ - 体験情報
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'りんご狩り体験',
    farmerName: '田中農園',
    price: 3000,
    date: '2024-11-15',
    imageUrl: '/images/apple-picking.jpg',
    description:
      '秋のりんご狩り体験です。約2時間で、りんごの収穫方法を学び、自分で収穫したりんごをお持ち帰りいただけます。農園の見学も含まれています。',
    googleFormUrl: 'https://forms.gle/your-google-form-url-1',
  },
  {
    id: 'exp-2',
    title: '田植え体験',
    farmerName: '佐藤ファーム',
    price: 2500,
    date: '2024-05-20',
    imageUrl: '/images/rice-planting.jpg',
    description:
      '春の田植え体験です。昔ながらの手植え方法で田植えを行います。泥んこになりながら、日本の伝統的な農業を体験できます。',
    googleFormUrl: 'https://forms.gle/your-google-form-url-2',
  },
  {
    id: 'exp-3',
    title: '夏野菜パック収穫体験',
    farmerName: '山田牧場',
    price: 3500,
    date: '2024-07-10',
    imageUrl: '/images/summer-vegetables.jpg',
    description:
      '茄子、きゅうり、トマトなどの夏野菜を収穫して、オリジナルの野菜パックを作ります。約2時間で、収穫方法を学び、自分で収穫した野菜をお持ち帰りいただけます。',
    googleFormUrl: 'https://forms.gle/your-google-form-url-3',
  },
];

// データ取得用のヘルパー関数
export const getFarmerById = (id: string): Farmer | undefined => {
  return farmers.find((farmer) => farmer.id === id);
};

export const getExperienceById = (id: string): Experience | undefined => {
  return experiences.find((experience) => experience.id === id);
};

export const getExperiencesByFarmer = (farmerName: string): Experience[] => {
  return experiences.filter(
    (experience) => experience.farmerName === farmerName
  );
};
