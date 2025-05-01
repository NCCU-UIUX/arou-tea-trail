const spots = [
  {
    id: 1,
    name: "金城茶園｜藝術家的手作茶園",
    description: "畫家金城老師把對茶的熱愛化為行動，將竹筍園變成茶園。堅持友善無毒耕作，茶樹刻意種得比別人高，只為減少拔草的次數。他說：「做茶是一種工藝，是好玩的事情。做茶的過程，就像做餅乾、蛋糕一樣，非常吸引人」",
    lat: 400,
    lng: 450,
    category: "tea",
    mission: "找一棵最高的茶樹，與它合影並寫下一句對它的祝福",
    quiz: {
      question: "金城老師為什麼讓茶樹比一般高？",
      options: [
        "避開太陽直曬",
        "減少除草次數",
        "美觀",
        "保護茶香"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    name: "1792 茶園｜從農會出發的新世代茶力",
    description: "由黃土水總幹事創立，致力推廣深坑茶的文化與教育。2024年榮獲文山包種茶比賽特等獎，並推動年輕族群參與茶事。",
    lat: 300,
    lng: 600,
    category: "tea",
    mission: "參加採茶體驗，並拍下你製作的第一包茶！",
    quiz: {
      question: "1792茶園創立者是誰？",
      options: [
        "金城老師",
        "黃土水",
        "燕子",
        "陳春發"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    name: "青山香草教育農園｜香氣與生命的療癒基地",
    description: "園長「燕子」將祖傳茶園轉型為有機香草園。園內種植各類香草、復育艷紅鹿子百合，並開發香草養生茶與冰品，推廣土地與人共好的理念。青山香草農園位於深坑阿柔洋大道最高點，海拔約 480 公尺，居高臨下俯瞰阿柔坑溪谷，視野遼闊，可遠眺貓空、石碇、汐止等地田野風光。鄰近筆架山、二格山、猴山岳等多條親山步道，是休閒賞景的絕佳地點。",
    lat: 500,
    lng: 350,
    category: "tea",
    mission: "選一株你最喜歡的香草，寫下它的香氣聯想！",
    quiz: {
      question: "燕子在哪裡學習香草知識？",
      options: [
        "國內農業所",
        "法國香氛學校",
        "台東",
        "日本香道館"
      ],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    name: "石媽祖步道｜有香氣與傳說的輕健行",
    description: "石媽祖步道入口在阿柔洋產業道路約 450公尺處，步道終點為鎮南宮石媽祖廟，沿路兩側桂花樹撲鼻，風景優美，步行來回約 30 分鐘，適合親子健行。",
    lat: 600,
    lng: 500,
    category: "family",
    mission: "和家人一起找出最多桂花的地方拍合照。",
    quiz: {
      question: "鎮南宮的媽祖像是一塊什麼？",
      options: [
        "青銅",
        "木雕",
        "風化石",
        "紙紮"
      ],
      correctAnswer: 3
    }
  },
  {
    id: 5,
    name: "龍鳳寺",
    description: "當地居民信仰中心，香火鼎盛，歷史悠久。",
    lat: 450,
    lng: 700,
    category: "story",
    mission: "找出寺廟中最古老的一座神像，了解其歷史。",
    quiz: {
      question: "龍鳳寺主要供奉哪位神明？",
      options: [
        "觀音菩薩",
        "媽祖",
        "關聖帝君",
        "玉皇大帝"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    name: "茶葉製作坊",
    description: "傳統製茶技藝展示，可親手體驗揉茶、烘茶過程。",
    lat: 350,
    lng: 400,
    category: "tea",
    mission: "參與一次製茶體驗，拍下你的作品。",
    quiz: {
      question: "阿柔茶區最著名的茶葉是哪一種？",
      options: [
        "東方美人茶",
        "鐵觀音",
        "阿里山高山茶",
        "文山包種茶"
      ],
      correctAnswer: 3
    }
  },
  {
    id: 7,
    name: "森林探險區",
    description: "各種難度的健行路線，挑戰自我的最佳選擇。",
    lat: 250,
    lng: 500,
    category: "hiking",
    mission: "完成森林探險區的健行路線，拍下路標照片。",
    quiz: {
      question: "森林探險區的主要樹種是什麼？",
      options: [
        "杉木",
        "櫸木",
        "樟樹",
        "相思樹"
      ],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    name: "兒童冒險樂園",
    description: "天然素材打造的遊樂設施，讓孩子盡情玩耍。",
    lat: 550,
    lng: 600,
    category: "family",
    mission: "挑戰樂園中的繩索橋，拍照留念。",
    quiz: {
      question: "兒童冒險樂園使用了哪種環保材料建造？",
      options: [
        "回收塑料",
        "天然木材",
        "竹子",
        "以上皆是"
      ],
      correctAnswer: 3
    }
  }
];

export default spots;
