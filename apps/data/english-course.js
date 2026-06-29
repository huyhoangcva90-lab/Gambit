window.ENGLISH_COURSE = [
  {
    id:"present-simple",level:"A2",title:"Present simple",vi:"Hiện tại đơn",
    goal:"Nói về thói quen, sự thật và lịch cố định.",
    formula:["I/You/We/They + verb","He/She/It + verb-s","Do/Does + subject + verb?"],
    examples:[
      ["I usually work from home on Fridays.","Tôi thường làm việc ở nhà vào thứ Sáu."],
      ["She doesn't drink coffee after lunch.","Cô ấy không uống cà phê sau bữa trưa."],
      ["What time does the meeting start?","Cuộc họp bắt đầu lúc mấy giờ?"]
    ],
    tip:"Với he/she/it, thêm -s vào động từ. Sau does/doesn't, động từ trở về nguyên mẫu.",
    mistakes:["She work here.","Does he works here?"],
    questions:[
      {type:"choice",q:"My brother ___ in Singapore.",options:["work","works","is work","working"],answer:"works",why:"My brother = he, nên động từ thêm -s."},
      {type:"choice",q:"___ you usually cook at home?",options:["Are","Do","Does","Did"],answer:"Do",why:"Câu hỏi hiện tại đơn với you dùng Do."},
      {type:"input",q:"Complete: She ___ (not / like) crowded places.",answer:"doesn't like",accept:["does not like"],why:"Sau doesn't dùng động từ nguyên mẫu: like."},
      {type:"choice",q:"Which sentence is correct?",options:["He go to work by bus.","He goes to work by bus.","He does goes to work by bus.","He going to work by bus."],answer:"He goes to work by bus.",why:"He + goes trong câu khẳng định."}
    ]
  },
  {
    id:"present-continuous",level:"A2",title:"Present continuous",vi:"Hiện tại tiếp diễn",
    goal:"Nói việc đang xảy ra hoặc tình huống tạm thời.",
    formula:["am/is/are + verb-ing","am/is/are not + verb-ing","Am/Is/Are + subject + verb-ing?"],
    examples:[
      ["I'm waiting for a friend.","Tôi đang đợi một người bạn."],
      ["We're staying in Hanoi this week.","Tuần này chúng tôi đang ở Hà Nội."],
      ["Are you using this chair?","Bạn có đang dùng chiếc ghế này không?"]
    ],
    tip:"Không thường dùng tiếp diễn với know, like, believe, understand.",
    mistakes:["I am know the answer.","She working now."],
    questions:[
      {type:"choice",q:"Please be quiet. I ___ to concentrate.",options:["try","am trying","trying","do try"],answer:"am trying",why:"Việc đang xảy ra ngay lúc nói."},
      {type:"input",q:"Complete: They ___ (stay) with friends this month.",answer:"are staying",why:"Tình huống tạm thời dùng hiện tại tiếp diễn."},
      {type:"choice",q:"Which sentence is natural?",options:["I am understanding you.","I understand you.","I understanding you.","I do understanding you."],answer:"I understand you.",why:"Understand là stative verb, thường không dùng tiếp diễn."},
      {type:"choice",q:"___ she working today?",options:["Does","Do","Is","Has"],answer:"Is",why:"Câu hỏi tiếp diễn bắt đầu bằng Is."}
    ]
  },
  {
    id:"past-simple",level:"A2",title:"Past simple",vi:"Quá khứ đơn",
    goal:"Kể sự việc đã kết thúc tại một thời điểm trong quá khứ.",
    formula:["subject + verb-ed / V2","didn't + verb","Did + subject + verb?"],
    examples:[
      ["I moved here two years ago.","Tôi chuyển đến đây hai năm trước."],
      ["We didn't have enough time.","Chúng tôi đã không có đủ thời gian."],
      ["Did you enjoy the movie?","Bạn có thích bộ phim không?"]
    ],
    tip:"Sau did/didn't luôn dùng động từ nguyên mẫu, không dùng V2.",
    mistakes:["I didn't went.","Did you saw it?"],
    questions:[
      {type:"choice",q:"We ___ that restaurant last night.",options:["try","tried","have tried","trying"],answer:"tried",why:"Last night là thời điểm quá khứ đã kết thúc."},
      {type:"input",q:"Complete: I ___ (not / see) your message yesterday.",answer:"didn't see",accept:["did not see"],why:"Didn't + động từ nguyên mẫu."},
      {type:"choice",q:"___ you call her back?",options:["Do","Were","Did","Have"],answer:"Did",why:"Câu hỏi quá khứ đơn dùng Did."},
      {type:"choice",q:"Choose the correct sentence.",options:["She didn't knew.","She didn't know.","She doesn't knew.","She not knew."],answer:"She didn't know.",why:"Sau didn't dùng know, không dùng knew."}
    ]
  },
  {
    id:"past-continuous",level:"A2",title:"Past continuous",vi:"Quá khứ tiếp diễn",
    goal:"Mô tả việc đang diễn ra tại một thời điểm quá khứ.",
    formula:["was/were + verb-ing","while + past continuous","when + past simple"],
    examples:[
      ["I was driving when you called.","Tôi đang lái xe khi bạn gọi."],
      ["They were talking while I was working.","Họ đang nói chuyện trong khi tôi làm việc."],
      ["What were you doing at eight?","Lúc tám giờ bạn đang làm gì?"]
    ],
    tip:"Dùng tiếp diễn làm bối cảnh; sự việc ngắn chen vào thường dùng quá khứ đơn.",
    mistakes:["I was drive when...","When I was arrived..."],
    questions:[
      {type:"choice",q:"I ___ dinner when the lights went out.",options:["cooked","was cooking","am cooking","have cooked"],answer:"was cooking",why:"Việc nấu ăn đang diễn ra khi mất điện."},
      {type:"input",q:"Complete: They ___ (sleep) at midnight.",answer:"were sleeping",why:"They + were + sleeping."},
      {type:"choice",q:"While we ___, it started to rain.",options:["walked","were walking","are walking","have walked"],answer:"were walking",why:"While thường giới thiệu hành động đang diễn ra."},
      {type:"choice",q:"Which action interrupted the other?",options:["The phone rang.","I was taking a shower.","Both are continuous.","Neither action."],answer:"The phone rang.",why:"Rang là hành động ngắn chen vào."}
    ]
  },
  {
    id:"present-perfect",level:"B1",title:"Present perfect",vi:"Hiện tại hoàn thành",
    goal:"Nối quá khứ với hiện tại: trải nghiệm, kết quả, khoảng thời gian chưa kết thúc.",
    formula:["have/has + past participle","have/has never + V3","Have/Has + subject + V3?"],
    examples:[
      ["I've visited Thailand three times.","Tôi đã đến Thái Lan ba lần."],
      ["She hasn't finished the report yet.","Cô ấy vẫn chưa hoàn thành báo cáo."],
      ["Have you ever tried surfing?","Bạn đã từng thử lướt sóng chưa?"]
    ],
    tip:"Không dùng present perfect với yesterday, last year, in 2020 vì đó là thời gian đã kết thúc.",
    mistakes:["I have seen him yesterday.","She has went home."],
    questions:[
      {type:"choice",q:"I ___ this movie before.",options:["saw","have seen","am seeing","see"],answer:"have seen",why:"Before không nêu thời điểm cụ thể; nói trải nghiệm."},
      {type:"input",q:"Complete: She ___ (not / reply) yet.",answer:"hasn't replied",accept:["has not replied"],why:"Yet thường đi với present perfect trong câu phủ định."},
      {type:"choice",q:"Which sentence is correct?",options:["I have met him last week.","I met him last week.","I have meet him last week.","I did met him last week."],answer:"I met him last week.",why:"Last week đã kết thúc nên dùng past simple."},
      {type:"choice",q:"___ you ever been to Japan?",options:["Did","Do","Have","Are"],answer:"Have",why:"Have you ever + V3 hỏi trải nghiệm."}
    ]
  },
  {
    id:"for-since",level:"B1",title:"For and since",vi:"For và since",
    goal:"Nói một tình trạng kéo dài bao lâu hoặc bắt đầu từ khi nào.",
    formula:["for + khoảng thời gian","since + mốc thời gian","have/has + V3 + for/since"],
    examples:[
      ["I've lived here for five years.","Tôi đã sống ở đây được năm năm."],
      ["We've known each other since college.","Chúng tôi quen nhau từ thời đại học."],
      ["How long have you worked here?","Bạn làm ở đây được bao lâu rồi?"]
    ],
    tip:"For = trong bao lâu. Since = kể từ mốc nào.",
    mistakes:["since three years","for 2022"],
    questions:[
      {type:"choice",q:"I've had this phone ___ 2023.",options:["for","since","during","from"],answer:"since",why:"2023 là một mốc thời gian."},
      {type:"choice",q:"We've been waiting ___ twenty minutes.",options:["since","for","from","at"],answer:"for",why:"Twenty minutes là một khoảng thời gian."},
      {type:"input",q:"Complete: She has worked here ___ March.",answer:"since",why:"March là mốc bắt đầu."},
      {type:"choice",q:"How long ___ you known him?",options:["did","do","have","are"],answer:"have",why:"Tình trạng bắt đầu trong quá khứ và còn đúng hiện tại."}
    ]
  },
  {
    id:"future-forms",level:"B1",title:"Will, going to, present continuous",vi:"Các cách nói tương lai",
    goal:"Phân biệt quyết định tức thời, dự định và lịch đã sắp xếp.",
    formula:["will + verb: quyết định/dự đoán","be going to + verb: dự định/dấu hiệu","present continuous: lịch cá nhân đã chốt"],
    examples:[
      ["I'll answer the phone.","Tôi sẽ nghe điện thoại."],
      ["I'm going to learn to drive.","Tôi định học lái xe."],
      ["I'm meeting Sarah at six.","Tôi sẽ gặp Sarah lúc sáu giờ."]
    ],
    tip:"Đừng dùng will cho mọi câu tương lai. Chọn theo ý nghĩa của kế hoạch.",
    mistakes:["I will going to...","I am meet him tomorrow."],
    questions:[
      {type:"choice",q:"The phone is ringing. I ___ get it.",options:["am going to","will","am","do"],answer:"will",why:"Quyết định ngay lúc nói dùng will."},
      {type:"choice",q:"Look at those clouds. It ___ rain.",options:["will to","is going to","is raining tomorrow","goes to"],answer:"is going to",why:"Có dấu hiệu hiện tại rõ ràng."},
      {type:"input",q:"Complete: I ___ (meet) my manager at 3 p.m. tomorrow.",answer:"am meeting",why:"Cuộc hẹn đã sắp xếp dùng present continuous."},
      {type:"choice",q:"Which expresses a prior intention?",options:["I'll open the door.","I'm going to start a course.","The train leaves at nine.","It might rain."],answer:"I'm going to start a course.",why:"Going to diễn tả dự định đã có trước."}
    ]
  },
  {
    id:"modals",level:"A2",title:"Can, could and should",vi:"Động từ khuyết thiếu cơ bản",
    goal:"Nói khả năng, yêu cầu lịch sự và lời khuyên.",
    formula:["can + verb","could + verb","should + verb"],
    examples:[
      ["I can understand most of it.","Tôi có thể hiểu phần lớn nội dung."],
      ["Could you speak more slowly?","Bạn có thể nói chậm hơn không?"],
      ["You should get some rest.","Bạn nên nghỉ ngơi một chút."]
    ],
    tip:"Sau modal verb dùng động từ nguyên mẫu, không có to và không thêm -s.",
    mistakes:["He can speaks.","You should to go."],
    questions:[
      {type:"choice",q:"She ___ speak three languages.",options:["can","cans","can to","is can"],answer:"can",why:"Can + động từ nguyên mẫu."},
      {type:"choice",q:"___ you help me with this, please?",options:["Should","Could","Must to","Are"],answer:"Could",why:"Could tạo yêu cầu lịch sự."},
      {type:"input",q:"Complete: You ___ (should / check) the address.",answer:"should check",why:"Should + check, không dùng to."},
      {type:"choice",q:"Which sentence is correct?",options:["He can drives.","He can to drive.","He can drive.","He cans drive."],answer:"He can drive.",why:"Modal + bare infinitive."}
    ]
  },
  {
    id:"must-have-to",level:"B1",title:"Must and have to",vi:"Nghĩa vụ và cấm đoán",
    goal:"Nói điều bắt buộc, không cần thiết hoặc bị cấm.",
    formula:["must / have to + verb","don't have to = không cần","mustn't = không được"],
    examples:[
      ["I have to finish this today.","Tôi phải hoàn thành việc này hôm nay."],
      ["You don't have to bring anything.","Bạn không cần mang gì cả."],
      ["You mustn't park here.","Bạn không được đỗ xe ở đây."]
    ],
    tip:"Don't have to và mustn't không giống nhau: một bên không cần, một bên bị cấm.",
    mistakes:["You don't must go.","You mustn't go = you don't need to go."],
    questions:[
      {type:"choice",q:"You ___ show your passport at immigration.",options:["have to","don't have to","mustn't","shouldn't"],answer:"have to",why:"Đây là yêu cầu bắt buộc."},
      {type:"choice",q:"You ___ wear a suit. The office is casual.",options:["mustn't","don't have to","must","have to"],answer:"don't have to",why:"Không bắt buộc, nhưng vẫn có thể mặc."},
      {type:"choice",q:"You ___ share your password with anyone.",options:["don't have to","mustn't","can","could"],answer:"mustn't",why:"Mustn't diễn tả cấm đoán."},
      {type:"input",q:"Complete: I ___ leave early because I have an appointment.",answer:"have to",why:"Have to diễn tả nghĩa vụ do hoàn cảnh."}
    ]
  },
  {
    id:"articles",level:"B1",title:"A, an and the",vi:"Mạo từ",
    goal:"Dùng mạo từ khi nhắc một vật lần đầu, vật cụ thể hoặc nói chung.",
    formula:["a/an + danh từ đếm được số ít","the + đối tượng đã xác định","không mạo từ khi nói chung với danh từ số nhiều/không đếm được"],
    examples:[
      ["I saw a dog. The dog was very friendly.","Tôi thấy một con chó. Con chó đó rất thân thiện."],
      ["Could you close the door?","Bạn đóng cánh cửa đó giúp tôi được không?"],
      ["Music helps me focus.","Âm nhạc giúp tôi tập trung."]
    ],
    tip:"A/an dựa vào âm, không chỉ dựa vào chữ: an hour nhưng a university.",
    mistakes:["I am engineer.","The life is short."],
    questions:[
      {type:"choice",q:"She's ___ engineer.",options:["a","an","the","no article"],answer:"an",why:"Engineer bắt đầu bằng nguyên âm và là nghề số ít."},
      {type:"choice",q:"I bought a book. ___ book is about design.",options:["A","An","The","No article"],answer:"The",why:"Lần hai đã xác định cuốn sách nào."},
      {type:"input",q:"Complete: ___ information you sent was useful.",answer:"the",why:"Thông tin cụ thể mà người nghe đã gửi."},
      {type:"choice",q:"Which is correct?",options:["I love the music in general.","I love music.","I love a music.","I love an music."],answer:"I love music.",why:"Nói về âm nhạc nói chung không dùng mạo từ."}
    ]
  },
  {
    id:"countable",level:"A2",title:"Countable and uncountable",vi:"Danh từ đếm được và không đếm được",
    goal:"Dùng đúng much, many, a few, a little và lượng từ.",
    formula:["many/few + danh từ đếm được","much/little + danh từ không đếm được","a lot of + cả hai"],
    examples:[
      ["We don't have much time.","Chúng ta không có nhiều thời gian."],
      ["I have a few questions.","Tôi có vài câu hỏi."],
      ["Could I have some water?","Cho tôi xin một ít nước được không?"]
    ],
    tip:"Advice, information, furniture, homework là không đếm được trong tiếng Anh.",
    mistakes:["an advice","many information"],
    questions:[
      {type:"choice",q:"I need ___ information before I decide.",options:["a few","an","some","many"],answer:"some",why:"Information không đếm được."},
      {type:"choice",q:"How ___ people are coming?",options:["much","many","little","any of"],answer:"many",why:"People là danh từ đếm được số nhiều."},
      {type:"input",q:"Complete: We only have ___ time left. (một ít)",answer:"a little",why:"Time không đếm được; a little mang nghĩa còn một ít."},
      {type:"choice",q:"Which phrase is correct?",options:["an advice","a piece of advice","many advice","two advices"],answer:"a piece of advice",why:"Advice không đếm được; dùng a piece of."}
    ]
  },
  {
    id:"comparatives",level:"A2",title:"Comparatives and superlatives",vi:"So sánh hơn và nhất",
    goal:"So sánh người, vật và lựa chọn.",
    formula:["short adjective + -er/-est","more/most + long adjective","as + adjective + as"],
    examples:[
      ["This option is cheaper.","Lựa chọn này rẻ hơn."],
      ["It's the most useful app I've tried.","Đây là ứng dụng hữu ích nhất tôi từng thử."],
      ["The second task isn't as difficult as the first.","Bài thứ hai không khó bằng bài đầu."]
    ],
    tip:"Không dùng đồng thời more và -er: cheaper, không phải more cheaper.",
    mistakes:["more easier","the most fastest"],
    questions:[
      {type:"choice",q:"This route is ___ than the other one.",options:["short","shorter","more short","shortest"],answer:"shorter",why:"Tính từ ngắn thêm -er."},
      {type:"input",q:"Complete: This is the ___ (interesting) part.",answer:"most interesting",why:"Tính từ dài dùng most trong so sánh nhất."},
      {type:"choice",q:"My new job isn't ___ stressful as my old one.",options:["more","as","than","most"],answer:"as",why:"Cấu trúc not as + adjective + as."},
      {type:"choice",q:"Choose the correct form.",options:["more easier","easier","more easy","the easier than"],answer:"easier",why:"Easy đổi y thành i rồi thêm -er."}
    ]
  },
  {
    id:"conditionals-zero-one",level:"B1",title:"Zero and first conditional",vi:"Điều kiện loại 0 và 1",
    goal:"Nói sự thật chung và khả năng thực tế trong tương lai.",
    formula:["If + present, present","If + present, will + verb","will có thể đứng ở mệnh đề chính"],
    examples:[
      ["If I drink coffee late, I can't sleep.","Nếu uống cà phê muộn, tôi không ngủ được."],
      ["If it rains, we'll take a taxi.","Nếu trời mưa, chúng ta sẽ đi taxi."],
      ["I'll call you if I need help.","Tôi sẽ gọi nếu cần giúp đỡ."]
    ],
    tip:"Không dùng will ngay sau if trong first conditional.",
    mistakes:["If it will rain...","If I will have time..."],
    questions:[
      {type:"choice",q:"If you heat ice, it ___.",options:["will melt","melts","melted","would melt"],answer:"melts",why:"Sự thật khoa học dùng zero conditional."},
      {type:"choice",q:"If I finish early, I ___ you.",options:["call","called","will call","would call"],answer:"will call",why:"Khả năng thực tế tương lai dùng first conditional."},
      {type:"input",q:"Complete: If she ___ (be) free, she'll join us.",answer:"is",why:"Sau if dùng present simple, không dùng will."},
      {type:"choice",q:"Which is correct?",options:["If it will rain, we'll stay home.","If it rains, we'll stay home.","If it rain, we stay home tomorrow.","If it would rain, we'll stay."],answer:"If it rains, we'll stay home.",why:"If + present simple, will + verb."}
    ]
  },
  {
    id:"second-conditional",level:"B1",title:"Second conditional",vi:"Điều kiện loại 2",
    goal:"Nói tình huống giả định, khó xảy ra hoặc cho lời khuyên.",
    formula:["If + past simple, would + verb","If I were you, I would..."],
    examples:[
      ["If I had more time, I'd learn Spanish.","Nếu có nhiều thời gian hơn, tôi sẽ học tiếng Tây Ban Nha."],
      ["What would you do if you lost your phone?","Bạn sẽ làm gì nếu mất điện thoại?"],
      ["If I were you, I'd ask for help.","Nếu là bạn, tôi sẽ nhờ giúp đỡ."]
    ],
    tip:"Were thường dùng cho mọi chủ ngữ trong cấu trúc giả định trang trọng: If I were you.",
    mistakes:["If I would have...","If I was you, I will..."],
    questions:[
      {type:"choice",q:"If I ___ more confident, I'd speak more.",options:["am","were","will be","would be"],answer:"were",why:"Mệnh đề if của loại 2 dùng quá khứ."},
      {type:"input",q:"Complete: What ___ you do if you won?",answer:"would",why:"Mệnh đề chính dùng would + verb."},
      {type:"choice",q:"If I were you, I ___ that email again.",options:["check","will check","would check","checked"],answer:"would check",why:"Cấu trúc lời khuyên giả định."},
      {type:"choice",q:"Which is correct?",options:["If I would know, I'd tell you.","If I knew, I'd tell you.","If I know, I would told you.","If I knew, I will tell you."],answer:"If I knew, I'd tell you.",why:"If + past, would + verb."}
    ]
  },
  {
    id:"relative-clauses",level:"B1",title:"Relative clauses",vi:"Mệnh đề quan hệ",
    goal:"Nối thông tin về người, vật và nơi chốn tự nhiên hơn.",
    formula:["who + người","which/that + vật","where + nơi chốn"],
    examples:[
      ["She's the person who hired me.","Cô ấy là người đã tuyển tôi."],
      ["This is the book that I mentioned.","Đây là cuốn sách tôi đã nhắc."],
      ["That's the cafe where we first met.","Đó là quán cà phê nơi chúng tôi gặp nhau lần đầu."]
    ],
    tip:"Có thể bỏ who/which/that khi nó là tân ngữ: The book (that) I bought.",
    mistakes:["the person which","the place who"],
    questions:[
      {type:"choice",q:"The woman ___ called you is my manager.",options:["which","who","where","whose place"],answer:"who",why:"Who thay cho người."},
      {type:"choice",q:"This is the laptop ___ I bought yesterday.",options:["who","where","that","what"],answer:"that",why:"That thay cho vật."},
      {type:"input",q:"Complete: That's the hotel ___ we stayed.",answer:"where",why:"Where thay cho nơi chốn."},
      {type:"choice",q:"Which sentence can omit 'that'?",options:["The book that is on the table...","The book that I ordered...","The man that called...","The dog that barked..."],answer:"The book that I ordered...",why:"That là tân ngữ của ordered nên có thể bỏ."}
    ]
  },
  {
    id:"gerund-infinitive",level:"B1",title:"Gerunds and infinitives",vi:"V-ing và to V",
    goal:"Dùng dạng động từ đúng sau các động từ phổ biến.",
    formula:["enjoy/avoid/finish + verb-ing","want/need/decide + to verb","like/love + verb-ing hoặc to verb"],
    examples:[
      ["I enjoy meeting new people.","Tôi thích gặp gỡ người mới."],
      ["We decided to leave early.","Chúng tôi quyết định rời đi sớm."],
      ["He avoided answering the question.","Anh ấy tránh trả lời câu hỏi."]
    ],
    tip:"Học theo cụm động từ, đừng dịch từng chữ: decide to do, avoid doing.",
    mistakes:["I enjoy to read.","I decided going."],
    questions:[
      {type:"choice",q:"I really enjoy ___ with international teams.",options:["work","to working","working","worked"],answer:"working",why:"Enjoy + verb-ing."},
      {type:"input",q:"Complete: We decided ___ (wait) another day.",answer:"to wait",why:"Decide + to infinitive."},
      {type:"choice",q:"She avoided ___ about the problem.",options:["talk","to talk","talking","talked"],answer:"talking",why:"Avoid + verb-ing."},
      {type:"choice",q:"Which sentence is correct?",options:["I want improving.","I want to improve.","I want improve.","I want to improving."],answer:"I want to improve.",why:"Want + to + verb."}
    ]
  },
  {
    id:"passive",level:"B1",title:"Passive voice",vi:"Câu bị động",
    goal:"Tập trung vào hành động/kết quả thay vì người thực hiện.",
    formula:["be + past participle","present: am/is/are + V3","past: was/were + V3"],
    examples:[
      ["The meeting was cancelled.","Cuộc họp đã bị hủy."],
      ["English is spoken in many countries.","Tiếng Anh được nói ở nhiều quốc gia."],
      ["The files will be sent tomorrow.","Các tệp sẽ được gửi vào ngày mai."]
    ],
    tip:"Chia động từ be theo thì; động từ chính luôn ở V3.",
    mistakes:["The meeting cancelled.","It was send yesterday."],
    questions:[
      {type:"choice",q:"The package ___ yesterday.",options:["delivered","was delivered","is deliver","was deliver"],answer:"was delivered",why:"Quá khứ bị động: was + V3."},
      {type:"input",q:"Complete: These products ___ (make) in Vietnam.",answer:"are made",why:"Hiện tại bị động số nhiều: are made."},
      {type:"choice",q:"The results will ___ next week.",options:["announce","be announced","announced","be announce"],answer:"be announced",why:"Tương lai bị động: will be + V3."},
      {type:"choice",q:"Why use passive here: 'My bike was stolen'?",options:["The thief is unknown/unimportant.","The bike acted.","It is present continuous.","Stolen is an adjective only."],answer:"The thief is unknown/unimportant.",why:"Bị động tập trung vào sự việc và đối tượng bị tác động."}
    ]
  },
  {
    id:"reported-speech",level:"B2",title:"Reported speech",vi:"Câu tường thuật",
    goal:"Kể lại lời người khác mà không trích dẫn nguyên văn.",
    formula:["say (that) + clause","tell + person + clause","present thường lùi về past"],
    examples:[
      ["She said she was tired.","Cô ấy nói cô ấy mệt."],
      ["He told me he couldn't come.","Anh ấy nói với tôi rằng không thể đến."],
      ["They said the meeting had been cancelled.","Họ nói cuộc họp đã bị hủy."]
    ],
    tip:"Say không đi trực tiếp với người; tell cần người: said to me / told me.",
    mistakes:["She said me...","He told that..."],
    questions:[
      {type:"choice",q:"'I'm busy.' She said she ___ busy.",options:["is","was","has","be"],answer:"was",why:"Am lùi về was trong lời tường thuật."},
      {type:"choice",q:"He ___ me that he would be late.",options:["said","told","spoke","asked to"],answer:"told",why:"Tell + person: told me."},
      {type:"input",q:"Complete: 'I can't come.' He said he ___ come.",answer:"couldn't",accept:["could not"],why:"Can thường lùi thành could."},
      {type:"choice",q:"Which is correct?",options:["She said me she was tired.","She told me she was tired.","She told she was tired.","She said to I was tired."],answer:"She told me she was tired.",why:"Tell + object + clause."}
    ]
  },
  {
    id:"present-perfect-continuous",level:"B2",title:"Present perfect continuous",vi:"Hiện tại hoàn thành tiếp diễn",
    goal:"Nhấn mạnh hoạt động kéo dài hoặc vừa diễn ra và có kết quả hiện tại.",
    formula:["have/has been + verb-ing","for/since + duration/start","How long have you been...?"],
    examples:[
      ["I've been studying for two hours.","Tôi đã học được hai tiếng."],
      ["It's been raining all morning.","Trời mưa suốt buổi sáng."],
      ["How long have you been waiting?","Bạn đã đợi bao lâu rồi?"]
    ],
    tip:"Dùng simple để nhấn kết quả/số lượng; continuous để nhấn quá trình/thời lượng.",
    mistakes:["I am studying since 8.","I have been study."],
    questions:[
      {type:"choice",q:"You look tired. ___ you been working all night?",options:["Did","Have","Are","Do"],answer:"Have",why:"Kết quả hiện tại của hoạt động kéo dài."},
      {type:"input",q:"Complete: She ___ (learn) English since January.",answer:"has been learning",why:"Has been + learning diễn tả quá trình kéo dài."},
      {type:"choice",q:"Which emphasizes a completed result?",options:["I've been writing emails.","I've written ten emails.","I write emails.","I was writing emails."],answer:"I've written ten emails.",why:"Present perfect simple nhấn số lượng đã hoàn thành."},
      {type:"choice",q:"We've been waiting ___ an hour.",options:["since","for","at","during"],answer:"for",why:"An hour là khoảng thời gian."}
    ]
  },
  {
    id:"past-perfect",level:"B2",title:"Past perfect",vi:"Quá khứ hoàn thành",
    goal:"Làm rõ việc nào xảy ra trước một việc khác trong quá khứ.",
    formula:["had + past participle","after + past perfect/past simple","by the time + past simple, past perfect"],
    examples:[
      ["The movie had started when we arrived.","Phim đã bắt đầu khi chúng tôi đến."],
      ["I'd never flown before that trip.","Trước chuyến đi đó tôi chưa từng bay."],
      ["By the time I called, she had left.","Khi tôi gọi thì cô ấy đã rời đi."]
    ],
    tip:"Không cần dùng past perfect nếu thứ tự đã quá rõ nhờ before/after, nhưng dùng sẽ nhấn mạnh việc xảy ra trước.",
    mistakes:["had went","When I had arrived, he left (sai ý thứ tự)"],
    questions:[
      {type:"choice",q:"When I got to the station, the train ___.",options:["left","has left","had left","was leave"],answer:"had left",why:"Tàu rời đi trước lúc tôi đến."},
      {type:"input",q:"Complete: She was nervous because she ___ (not / fly) before.",answer:"hadn't flown",accept:["had not flown"],why:"Trải nghiệm chưa xảy ra trước một thời điểm quá khứ."},
      {type:"choice",q:"By the time we arrived, they ___ dinner.",options:["finished","had finished","finish","have finished"],answer:"had finished",why:"Hoàn thành trước lúc chúng tôi đến."},
      {type:"choice",q:"What is the past participle of 'go'?",options:["went","gone","goed","going"],answer:"gone",why:"Go - went - gone."}
    ]
  },
  {
    id:"third-conditional",level:"B2",title:"Third conditional",vi:"Điều kiện loại 3",
    goal:"Nói điều không có thật trong quá khứ và kết quả tưởng tượng.",
    formula:["If + had + V3, would have + V3","could/might have + V3"],
    examples:[
      ["If I'd known, I would have called.","Nếu tôi biết thì tôi đã gọi."],
      ["We wouldn't have missed the train if we'd left earlier.","Chúng tôi đã không lỡ tàu nếu rời đi sớm hơn."],
      ["What would you have done?","Bạn đã làm gì trong tình huống đó?"]
    ],
    tip:"Cả điều kiện và kết quả đều thuộc quá khứ và không thể thay đổi.",
    mistakes:["If I would have known...","would have went"],
    questions:[
      {type:"choice",q:"If I had seen your message, I ___ replied.",options:["will have","would have","would","had"],answer:"would have",why:"Mệnh đề kết quả loại 3: would have + V3."},
      {type:"input",q:"Complete: If we ___ (leave) earlier, we wouldn't have been late.",answer:"had left",why:"Mệnh đề if dùng had + V3."},
      {type:"choice",q:"Which is correct?",options:["If I'd known, I'd call.","If I would know, I'd called.","If I'd known, I'd have called.","If I knew, I'd have call."],answer:"If I'd known, I'd have called.",why:"Had known + would have called."},
      {type:"choice",q:"Third conditional talks about...",options:["daily habits","real future plans","an unreal past","scientific facts"],answer:"an unreal past",why:"Nó tưởng tượng một quá khứ khác với thực tế."}
    ]
  },
  {
    id:"wish",level:"B2",title:"Wish and if only",vi:"Câu ước",
    goal:"Nói điều tiếc nuối ở hiện tại hoặc quá khứ.",
    formula:["wish + past: ước hiện tại","wish + had + V3: tiếc quá khứ","wish + would: muốn hành vi thay đổi"],
    examples:[
      ["I wish I spoke English more confidently.","Tôi ước mình nói tiếng Anh tự tin hơn."],
      ["I wish I'd started earlier.","Tôi ước mình đã bắt đầu sớm hơn."],
      ["I wish the neighbors would be quieter.","Tôi ước hàng xóm yên tĩnh hơn."]
    ],
    tip:"Sau wish dùng thì lùi để tạo nghĩa không thật, không dùng will cho mong muốn về bản thân.",
    mistakes:["I wish I can speak.","I wish I started earlier yesterday."],
    questions:[
      {type:"choice",q:"I wish I ___ more free time.",options:["have","had","will have","would had"],answer:"had",why:"Ước trái với hiện tại dùng past simple."},
      {type:"input",q:"Complete: I wish I ___ (not / say) that yesterday.",answer:"hadn't said",accept:["had not said"],why:"Tiếc về quá khứ dùng had + V3."},
      {type:"choice",q:"I wish this bus ___ come soon.",options:["will","would","had","is"],answer:"would",why:"Wish + would cho điều ta muốn thay đổi."},
      {type:"choice",q:"Which expresses present regret?",options:["I wish I'd studied.","I wish I knew the answer.","I hope I know.","I wish I will know."],answer:"I wish I knew the answer.",why:"Past simple sau wish diễn tả điều trái với hiện tại."}
    ]
  },
  {
    id:"modals-deduction",level:"B2",title:"Modals of deduction",vi:"Suy đoán",
    goal:"Thể hiện mức độ chắc chắn về hiện tại và quá khứ.",
    formula:["must = gần như chắc chắn","might/could = có thể","can't = gần như không thể","must have + V3 = suy đoán quá khứ"],
    examples:[
      ["You must be exhausted.","Chắc hẳn bạn kiệt sức."],
      ["She might be in a meeting.","Có thể cô ấy đang họp."],
      ["He can't have forgotten again.","Không thể nào anh ấy lại quên nữa."]
    ],
    tip:"Mustn't là cấm; can't mới là suy đoán 'không thể nào'.",
    mistakes:["He mustn't be home (khi muốn nói chắc không ở nhà)","She must went."],
    questions:[
      {type:"choice",q:"The lights are off. They ___ be home.",options:["must","can't","should to","have"],answer:"can't",why:"Dấu hiệu cho thấy gần như chắc chắn họ không ở nhà."},
      {type:"choice",q:"She's been working for twelve hours. She ___ be tired.",options:["can't","must","might not to","is must"],answer:"must",why:"Suy luận rất chắc chắn từ bằng chứng."},
      {type:"input",q:"Complete: He isn't here. He might ___ (miss) the train.",answer:"have missed",why:"Suy đoán quá khứ: might have + V3."},
      {type:"choice",q:"Which means 'perhaps'?",options:["must","might","can't","mustn't"],answer:"might",why:"Might diễn tả khả năng không chắc chắn."}
    ]
  },
  {
    id:"linking-ideas",level:"B2",title:"Linking ideas",vi:"Nối ý mạch lạc",
    goal:"Nói và viết câu dài rõ quan hệ nguyên nhân, đối lập và kết quả.",
    formula:["because + clause / because of + noun","although + clause / despite + noun or -ing","therefore/however + new clause"],
    examples:[
      ["I stayed home because I felt sick.","Tôi ở nhà vì cảm thấy ốm."],
      ["Although it was expensive, I bought it.","Mặc dù đắt, tôi vẫn mua."],
      ["The data was incomplete; therefore, we waited.","Dữ liệu chưa đầy đủ; vì vậy chúng tôi đã đợi."]
    ],
    tip:"Despite không đi trực tiếp với một mệnh đề đầy đủ; dùng despite the rain hoặc despite being tired.",
    mistakes:["despite it was raining","because of I was late"],
    questions:[
      {type:"choice",q:"We cancelled the picnic because ___ the rain.",options:["of","for","to","with"],answer:"of",why:"Because of + danh từ."},
      {type:"choice",q:"___ she was tired, she finished the task.",options:["Despite","Although","Because of","However of"],answer:"Although",why:"Although + mệnh đề đầy đủ."},
      {type:"input",q:"Complete: Despite ___ (feel) nervous, he gave a great talk.",answer:"feeling",why:"Despite + verb-ing."},
      {type:"choice",q:"Which is correct?",options:["Despite it was late, we stayed.","Although it was late, we stayed.","Because of we were tired, we left.","However it rained, we went."],answer:"Although it was late, we stayed.",why:"Although nối trực tiếp với subject + verb."}
    ]
  },
  {
    id:"questions",level:"B1",title:"Natural questions",vi:"Đặt câu hỏi tự nhiên",
    goal:"Tạo câu hỏi đúng trật tự và câu hỏi gián tiếp lịch sự.",
    formula:["question word + auxiliary + subject + verb","Do you know + statement order","Could you tell me + statement order"],
    examples:[
      ["Where do you work?","Bạn làm việc ở đâu?"],
      ["Do you know where the station is?","Bạn có biết nhà ga ở đâu không?"],
      ["Could you tell me how this works?","Bạn có thể cho tôi biết nó hoạt động thế nào không?"]
    ],
    tip:"Trong câu hỏi gián tiếp, dùng trật tự câu khẳng định: where he is, không phải where is he.",
    mistakes:["Where you work?","Do you know where is it?"],
    questions:[
      {type:"choice",q:"Where ___ your sister live?",options:["is","does","do","has"],answer:"does",why:"Present simple question với she dùng does."},
      {type:"choice",q:"Do you know where ___?",options:["is the bathroom","the bathroom is","does the bathroom","the bathroom"],answer:"the bathroom is",why:"Câu hỏi gián tiếp dùng trật tự chủ ngữ + động từ."},
      {type:"input",q:"Complete: Could you tell me what time the shop ___?",answer:"closes",why:"Sau cụm hỏi gián tiếp dùng trật tự câu khẳng định."},
      {type:"choice",q:"Which is natural and correct?",options:["Can you tell me how does it work?","Can you tell me how it works?","Can tell you how it works?","Do you can tell me?"],answer:"Can you tell me how it works?",why:"Không đảo trợ động từ trong phần câu hỏi gián tiếp."}
    ]
  },
  {
    id:"phrasal-verbs",level:"B1",title:"Phrasal verbs in context",vi:"Cụm động từ giao tiếp",
    goal:"Hiểu và dùng cụm động từ phổ biến trong phim và hội thoại.",
    formula:["verb + particle","một số tách được: turn it down","đại từ luôn đứng giữa với cụm tách được"],
    examples:[
      ["I need to figure this out.","Tôi cần tìm ra cách giải quyết việc này."],
      ["Can you turn the music down?","Bạn vặn nhỏ nhạc được không?"],
      ["We ran out of coffee.","Chúng tôi hết cà phê rồi."]
    ],
    tip:"Học cả cụm trong câu; đừng đoán nghĩa bằng từng từ.",
    mistakes:["turn down it","run out coffee"],
    questions:[
      {type:"choice",q:"We ___ milk, so I went to the store.",options:["ran out of","turned down","looked after","gave up it"],answer:"ran out of",why:"Run out of = hết một thứ gì."},
      {type:"choice",q:"Please turn ___ down.",options:["the volume it","it","down it","it down it"],answer:"it",why:"Với đại từ: turn it down."},
      {type:"input",q:"Complete: I'll ___ it out. (tìm ra cách)",answer:"figure",why:"Figure it out = tìm ra/giải quyết."},
      {type:"choice",q:"'Put off the meeting' means...",options:["cancel forever","postpone","attend","organize quickly"],answer:"postpone",why:"Put off = hoãn."}
    ]
  }
];
