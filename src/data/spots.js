const spots = [
  {
    id: 1,
    name: {
      zh: "金城茶園｜藝術家的手作茶園",
      en: "Jincheng Tea Garden | An Artist's Handmade Tea Garden"
    },
    description: {
      zh: "畫家金城老師把對茶的熱愛化為行動，將竹筍園變成茶園。堅持友善無毒耕作，茶樹刻意種得比別人高，只為減少拔草的次數。他說：「做茶是一種工藝，是好玩的事情。做茶的過程，就像做餅乾、蛋糕一樣，非常吸引人」。",
      en: "Painter Teacher Jincheng turned his love for tea into action, transforming a bamboo garden into a tea garden. Insisting on friendly, non-toxic farming, he deliberately grows tea trees taller than others, just to reduce the frequency of weeding. He says: 'Making tea is a craft, it's a fun thing. The process of making tea is very attractive, just like making cookies and cakes.'"
    },
    lat: 400,
    lng: 450,
    category: "tea",
    mission: {
      zh: "找一棵最高的茶樹，與它合影並寫下一句對它的祝福",
      en: "Find the tallest tea tree, take a photo with it and write a blessing for it"
    },
    quiz: {
      question: {
        zh: "金城老師為什麼讓茶樹比一般高？",
        en: "Why does Teacher Jincheng let the tea trees grow taller than usual?"
      },
      options: [
        {
          zh: "避開太陽直曬",
          en: "Avoid direct sunlight"
        },
        {
          zh: "減少除草次數",
          en: "Reduce weeding frequency"
        },
        {
          zh: "美觀",
          en: "Aesthetics"
        },
        {
          zh: "保護茶香",
          en: "Protect tea fragrance"
        }
      ],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    name: {
      zh: "1792 茶園｜從農會出發的新世代茶力",
      en: "1792 Tea Garden | New Generation Tea Power from Farmers' Association"
    },
    description: {
      zh: "由黃土水總幹事創立，致力推廣深坑茶的文化與教育。2024年榮獲文山包種茶比賽特等獎，並推動年輕族群參與茶事。",
      en: "Founded by Director-General Huang Tushui, dedicated to promoting the culture and education of Shenkeng tea. In 2024, it won the special prize in the Wenshan Pouchong Tea Competition and promoted the participation of young people in tea affairs."
    },
    lat: 300,
    lng: 600,
    category: "tea",
    mission: {
      zh: "參加採茶體驗，並拍下你製作的第一包茶！",
      en: "Participate in the tea-picking experience and take a photo of your first pack of tea!"
    },
    quiz: {
      question: {
        zh: "1792茶園創立者是誰？",
        en: "Who is the founder of 1792 Tea Garden?"
      },
      options: [
        {
          zh: "金城老師",
          en: "Teacher Jincheng"
        },
        {
          zh: "黃土水",
          en: "Huang Tushui"
        },
        {
          zh: "燕子",
          en: "Yanzi"
        },
        {
          zh: "陳春發",
          en: "Chen Chunfa"
        }
      ],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    name: {
      zh: "青山香草教育農園｜香氣與生命的療癒基地",
      en: "Qingshan Herb Education Farm | Fragrance and Life Healing Base"
    },
    description: {
      zh: "園長「燕子」將祖傳茶園轉型為有機香草園。園內種植各類香草、復育艳紅鹿子百合，並開發香草養生茶與冰品，推廣土地與人共好的理念。青山香草農園位於深坑阿柔洋大道最高點，海押約 480 公尺，居高臨下俯瞰阿柔坑溪谷，視野遼闊，可遠眺貓空、石碗、汐止等地田野風光。鄰近筆架山、二格山、猴山岳等多條親山步道，是休閒賞景的絕佳地點。",
      en: "Garden director 'Yanzi' transformed her ancestral tea garden into an organic herb garden. The garden grows various herbs, revives red lily flowers, and develops herbal wellness teas and ice products, promoting the concept of land and people coexisting harmoniously. Qingshan Herb Farm is located at the highest point of Arou Avenue in Shenkeng, at an altitude of about 480 meters, overlooking the Aroukeng Valley with a broad view of Maokong, Shiding, Xizhi, and other rural landscapes. It is near multiple hiking trails including Bijia Mountain, Erge Mountain, and Monkey Mountain, making it an excellent spot for leisure and sightseeing."
    },
    lat: 500,
    lng: 350,
    category: "tea",
    mission: {
      zh: "選一株你最喜歡的香草，寫下它的香氣聯想！",
      en: "Choose your favorite herb and write down what its fragrance reminds you of!"
    },
    quiz: {
      question: {
        zh: "燕子在哪裡學習香草知識？",
        en: "Where did Yanzi learn about herbs?"
      },
      options: [
        {
          zh: "國內農業所",
          en: "Domestic Agricultural Institute"
        },
        {
          zh: "法國香氣學校",
          en: "French Fragrance School"
        },
        {
          zh: "台東",
          en: "Taitung"
        },
        {
          zh: "日本香道館",
          en: "Japanese Fragrance Hall"
        }
      ],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    name: {
      zh: "石媽祖步道｜有香氣與傳說的輕健行",
      en: "Shi Mazu Trail | A Leisurely Hike with Fragrance and Legends"
    },
    description: {
      zh: "石媽祖步道入口在阿柔洋產業道路約 450公尺處，步道終點為鎮南宮石媽祖廟，沿路兩側桂花樹撥鼻，風景優美，步行來回約 30 分鐘，適合親子健行。",
      en: "The Shi Mazu Trail starts at around 450 meters on Arou Avenue, and the endpoint is the Shi Mazu Temple in Zhen Nan Palace. The trail is lined with fragrant osmanthus trees, offering a beautiful view. The round-trip hike takes about 30 minutes, making it suitable for family outings."
    },
    lat: 600,
    lng: 500,
    category: "family",
    mission: {
      zh: "和家人一起找出最多桂花的地方拍合照。",
      en: "Take a family photo at the spot with the most osmanthus flowers."
    },
    quiz: {
      question: {
        zh: "鎮南宮的媽祖像是一塊什麼？",
        en: "What is the Mazu statue in Zhen Nan Palace made of?"
      },
      options: [
        {
          zh: "青銅",
          en: "Bronze"
        },
        {
          zh: "木雕",
          en: "Wood carving"
        },
        {
          zh: "風化石",
          en: "Weathered stone"
        },
        {
          zh: "紙紀",
          en: "Paper craft"
        }
      ],
      correctAnswer: 3
    }
  },
  {
    id: 5,
    name: {
      zh: "龍鳳寺",
      en: "Longfeng Temple"
    },
    description: {
      zh: "當地居民信仰中心，香火鼎盛，歷史悠久。",
      en: "A center of faith for local residents, with a thriving religious atmosphere and a long history."
    },
    lat: 450,
    lng: 700,
    category: "story",
    mission: {
      zh: "找出寺廟中最古老的一座神像，了解其歷史。",
      en: "Find the oldest deity statue in the temple and learn about its history."
    },
    quiz: {
      question: {
        zh: "龍鳳寺主要供奉哪位神明？",
        en: "Which deity is primarily worshipped at Longfeng Temple?"
      },
      options: [
        {
          zh: "觀音菩薩",
          en: "Guanyin Bodhisattva"
        },
        {
          zh: "媽祖",
          en: "Mazu"
        },
        {
          zh: "關聖帝君",
          en: "Guan Sheng Di Jun"
        },
        {
          zh: "玉皇大帝",
          en: "Jade Emperor"
        }
      ],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    name: {
      zh: "茶葉製作坊",
      en: "Tea Processing Workshop"
    },
    description: {
      zh: "傳統製茶技藝展示，可親手體驗揉茶、烘茶過程。",
      en: "Traditional tea-making crafts on display, where you can experience the process of kneading and roasting tea leaves firsthand."
    },
    lat: 350,
    lng: 400,
    category: "tea",
    mission: {
      zh: "參與一次製茶體驗，拍下你的作品。",
      en: "Participate in a tea-making experience and take a photo of your creation."
    },
    quiz: {
      question: {
        zh: "阿柔茶區最著名的茶葉是哪一種？",
        en: "What is the most famous tea in the Arou tea area?"
      },
      options: [
        {
          zh: "東方美人茶",
          en: "Oriental Beauty Tea"
        },
        {
          zh: "鐵觀音",
          en: "Tieguanyin"
        },
        {
          zh: "阿里山高山茶",
          en: "Alishan High Mountain Tea"
        },
        {
          zh: "文山包種茶",
          en: "Wenshan Pouchong Tea"
        }
      ],
      correctAnswer: 3
    }
  },
  {
    id: 7,
    name: {
      zh: "森林探險區",
      en: "Forest Adventure Area"
    },
    description: {
      zh: "各種難度的健行路線，挑戰自我的最佳選擇。",
      en: "Hiking trails of various difficulties, the best choice for challenging yourself."
    },
    lat: 250,
    lng: 500,
    category: "hiking",
    mission: {
      zh: "完成森林探險區的健行路線，拍下路標照片。",
      en: "Complete the hiking trail in the Forest Adventure Area and take a photo of the trail markers."
    },
    quiz: {
      question: {
        zh: "森林探險區的主要樹種是什麼？",
        en: "What is the main tree species in the Forest Adventure Area?"
      },
      options: [
        {
          zh: "杉木",
          en: "Cedar"
        },
        {
          zh: "欽木",
          en: "Zelkova"
        },
        {
          zh: "樂樹",
          en: "Camphor tree"
        },
        {
          zh: "相思樹",
          en: "Acacia"
        }
      ],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    name: {
      zh: "兒童冒險樂園",
      en: "Children's Adventure Park"
    },
    description: {
      zh: "天然素材打造的遊樂設施，讓孩子盡情玩耳。",
      en: "Facilities made from natural materials, allowing children to play freely."
    },
    lat: 550,
    lng: 600,
    category: "family",
    mission: {
      zh: "挑戰樂園中的繩索橋，拍照留念。",
      en: "Challenge the rope bridge in the park and take a photo as a memento."
    },
    quiz: {
      question: {
        zh: "兒童冒險樂園使用了哪種環保材料建造？",
        en: "What eco-friendly materials were used to build the Children's Adventure Park?"
      },
      options: [
        {
          zh: "回收塑料",
          en: "Recycled plastics"
        },
        {
          zh: "天然木材",
          en: "Natural wood"
        },
        {
          zh: "竹子",
          en: "Bamboo"
        },
        {
          zh: "以上皆是",
          en: "All of the above"
        }
      ],
      correctAnswer: 3
    }
  }
];

export default spots;
