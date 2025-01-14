const mandarinData = [
    {
      "hanzi": "一",
      "pinyin": ["yī"],
      "en": ["one"]
    },
    {
      "hanzi": "二",
      "pinyin": ["èr"],
      "en": ["two"]
    },
    {
      "hanzi": "三",
      "pinyin": ["sān"],
      "en": ["three"]
    },
    {
      "hanzi": "四",
      "pinyin": ["sì"],
      "en": ["four"]
    },
    {
      "hanzi": "五",
      "pinyin": ["wǔ"],
      "en": ["five"]
    },
    {
      "hanzi": "六",
      "pinyin": ["liù"],
      "en": ["six"]
    },
    {
      "hanzi": "七",
      "pinyin": ["qī"],
      "en": ["seven"]
    },
    {
      "hanzi": "八",
      "pinyin": ["bā"],
      "en": ["eight"]
    },
    {
      "hanzi": "九",
      "pinyin": ["jiǔ"],
      "en": ["nine"]
    },
    {
      "hanzi": "十",
      "pinyin": ["shí"],
      "en": ["ten"]
    },
    {
      "hanzi": "百",
      "pinyin": ["bǎi"],
      "en": ["hundred"]
    },
    {
      "hanzi": "千",
      "pinyin": ["qiān"],
      "en": ["thousand"]
    },
    {
      "hanzi": "万",
      "pinyin": ["wàn"],
      "en": ["ten thousand"]
    },
    {
      "hanzi": "不",
      "pinyin": ["bù"],
      "en": ["not"]
    },
    {
      "hanzi": "是",
      "pinyin": ["shì"],
      "en": ["to be"]
    },
    {
      "hanzi": "了",
      "pinyin": ["le", "liǎo"],
      "en": ["past tense marker", "completed action"]
    },
    {
      "hanzi": "也",
      "pinyin": ["yě"],
      "en": ["also", "too"]
    },
    {
      "hanzi": "和",
      "pinyin": ["hé"],
      "en": ["and"]
    },
    {
      "hanzi": "有",
      "pinyin": ["yǒu"],
      "en": ["to have"]
    },
    {
      "hanzi": "在",
      "pinyin": ["zài"],
      "en": ["at", "in", "on"]
    },
    {
      "hanzi": "人",
      "pinyin": ["rén"],
      "en": ["person"]
    },
    {
      "hanzi": "他",
      "pinyin": ["tā"],
      "en": ["he"]
    },
    {
      "hanzi": "她",
      "pinyin": ["tā"],
      "en": ["she"]
    },
    {
      "hanzi": "它",
      "pinyin": ["tā"],
      "en": ["it"]
    },
    {
      "hanzi": "这",
      "pinyin": ["zhè", "zhèi"],
      "en": ["this"]
    },
    {
      "hanzi": "那",
      "pinyin": ["nà", "nèi"],
      "en": ["that"]
    },
    {
      "hanzi": "我",
      "pinyin": ["wǒ"],
      "en": ["I", "me"]
    },
    {
      "hanzi": "们",
      "pinyin": ["men"],
      "en": ["plural marker for pronouns"]
    },
    {
      "hanzi": "你",
      "pinyin": ["nǐ"],
      "en": ["you"]
    },
    {
      "hanzi": "好",
      "pinyin": ["hǎo"],
      "en": ["good"]
    },
    {
      "hanzi": "很",
      "pinyin": ["hěn"],
      "en": ["very"]
    },
    {
      "hanzi": "大",
      "pinyin": ["dà"],
      "en": ["big"]
    },
    {
      "hanzi": "小",
      "pinyin": ["xiǎo"],
      "en": ["small"]
    },
    {
      "hanzi": "个",
      "pinyin": ["gè"],
      "en": ["classifier for people or objects"]
    },
    {
      "hanzi": "的",
      "pinyin": ["de"],
      "en": ["possessive particle", "adjectival suffix"]
    },
    {
      "hanzi": "地",
      "pinyin": ["de"],
      "en": ["adverbial suffix"]
    },
    {
      "hanzi": "得",
      "pinyin": ["dé"],
      "en": ["to obtain", "to get"]
    },
    {
      "hanzi": "到",
      "pinyin": ["dào"],
      "en": ["to arrive", "to go to"]
    },
    {
      "hanzi": "去",
      "pinyin": ["qù"],
      "en": ["to go"]
    },
    {
      "hanzi": "来",
      "pinyin": ["lái"],
      "en": ["to come"]
    },
    {
      "hanzi": "看",
      "pinyin": ["kàn"],
      "en": ["to look at", "to see"]
    },
    {
      "hanzi": "见",
      "pinyin": ["jiàn"],
      "en": ["to see", "to meet"]
    },
    {
      "hanzi": "说",
      "pinyin": ["shuō"],
      "en": ["to speak", "to say"]
    },
    {
      "hanzi": "话",
      "pinyin": ["huà"],
      "en": ["speech", "language"]
    },
    {
      "hanzi": "问",
      "pinyin": ["wèn"],
      "en": ["to ask"]
    },
    {
      "hanzi": "请",
      "pinyin": ["qǐng"],
      "en": ["please"]
    },
    {
      "hanzi": "让",
      "pinyin": ["ràng"],
      "en": ["to let", "to allow"]
    },
    {
      "hanzi": "年",
      "pinyin": ["nián"],
      "en": ["year"]
    },
    {
      "hanzi": "月",
      "pinyin": ["yuè"],
      "en": ["month"]
    },
    {
      "hanzi": "日",
      "pinyin": ["rì"],
      "en": ["day"]
    },
    {
      "hanzi": "天",
      "pinyin": ["tiān"],
      "en": ["day", "sky"]
    },
    {
      "hanzi": "星期",
      "pinyin": ["xīngqī"],
      "en": ["week"]
    },
    {
      "hanzi": "号",
      "pinyin": ["hào"],
      "en": ["date"]
    },
    {
      "hanzi": "点",
      "pinyin": ["diǎn"],
      "en": ["hour", "o'clock"]
    },
    {
      "hanzi": "分",
      "pinyin": ["fēn"],
      "en": ["minute"]
    },
    {
      "hanzi": "早",
      "pinyin": ["zǎo"],
      "en": ["early"]
    },
    {
      "hanzi": "晚",
      "pinyin": ["wǎn"],
      "en": ["late"]
    },
    {
      "hanzi": "现在",
      "pinyin": ["xiànzài"],
      "en": ["now"]
    },
    {
      "hanzi": "今天",
      "pinyin": ["jīntiān"],
      "en": ["today"]
    },
    {
      "hanzi": "明天",
      "pinyin": ["míngtiān"],
      "en": ["tomorrow"]
    },
    {
      "hanzi": "昨天",
      "pinyin": ["zuótiān"],
      "en": ["yesterday"]
    },
    {
      "hanzi": "去年",
      "pinyin": ["qùnián"],
      "en": ["last year"]
    },
    {
      "hanzi": "今年",
      "pinyin": ["jīnnián"],
      "en": ["this year"]
    },
    {
      "hanzi": "明年",
      "pinyin": ["míngnián"],
      "en": ["next year"]
    },
    {
      "hanzi": "什么",
      "pinyin": ["shénme"],
      "en": ["what"]
    },
    {
      "hanzi": "哪",
      "pinyin": ["nǎ", "něi"],
      "en": ["which"]
    },
    {
      "hanzi": "谁",
      "pinyin": ["shéi", "shuí"],
      "en": ["who"]
    },
    {
      "hanzi": "几",
      "pinyin": ["jǐ"],
      "en": ["how many"]
    },
    {
      "hanzi": "多",
      "pinyin": ["duō"],
      "en": ["many", "much"]
    },
    {
      "hanzi": "太",
      "pinyin": ["tài"],
      "en": ["too", "very"]
    },
    {
      "hanzi": "可以",
      "pinyin": ["kěyǐ"],
      "en": ["can", "may"]
    },
    {
      "hanzi": "能",
      "pinyin": ["néng"],
      "en": ["can", "able to"]
    },
    {
      "hanzi": "会",
      "pinyin": ["huì"],
      "en": ["can", "will", "meeting"]
    },
    {
      "hanzi": "要",
      "pinyin": ["yào"],
      "en": ["want", "need"]
    },
    {
      "hanzi": "想",
      "pinyin": ["xiǎng"],
      "en": ["think", "want"]
    },
    {
      "hanzi": "应该",
      "pinyin": ["yīnggāi"],
      "en": ["should"]
    },
    {
      "hanzi": "都",
      "pinyin": ["dōu"],
      "en": ["all", "both"]
    },
    {
      "hanzi": "还",
      "pinyin": ["hái"],
      "en": ["still", "also"]
    },
    {
      "hanzi": "最",
      "pinyin": ["zuì"],
      "en": ["most"]
    },
    {
      "hanzi": "比",
      "pinyin": ["bǐ"],
      "en": ["than", "compare"]
    },
    {
      "hanzi": "又",
      "pinyin": ["yòu"],
      "en": ["again"]
    },
    {
      "hanzi": "再",
      "pinyin": ["zài"],
      "en": ["again"]
    },
    {
      "hanzi": "就",
      "pinyin": ["jiù"],
      "en": ["then", "right away"]
    },
    {
      "hanzi": "才",
      "pinyin": ["cái"],
      "en": ["just", "only"]
    },
    {
      "hanzi": "因为",
      "pinyin": ["yīnwèi"],
      "en": ["because"]
    },
    {
      "hanzi": "所以",
      "pinyin": ["suǒyǐ"],
      "en": ["so", "therefore"]
    },
    {
      "hanzi": "虽然",
      "pinyin": ["suīrán"],
      "en": ["although"]
    },
    {
      "hanzi": "但是",
      "pinyin": ["dànshì"],
      "en": ["but"]
    },
    {
      "hanzi": "而且",
      "pinyin": ["érqiě"],
      "en": ["and", "moreover"]
    },
    {
      "hanzi": "如果",
      "pinyin": ["rúguǒ"],
      "en": ["if"]
    },
    {
      "hanzi": "或者",
      "pinyin": ["huòzhě"],
      "en": ["or"]
    },
    {
      "hanzi": "和",
      "pinyin": ["hé"],
      "en": ["and"]
    },
    {
      "hanzi": "跟",
      "pinyin": ["gēn"],
      "en": ["with"]
    },
    {
      "hanzi": "同",
      "pinyin": ["tóng"],
      "en": ["same", "together with"]
    },
    {
      "hanzi": "家",
      "pinyin": ["jiā"],
      "en": ["family", "home"]
    },
    {
      "hanzi": "学校",
      "pinyin": ["xuéxiào"],
      "en": ["school"]
    },
    {
      "hanzi": "老师",
      "pinyin": ["lǎoshī"],
      "en": ["teacher"]
    },
    {
      "hanzi": "学生",
      "pinyin": ["xuéshēng"],
      "en": ["student"]
    },
    {
      "hanzi": "朋友",
      "pinyin": ["péngyǒu"],
      "en": ["friend"]
    },
    {
      "hanzi": "工作",
      "pinyin": ["gōngzuò"],
      "en": ["work"]
    },
    {
      "hanzi": "公司",
      "pinyin": ["gōngsī"],
      "en": ["company"]
    },
    {
      "hanzi": "国家",
      "pinyin": ["guójiā"],
      "en": ["country"]
    },
    {
      "hanzi": "北京",
      "pinyin": ["Běijīng"],
      "en": ["Beijing"]
    },
    {
      "hanzi": "上海",
      "pinyin": ["Shànghǎi"],
      "en": ["Shanghai"]
    },
    {
      "hanzi": "中国",
      "pinyin": ["Zhōngguó"],
      "en": ["China"]
    },
    {
      "hanzi": "美国",
      "pinyin": ["Měiguó"],
      "en": ["United States"]
    },
    {
      "hanzi": "英国",
      "pinyin": ["Yīngguó"],
      "en": ["United Kingdom"]
    },
    {
      "hanzi": "日本",
      "pinyin": ["Rìběn"],
      "en": ["Japan"]
    },
    {
      "hanzi": "韩国",
      "pinyin": ["Hánguó"],
      "en": ["South Korea"]
    },
    {
      "hanzi": "吃饭",
      "pinyin": ["chīfàn"],
      "en": ["eat"]
    },
    {
      "hanzi": "喝水",
      "pinyin": ["hēshuǐ"],
      "en": ["drink water"]
    },
    {
      "hanzi": "喜欢",
      "pinyin": ["xǐhuān"],
      "en": ["like"]
    },
    {
      "hanzi": "爱",
      "pinyin": ["ài"],
      "en": ["love"]
    },
    {
      "hanzi": "知道",
      "pinyin": ["zhīdào"],
      "en": ["know"]
    },
    {
      "hanzi": "学习",
      "pinyin": ["xuéxí"],
      "en": ["study", "learn"]
    },
    {
      "hanzi": "明白",
      "pinyin": ["míngbái"],
      "en": ["understand"]
    },
    {
      "hanzi": "休息",
      "pinyin": ["xiūxí"],
      "en": ["rest"]
    },
    {
      "hanzi": "玩",
      "pinyin": ["wán"],
      "en": ["play"]
    },
    {
      "hanzi": "谢谢",
      "pinyin": ["xièxiè"],
      "en": ["thank you"]
    },
    {
      "hanzi": "对不起",
      "pinyin": ["duìbùqǐ"],
      "en": ["sorry"]
    },
    {
      "hanzi": "再见",
      "pinyin": ["zàijiàn"],
      "en": ["goodbye"]
    },
    {
      "hanzi": "妈妈",
      "pinyin": ["māma"],
      "en": ["mother"]
    },
    {
      "hanzi": "爸爸",
      "pinyin": ["bàba"],
      "en": ["father"]
    },
    {
      "hanzi": "儿子",
      "pinyin": ["érzi"],
      "en": ["son"]
    },
    {
      "hanzi": "女儿",
      "pinyin": ["nǚ'ér"],
      "en": ["daughter"]
    },
    {
      "hanzi": "先生",
      "pinyin": ["xiānsheng"],
      "en": ["Mr.", "Sir"]
    },
    {
      "hanzi": "小姐",
      "pinyin": ["xiǎojiě"],
      "en": ["Miss", "Ms."]
    },
    {
      "hanzi": "火车",
      "pinyin": ["huǒchē"],
      "en": ["train"]
    },
    {
      "hanzi": "汽车",
      "pinyin": ["qìchē"],
      "en": ["car"]
    },
    {
      "hanzi": "飞机",
      "pinyin": ["fēijī"],
      "en": ["airplane"]
    },
    {
      "hanzi": "自行车",
      "pinyin": ["zìxíngchē"],
      "en": ["bicycle"]
    },
    {
      "hanzi": "出租车",
      "pinyin": ["chūzūchē"],
      "en": ["taxi"]
    },
    {
      "hanzi": "马",
      "pinyin": ["mǎ"],
      "en": ["horse"]
    },
    {
      "hanzi": "狗",
      "pinyin": ["gǒu"],
      "en": ["dog"]
    },
    {
      "hanzi": "猫",
      "pinyin": ["māo"],
      "en": ["cat"]
    },
    {
      "hanzi": "鸟",
      "pinyin": ["niǎo"],
      "en": ["bird"]
    },
    {
      "hanzi": "花",
      "pinyin": ["huā"],
      "en": ["flower"]
    },
    {
      "hanzi": "树",
      "pinyin": ["shù"],
      "en": ["tree"]
    },
    {
      "hanzi": "山",
      "pinyin": ["shān"],
      "en": ["mountain"]
    },
    {
      "hanzi": "水",
      "pinyin": ["shuǐ"],
      "en": ["water"]
    },
    {
      "hanzi": "火",
      "pinyin": ["huǒ"],
      "en": ["fire"]
    },
    {
      "hanzi": "雨",
      "pinyin": ["yǔ"],
      "en": ["rain"]
    },
    {
      "hanzi": "雪",
      "pinyin": ["xuě"],
      "en": ["snow"]
    },
    {
      "hanzi": "冷",
      "pinyin": ["lěng"],
      "en": ["cold"]
    },
    {
      "hanzi": "热",
      "pinyin": ["rè"],
      "en": ["hot"]
    },
    {
      "hanzi": "凉",
      "pinyin": ["liáng"],
      "en": ["cool"]
    },
    {
      "hanzi": "暖",
      "pinyin": ["nuǎn"],
      "en": ["warm"]
    },
    {
      "hanzi": "快",
      "pinyin": ["kuài"],
      "en": ["fast", "quick"]
    },
    {
      "hanzi": "慢",
      "pinyin": ["màn"],
      "en": ["slow"]
    },
    {
      "hanzi": "高",
      "pinyin": ["gāo"],
      "en": ["high", "tall"]
    },
    {
      "hanzi": "低",
      "pinyin": ["dī"],
      "en": ["low"]
    },
    {
      "hanzi": "长",
      "pinyin": ["cháng"],
      "en": ["long"]
    },
    {
      "hanzi": "短",
      "pinyin": ["duǎn"],
      "en": ["short"]
    },
    {
      "hanzi": "新",
      "pinyin": ["xīn"],
      "en": ["new"]
    },
    {
      "hanzi": "旧",
      "pinyin": ["jiù"],
      "en": ["old"]
    },
    {
      "hanzi": "干净",
      "pinyin": ["gānjìng"],
      "en": ["clean"]
    },
    {
      "hanzi": "脏",
      "pinyin": ["zāng"],
      "en": ["dirty"]
    },
    {
      "hanzi": "难",
      "pinyin": ["nán"],
      "en": ["difficult"]
    },
    {
      "hanzi": "容易",
      "pinyin": ["róngyì"],
      "en": ["easy"]
    },
    {
      "hanzi": "对",
      "pinyin": ["duì"],
      "en": ["correct", "right"]
    },
    {
      "hanzi": "错",
      "pinyin": ["cuò"],
      "en": ["wrong"]
    },
    {
      "hanzi": "贵",
      "pinyin": ["guì"],
      "en": ["expensive"]
    },
    {
      "hanzi": "便宜",
      "pinyin": ["piányi"],
      "en": ["cheap"]
    },
    {
      "hanzi": "远",
      "pinyin": ["yuǎn"],
      "en": ["far"]
    },
    {
      "hanzi": "近",
      "pinyin": ["jìn"],
      "en": ["near"]
    }
  ];