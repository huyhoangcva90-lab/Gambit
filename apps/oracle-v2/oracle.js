(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const STORE = {
    profile: 'mystic-v2-profile',
    history: 'mystic-v2-history',
    saved: 'mystic-v2-saved',
    theme: 'mystic-v2-theme'
  };

  const state = {
    view: 'home',
    category: 'all',
    profile: load(STORE.profile, {}),
    history: load(STORE.history, []),
    saved: load(STORE.saved, []),
    activeModule: null,
    tarotSize: 3,
    cardSize: 3,
    runeSize: 3
  };

  const MODULES = [
    {id:'tarot',name:'Tarot',icon:'ti-cards',symbol:'✦',desc:'78 lá · Trải bài · Nhật ký',cat:'cards',engine:'78-card data'},
    {id:'astrology',name:'Chiêm Tinh Tây',icon:'ti-constellation',symbol:'☉',desc:'Hành tinh · Cung · Transit',cat:'birth',engine:'Astronomy Engine'},
    {id:'zodiac',name:'12 Con Giáp',icon:'ti-dragon',symbol:'辰',desc:'Can chi · Nạp âm · Tuổi',cat:'east',engine:'Lunar JS'},
    {id:'iching',name:'Kinh Dịch',icon:'ti-yin-yang',symbol:'☯',desc:'64 quẻ · Hào động · Quẻ biến',cat:'east',engine:'3-coin method'},
    {id:'hour',name:'Bói Theo Giờ',icon:'ti-clock-hour-4',symbol:'時',desc:'Can chi giờ · Cát hung',cat:'east',engine:'Lunar JS'},
    {id:'fengshui',name:'Bát Quái',icon:'ti-compass',symbol:'☰',desc:'8 quái · Hướng · Ngũ hành',cat:'east',engine:'Bagua system'},
    {id:'divine',name:'Oracle Vị Thần',icon:'ti-bolt',symbol:'⚡',desc:'Archetype · Shadow · Ritual',cat:'oracle',engine:'Archetype deck'},
    {id:'personal',name:'Bản Đồ Cá Nhân',icon:'ti-user-star',symbol:'✧',desc:'Tổng hợp các hệ thống',cat:'birth',engine:'Multi-engine'},
    {id:'rune',name:'Rune Bắc Âu',icon:'ti-diamond',symbol:'ᚱ',desc:'24 rune · 3 kiểu trải',cat:'oracle',engine:'Elder Futhark'},
    {id:'moon',name:'Mặt Trăng',icon:'ti-moon-stars',symbol:'☾',desc:'Pha · Độ sáng · Mọc lặn',cat:'sky',engine:'SunCalc'},
    {id:'cartomancy',name:'Bói Bài Tây',icon:'ti-play-card',symbol:'♠',desc:'52 lá · Tổ hợp · Chủ đề',cat:'cards',engine:'52-card data'},
    {id:'dream',name:'Giải Mã Giấc Mơ',icon:'ti-cloud',symbol:'☁',desc:'Biểu tượng · Cảm xúc · Nhật ký',cat:'oracle',engine:'Symbol library'},
    {id:'bazi',name:'Bát Tự Ngũ Hành',icon:'ti-chart-dots-3',symbol:'命',desc:'Tứ trụ · Thập thần · Dụng khí',cat:'birth',engine:'Lunar JS'},
    {id:'numerology',name:'Thần Số Học',icon:'ti-number-9',symbol:'∞',desc:'7 chỉ số · Chu kỳ năm',cat:'birth',engine:'Pythagorean'},
    {id:'planet',name:'Hành Tinh Học',icon:'ti-planet',symbol:'♄',desc:'Vị trí thật · Năng lượng ngày',cat:'sky',engine:'Astronomy Engine'}
  ];

  const TAROT_MAJOR = [
    ['The Fool','Kẻ Khờ','bước vào điều mới với tâm thế cởi mở','liều lĩnh hoặc trốn tránh trách nhiệm','0'],
    ['The Magician','Nhà Kiến Tạo','ý chí, kỹ năng và khả năng biến ý tưởng thành hành động','thao túng hoặc phân tán năng lực','I'],
    ['The High Priestess','Nữ Tư Tế','trực giác, bí mật và tri thức bên trong','phớt lờ trực giác hoặc giữ kín quá mức','II'],
    ['The Empress','Hoàng Hậu','nuôi dưỡng, sáng tạo và sự phong phú','phụ thuộc hoặc bỏ quên nhu cầu của mình','III'],
    ['The Emperor','Hoàng Đế','cấu trúc, quyền hạn và nền tảng vững chắc','cứng nhắc hoặc kiểm soát quá mức','IV'],
    ['The Hierophant','Giáo Hoàng','truyền thống, người dẫn đường và hệ giá trị','giáo điều hoặc cần đi con đường riêng','V'],
    ['The Lovers','Tình Nhân','sự hòa hợp và lựa chọn phù hợp với giá trị','lệch giá trị hoặc quan hệ thiếu cân bằng','VI'],
    ['The Chariot','Chiến Xa','quyết tâm, tập trung và tiến lên','mất phương hướng hoặc thúc ép quá nhanh','VII'],
    ['Strength','Sức Mạnh','nội lực, kiên nhẫn và lòng trắc ẩn','thiếu tự tin hoặc phản ứng bằng bản năng','VIII'],
    ['The Hermit','Ẩn Sĩ','chiêm nghiệm, độc lập và tìm kiếm chân lý','cô lập hoặc suy nghĩ quá lâu','IX'],
    ['Wheel of Fortune','Bánh Xe','chu kỳ thay đổi và cơ hội xoay chuyển','kháng cự thay đổi hoặc lặp lại mô thức','X'],
    ['Justice','Công Lý','sự thật, cân bằng và trách nhiệm','thiên lệch hoặc né hậu quả','XI'],
    ['The Hanged Man','Người Treo','tạm dừng, đổi góc nhìn và buông kiểm soát','trì hoãn hoặc hy sinh vô ích','XII'],
    ['Death','Chuyển Hóa','kết thúc cần thiết và tái sinh','bám víu hoặc sợ kết thúc','XIII'],
    ['Temperance','Điều Độ','hài hòa, chữa lành và phối hợp','quá đà hoặc nhịp sống mất cân bằng','XIV'],
    ['The Devil','Bóng Tối','nhìn thấy ràng buộc và ham muốn thật','nghiện, lệ thuộc hoặc tự giới hạn','XV'],
    ['The Tower','Tòa Tháp','sự thật phá vỡ cấu trúc cũ','sợ biến động hoặc kéo dài điều đã hỏng','XVI'],
    ['The Star','Ngôi Sao','hy vọng, cảm hứng và hồi phục','mất niềm tin hoặc xa rời nguồn cảm hứng','XVII'],
    ['The Moon','Mặt Trăng','tiềm thức, giấc mơ và điều chưa rõ','ảo tưởng, lo âu hoặc thông tin thiếu sáng','XVIII'],
    ['The Sun','Mặt Trời','sức sống, niềm vui và thành công rõ ràng','kiệt sức hoặc lạc quan thiếu thực tế','XIX'],
    ['Judgement','Thức Tỉnh','đánh giá lại, tha thứ và nghe tiếng gọi','tự phán xét hoặc từ chối bài học','XX'],
    ['The World','Thế Giới','hoàn thành, tích hợp và mở chu kỳ mới','việc chưa khép lại hoặc thiếu cảm giác trọn vẹn','XXI']
  ];
  const SUITS = {
    Wands:{vi:'Gậy',symbol:'♣',theme:'hành động, đam mê và sự nghiệp',element:'Lửa'},
    Cups:{vi:'Cốc',symbol:'♥',theme:'cảm xúc, tình yêu và trực giác',element:'Nước'},
    Swords:{vi:'Kiếm',symbol:'♠',theme:'tư duy, xung đột và sự thật',element:'Khí'},
    Pentacles:{vi:'Tiền',symbol:'♦',theme:'tài chính, cơ thể và nền tảng',element:'Đất'}
  };
  const MINOR_RANKS = [
    ['Ace','Át','hạt giống và một khởi đầu thuần khiết','cơ hội chưa được nắm'],
    ['Two','Hai','lựa chọn, cân bằng và kết nối','do dự hoặc chia đôi năng lượng'],
    ['Three','Ba','phát triển nhờ cộng tác','thiếu phối hợp hoặc kế hoạch non'],
    ['Four','Bốn','ổn định và củng cố nền tảng','trì trệ hoặc bám vùng an toàn'],
    ['Five','Năm','thử thách tạo ra thay đổi','xung đột kéo dài hoặc mất niềm tin'],
    ['Six','Sáu','điều chỉnh, hòa hợp và tiến bộ','mắc kẹt với quá khứ'],
    ['Seven','Bảy','kiểm nghiệm niềm tin và chiến lược','ảo tưởng hoặc thiếu kiên định'],
    ['Eight','Tám','chuyển động, kỷ luật và làm chủ','phân tán hoặc bị giới hạn'],
    ['Nine','Chín','chín muồi, sức bền và gần hoàn tất','kiệt sức hoặc phòng thủ quá mức'],
    ['Ten','Mười','hoàn thành chu kỳ và trách nhiệm','gánh nặng hoặc không chịu buông'],
    ['Page','Tiểu Đồng','tin nhắn mới và tinh thần học hỏi','non nớt hoặc lời hứa chưa chắc'],
    ['Knight','Kỵ Sĩ','động lực tiến tới và theo đuổi mục tiêu','vội vàng hoặc thiếu nhất quán'],
    ['Queen','Hoàng Hậu','năng lực trưởng thành từ bên trong','năng lượng bị dồn nén hoặc lệ thuộc'],
    ['King','Hoàng Đế','quyền làm chủ và trách nhiệm bên ngoài','kiểm soát hoặc dùng quyền sai chỗ']
  ];
  const TAROT = buildTarot();

  const HEX_NAMES = [
    'Thuần Càn','Thuần Khôn','Thủy Lôi Truân','Sơn Thủy Mông','Thủy Thiên Nhu','Thiên Thủy Tụng','Địa Thủy Sư','Thủy Địa Tỷ',
    'Phong Thiên Tiểu Súc','Thiên Trạch Lý','Địa Thiên Thái','Thiên Địa Bĩ','Thiên Hỏa Đồng Nhân','Hỏa Thiên Đại Hữu','Địa Sơn Khiêm','Lôi Địa Dự',
    'Trạch Lôi Tùy','Sơn Phong Cổ','Địa Trạch Lâm','Phong Địa Quan','Hỏa Lôi Phệ Hạp','Sơn Hỏa Bí','Sơn Địa Bác','Địa Lôi Phục',
    'Thiên Lôi Vô Vọng','Sơn Thiên Đại Súc','Sơn Lôi Di','Trạch Phong Đại Quá','Thuần Khảm','Thuần Ly','Trạch Sơn Hàm','Lôi Phong Hằng',
    'Thiên Sơn Độn','Lôi Thiên Đại Tráng','Hỏa Địa Tấn','Địa Hỏa Minh Di','Phong Hỏa Gia Nhân','Hỏa Trạch Khuê','Thủy Sơn Kiển','Lôi Thủy Giải',
    'Sơn Trạch Tổn','Phong Lôi Ích','Trạch Thiên Quải','Thiên Phong Cấu','Trạch Địa Tụy','Địa Phong Thăng','Trạch Thủy Khốn','Thủy Phong Tỉnh',
    'Trạch Hỏa Cách','Hỏa Phong Đỉnh','Thuần Chấn','Thuần Cấn','Phong Sơn Tiệm','Lôi Trạch Quy Muội','Lôi Hỏa Phong','Hỏa Sơn Lữ',
    'Thuần Tốn','Thuần Đoài','Phong Thủy Hoán','Thủy Trạch Tiết','Phong Trạch Trung Phu','Lôi Sơn Tiểu Quá','Thủy Hỏa Ký Tế','Hỏa Thủy Vị Tế'
  ];
  const HEX_THEMES = ['khởi tạo','tiếp nhận','khó khăn ban đầu','học hỏi','chờ thời','tranh luận','kỷ luật tập thể','kết nối','tích lũy nhỏ','hành xử đúng mực','hanh thông','bế tắc','đồng lòng','sở hữu lớn','khiêm nhường','hứng khởi'];

  const RUNES = [
    ['ᚠ','Fehu','tài sản, dòng chảy và giá trị','giữ nguồn lực lưu thông thay vì tích trữ vì sợ'],
    ['ᚢ','Uruz','sức sống, bản năng và khả năng hồi phục','dùng sức đúng chỗ, đừng ép bản thân'],
    ['ᚦ','Thurisaz','ranh giới, phản lực và khoảnh khắc quyết định','dừng trước khi phản ứng'],
    ['ᚨ','Ansuz','thông điệp, ngôn từ và tri thức','lắng nghe điều nằm sau lời nói'],
    ['ᚱ','Raidho','hành trình, nhịp điệu và hướng đi','điều chỉnh lộ trình trước khi tăng tốc'],
    ['ᚲ','Kenaz','ngọn đuốc, kỹ năng và sự soi sáng','đưa điều mơ hồ ra ánh sáng'],
    ['ᚷ','Gebo','trao đổi, quà tặng và quan hệ tương hỗ','xem lại sự cân bằng cho và nhận'],
    ['ᚹ','Wunjo','niềm vui, cộng đồng và sự hòa hợp','cho phép mình ghi nhận điều đang tốt'],
    ['ᚺ','Hagalaz','gián đoạn tự nhiên và tái cấu trúc','đừng cố giữ nguyên thứ cần thay đổi'],
    ['ᚾ','Nauthiz','nhu cầu, giới hạn và sức bền','phân biệt điều cần với điều muốn'],
    ['ᛁ','Isa','tĩnh lại, cô đặc và bảo toàn năng lượng','chưa phải lúc thúc ép kết quả'],
    ['ᛃ','Jera','mùa vụ, kết quả và thời điểm chín','tiếp tục quy trình đều đặn'],
    ['ᛇ','Eihwaz','trục sống, bền bỉ và chuyển tiếp','đứng vững trong vùng chuyển giao'],
    ['ᛈ','Perthro','bí ẩn, xác suất và điều chưa lộ','để một phần câu chuyện tự mở ra'],
    ['ᛉ','Algiz','bảo vệ, cảnh giác và kết nối cao hơn','giữ ranh giới mà không đóng lòng'],
    ['ᛊ','Sowilo','mặt trời, thành tựu và tính toàn vẹn','chọn điều làm bạn sáng rõ'],
    ['ᛏ','Tiwaz','công lý, dũng khí và hy sinh có mục đích','hành động theo nguyên tắc'],
    ['ᛒ','Berkano','sinh trưởng, nuôi dưỡng và khởi sinh','chăm cái mới bằng nhịp chậm'],
    ['ᛖ','Ehwaz','tin cậy, chuyển động và cộng tác','đồng bộ với người đồng hành'],
    ['ᛗ','Mannaz','bản ngã, cộng đồng và tự nhận thức','nhìn mình qua phản hồi trung thực'],
    ['ᛚ','Laguz','nước, trực giác và dòng cảm xúc','đi cùng dòng nhưng giữ ý thức'],
    ['ᛜ','Ingwaz','năng lượng ủ kín và hoàn tất nội tâm','chuẩn bị đủ trước khi công bố'],
    ['ᛞ','Dagaz','bình minh, đột phá và đổi trạng thái','đón thay đổi bằng tầm nhìn mới'],
    ['ᛟ','Othala','di sản, gia đình và nơi thuộc về','chọn điều đáng được truyền tiếp']
  ];

  const DREAMS = [
    [['rắn','snake'],'Rắn','lột xác, bản năng, chữa lành hoặc một mối đe dọa chưa được gọi tên','Điều gì trong đời bạn đang thay da đổi thịt?'],
    [['nước','biển','sông','mưa'],'Nước','trạng thái cảm xúc và sức mạnh của tiềm thức','Nước yên, đục hay dữ giống cảm xúc nào của bạn?'],
    [['bay'],'Bay','tự do, tham vọng và góc nhìn vượt giới hạn','Bạn bay chủ động hay bị cuốn đi?'],
    [['rơi','ngã','té'],'Rơi','mất kiểm soát, thiếu điểm tựa hoặc lời mời buông','Bạn đang cố kiểm soát điều gì?'],
    [['răng','rụng răng'],'Răng','hình ảnh bản thân, quyền lực và điều khó nói','Có lời nào bạn đang giữ lại?'],
    [['người yêu cũ','người cũ','ex'],'Người Cũ','một mô thức quan hệ hoặc cảm giác chưa được tích hợp','Bạn nhớ người ấy hay phiên bản của mình khi đó?'],
    [['chết','đám tang'],'Cái Chết','kết thúc biểu tượng và một lần chuyển trạng thái','Điều gì đã hết vai trò trong đời bạn?'],
    [['em bé','trẻ con'],'Em Bé','tiềm năng mới và phần mong manh cần chăm sóc','Điều gì mới sinh đang cần được bảo vệ?'],
    [['nhà','căn phòng','phòng'],'Ngôi Nhà','cấu trúc nội tâm và các vùng ký ức','Căn phòng nào khiến bạn chú ý nhất?'],
    [['đuổi','rượt','chạy trốn'],'Bị Đuổi','một vấn đề bị né tránh đang đòi được nhìn','Nếu dừng lại, bạn nghĩ mình sẽ đối diện điều gì?'],
    [['mèo','chó','chim','động vật'],'Động Vật','phẩm chất bản năng đang trở lại','Con vật đó đại diện phẩm chất nào?'],
    [['tiền','vàng','kho báu'],'Kho Báu','giá trị bản thân và nguồn lực chưa nhận ra','Bạn đang đánh giá thấp năng lực nào?'],
    [['lửa','cháy'],'Lửa','chuyển hóa, giận dữ, đam mê hoặc thanh lọc','Ngọn lửa phá hủy hay sưởi ấm?'],
    [['cưới','đám cưới'],'Đám Cưới','cam kết và sự hợp nhất giữa hai phần con người','Bạn đang sẵn sàng cam kết với điều gì?'],
    [['mang thai','có bầu'],'Mang Thai','một ý tưởng hoặc bản sắc mới đang hình thành','Điều gì đang cần thêm thời gian ủ?'],
    [['máu'],'Máu','sinh lực, gia đình và sự tổn thương sâu','Điều gì đang làm bạn mất năng lượng?'],
    [['trường học','thi','kiểm tra'],'Kỳ Thi','áp lực đánh giá và tiêu chuẩn bản thân','Bạn đang sợ bị ai đánh giá?'],
    [['đi lạc','lạc đường'],'Lạc Đường','mất phương hướng hoặc đang rời lối cũ','Dấu hiệu nhỏ nào có thể làm la bàn?']
  ];

  const BAGUA = [
    ['☰','Càn','Kim','Tây Bắc','Trời, lãnh đạo, sáng tạo','Chủ động đặt cấu trúc và chịu trách nhiệm cho lựa chọn.'],
    ['☱','Đoài','Kim','Tây','Hồ, niềm vui, giao tiếp','Nói rõ nhu cầu và tạo không gian cho niềm vui.'],
    ['☲','Ly','Hỏa','Nam','Lửa, danh tiếng, sự sáng','Làm rõ điều bạn muốn được nhìn thấy.'],
    ['☳','Chấn','Mộc','Đông','Sấm, khởi động, chuyển động','Bắt đầu bằng hành động nhỏ nhưng dứt khoát.'],
    ['☴','Tốn','Mộc','Đông Nam','Gió, thẩm thấu, tài lộc','Tiến đều, mềm và sâu thay vì dùng lực.'],
    ['☵','Khảm','Thủy','Bắc','Nước, chiều sâu, thử thách','Đi qua vùng khó bằng chuẩn bị và linh hoạt.'],
    ['☶','Cấn','Thổ','Đông Bắc','Núi, dừng lại, tri thức','Biết dừng đúng lúc là một dạng tiến bộ.'],
    ['☷','Khôn','Thổ','Tây Nam','Đất, tiếp nhận, nuôi dưỡng','Để sự việc phát triển bằng chăm sóc và kiên nhẫn.']
  ];

  const DEITIES = [
    ['Athena','Trí tuệ chiến lược','Sự sáng suốt, kỹ năng và chiến lược dài hạn','Dùng trí tuệ để né cảm xúc','Viết ra ba lựa chọn và hệ quả của từng lựa chọn.'],
    ['Quan Âm','Lòng từ bi','Lắng nghe, chữa lành và lòng trắc ẩn không phán xét','Hy sinh mình để cứu người khác','Đặt một ranh giới dịu dàng nhưng rõ ràng.'],
    ['Thoth','Tri thức ẩn','Ngôn ngữ, ghi chép và khả năng kết nối tri thức','Phân tích đến mức không hành động','Viết một trang để biến điều mơ hồ thành lời.'],
    ['Kali','Giải phóng','Cắt bỏ ảo tưởng và giải phóng năng lượng bị mắc','Phá hủy trong cơn giận','Chọn một thứ đã hết hạn để kết thúc có ý thức.'],
    ['Apollo','Ánh sáng','Biểu đạt, nghệ thuật và sự thật được soi rõ','Cần được công nhận quá mức','Tạo ra điều đẹp mà không chờ lời khen.'],
    ['Hecate','Ngã ba đường','Trực giác ở thời điểm chuyển tiếp và lựa chọn','Sợ bước vào điều chưa biết','Thắp một ngọn đèn và gọi tên lựa chọn thật.'],
    ['Ganesha','Mở đường','Trí tuệ thực tế và tháo gỡ chướng ngại','Trì hoãn dưới danh nghĩa chuẩn bị','Dọn một chướng ngại vật cụ thể hôm nay.'],
    ['Mẫu Thượng Ngàn','Sinh khí tự nhiên','Sức sống, rừng núi và khả năng hồi phục','Xa rời cơ thể và môi trường sống','Đi bộ chậm ngoài trời, không dùng điện thoại.']
  ];

  const NUM_DESC = {
    1:['Tiên Phong','độc lập, chủ động và khởi tạo'],2:['Hòa Giải','hợp tác, cảm nhận và kết nối'],3:['Biểu Đạt','sáng tạo, giao tiếp và lạc quan'],
    4:['Xây Dựng','cấu trúc, kỷ luật và độ tin cậy'],5:['Tự Do','thay đổi, trải nghiệm và thích nghi'],6:['Chăm Sóc','trách nhiệm, thẩm mỹ và gia đình'],
    7:['Tìm Kiếm','phân tích, nội tâm và chiều sâu'],8:['Kiến Tạo','quản trị, vật chất và thành tựu'],9:['Nhân Ái','bao dung, hoàn tất và phục vụ'],
    11:['Trực Giác','cảm hứng, độ nhạy và tầm nhìn'],22:['Kiến Trúc Sư','biến tầm nhìn lớn thành cấu trúc'],33:['Người Chữa Lành','phụng sự bằng tình thương trưởng thành']
  };
  const CN = {
    '甲':'Giáp','乙':'Ất','丙':'Bính','丁':'Đinh','戊':'Mậu','己':'Kỷ','庚':'Canh','辛':'Tân','壬':'Nhâm','癸':'Quý',
    '子':'Tý','丑':'Sửu','寅':'Dần','卯':'Mão','辰':'Thìn','巳':'Tỵ','午':'Ngọ','未':'Mùi','申':'Thân','酉':'Dậu','戌':'Tuất','亥':'Hợi',
    '金':'Kim','木':'Mộc','水':'Thủy','火':'Hỏa','土':'Thổ',
    '鼠':'Tý','牛':'Sửu','虎':'Dần','兔':'Mão','龙':'Thìn','蛇':'Tỵ','马':'Ngọ','羊':'Mùi','猴':'Thân','鸡':'Dậu','狗':'Tuất','猪':'Hợi',
    '比肩':'Tỷ Kiên','劫财':'Kiếp Tài','食神':'Thực Thần','伤官':'Thương Quan','偏财':'Thiên Tài','正财':'Chính Tài',
    '七杀':'Thất Sát','正官':'Chính Quan','偏印':'Thiên Ấn','正印':'Chính Ấn',
    '建':'Kiến','除':'Trừ','满':'Mãn','平':'Bình','定':'Định','执':'Chấp','破':'Phá','危':'Nguy','成':'Thành','收':'Thu','开':'Khai','闭':'Bế',
    '正北':'chính Bắc','正南':'chính Nam','正东':'chính Đông','正西':'chính Tây','东北':'Đông Bắc','东南':'Đông Nam','西北':'Tây Bắc','西南':'Tây Nam'
  };
  const NAYIN = {
    '海中金':'Hải Trung Kim','炉中火':'Lư Trung Hỏa','大林木':'Đại Lâm Mộc','路旁土':'Lộ Bàng Thổ','剑锋金':'Kiếm Phong Kim',
    '山头火':'Sơn Đầu Hỏa','涧下水':'Giản Hạ Thủy','城头土':'Thành Đầu Thổ','白蜡金':'Bạch Lạp Kim','杨柳木':'Dương Liễu Mộc',
    '泉中水':'Tuyền Trung Thủy','屋上土':'Ốc Thượng Thổ','霹雳火':'Tích Lịch Hỏa','松柏木':'Tùng Bách Mộc','长流水':'Trường Lưu Thủy',
    '沙中金':'Sa Trung Kim','山下火':'Sơn Hạ Hỏa','平地木':'Bình Địa Mộc','壁上土':'Bích Thượng Thổ','金箔金':'Kim Bạch Kim',
    '覆灯火':'Phúc Đăng Hỏa','天河水':'Thiên Hà Thủy','大驿土':'Đại Dịch Thổ','钗钏金':'Thoa Xuyến Kim','桑柘木':'Tang Đố Mộc',
    '大溪水':'Đại Khê Thủy','沙中土':'Sa Trung Thổ','天上火':'Thiên Thượng Hỏa','石榴木':'Thạch Lựu Mộc','大海水':'Đại Hải Thủy'
  };
  const DAY_ACTIONS = {
    '祭祀':'tế lễ','祈福':'cầu phúc','求嗣':'cầu tự','沐浴':'tắm gội, thanh lọc','安机械':'lắp đặt máy móc','嫁娶':'cưới hỏi',
    '出行':'xuất hành','开市':'khai trương','交易':'giao dịch','立券':'lập khế ước','纳财':'thu tài','入宅':'nhập trạch',
    '移徙':'di chuyển','动土':'động thổ','安床':'an giường','修造':'sửa chữa','破土':'phá thổ','安葬':'an táng',
    '开光':'khai quang','解除':'giải trừ','扫舍':'dọn nhà','会亲友':'gặp gỡ thân hữu','求医':'cầu y','治病':'chữa bệnh'
  };

  init();

  function init() {
    drawSky();
    bindShell();
    renderSideModules();
    hydrateProfile();
    applyTheme(load(STORE.theme, 'dark'));
    route('home');
  }

  function load(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
  }
  function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function esc(v='') { return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function pick(a) { return a[Math.floor(Math.random()*a.length)]; }
  function shuffle(a) { a=[...a]; for(let i=a.length-1;i;i--){const j=cryptoRand(i+1);[a[i],a[j]]=[a[j],a[i]];} return a; }
  function cryptoRand(max) { if(crypto?.getRandomValues){const x=new Uint32Array(1);crypto.getRandomValues(x);return x[0]%max;} return Math.floor(Math.random()*max); }
  function fmtDate(date=new Date()) { return date.toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'}); }
  function nowText() { return new Date().toLocaleString('vi-VN',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'}); }
  function moduleById(id) { return MODULES.find(m=>m.id===id); }

  function bindShell() {
    document.addEventListener('click', e => {
      const view = e.target.closest('[data-view]');
      if(view) route(view.dataset.view);
      const mod = e.target.closest('[data-module]');
      if(mod) openModule(mod.dataset.module);
      const filter = e.target.closest('[data-filter]');
      if(filter){state.category=filter.dataset.filter;renderHome();}
      const saveBtn = e.target.closest('[data-save-result]');
      if(saveBtn) toggleSaved(saveBtn.dataset.saveResult);
      if(e.target.closest('#clearHistory')) clearHistory();
    });
    $('#openProfile').onclick = openProfile;
    $('#openProfileTop').onclick = openProfile;
    $('#openProfileMobile').onclick = openProfile;
    $('#closeProfile').onclick = closeProfile;
    $('#drawerBackdrop').onclick = closeProfile;
    $('#profileForm').onsubmit = saveProfile;
    $('#clearProfile').onclick = clearProfile;
    $('#themeToggle').onclick = () => applyTheme(document.body.classList.contains('light') ? 'dark' : 'light');
    $('#searchToggle').onclick = () => {
      $('#searchPanel').classList.toggle('open');
      if($('#searchPanel').classList.contains('open')) $('#globalSearch').focus();
    };
    $('#globalSearch').oninput = e => renderSearch(e.target.value);
    document.addEventListener('keydown', e => {
      if(e.key==='Escape'){ $('#searchPanel').classList.remove('open'); closeProfile(); }
    });
  }

  function route(view) {
    state.view=view;state.activeModule=null;
    $$('.nav-item,.mobile-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));
    $$('.side-module').forEach(x=>x.classList.remove('active'));
    if(view==='home') renderHome();
    if(view==='daily') renderDaily();
    if(view==='history') renderHistory(false);
    if(view==='saved') renderHistory(true);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function setHeader(eyebrow,title) {
    $('#viewEyebrow').textContent=eyebrow;
    $('#viewTitle').textContent=title;
  }

  function renderSideModules() {
    $('#sideModules').innerHTML=MODULES.map(m=>`<button class="side-module" data-module="${m.id}"><i class="ti ${m.icon}"></i><span>${m.name}</span></button>`).join('');
  }

  function hydrateProfile() {
    const p=state.profile,name=p.name||'Tạo hồ sơ',initial=p.name?p.name.trim()[0].toUpperCase():'?';
    $('#profileName').textContent=name;$('#profileAvatar').textContent=initial;$('#profileAvatarTop').textContent=initial;
    $('#profileMeta').textContent=p.date?`${fmtDate(new Date(p.date+'T12:00:00'))} · ${p.place||'Chưa có nơi sinh'}`:'Ngày, giờ và nơi sinh';
  }

  function openProfile() {
    const p=state.profile;
    $('#pfName').value=p.name||'';$('#pfDate').value=p.date||'';$('#pfTime').value=p.time||'12:00';$('#pfPlace').value=p.place||'TP. Hồ Chí Minh';
    $('#pfLat').value=p.lat??10.8231;$('#pfLng').value=p.lng??106.6297;$('#pfTimezone').value=String(p.timezone??7);
    $('#profileDrawer').classList.add('open');$('#drawerBackdrop').classList.add('open');
  }
  function closeProfile() { $('#profileDrawer').classList.remove('open');$('#drawerBackdrop').classList.remove('open'); }
  function saveProfile(e) {
    e.preventDefault();
    state.profile={name:$('#pfName').value.trim(),date:$('#pfDate').value,time:$('#pfTime').value||'12:00',place:$('#pfPlace').value.trim(),lat:+$('#pfLat').value,lng:+$('#pfLng').value,timezone:+$('#pfTimezone').value};
    save(STORE.profile,state.profile);hydrateProfile();closeProfile();toast('Đã lưu hồ sơ khai sinh');
    if(state.activeModule) openModule(state.activeModule);
  }
  function clearProfile() {
    state.profile={};save(STORE.profile,state.profile);hydrateProfile();closeProfile();toast('Đã xóa dữ liệu hồ sơ');
    route('home');
  }

  function applyTheme(theme) {
    document.body.classList.toggle('light',theme==='light');save(STORE.theme,theme);
    $('#themeToggle i').className=`ti ${theme==='light'?'ti-sun':'ti-moon'}`;
  }

  function renderHome() {
    setHeader('MYSTIC ORACLE V2','Bản đồ trực giác của bạn');
    const p=state.profile;
    const daily=getDailySignal();
    const mods=state.category==='all'?MODULES:MODULES.filter(m=>m.cat===state.category);
    $('#content').innerHTML=`
      <section class="welcome">
        <div class="welcome-main">
          <p class="eyebrow">${p.name?`CHÀO ${esc(p.name.toUpperCase())}`:'HỒ SƠ CHƯA HOÀN TẤT'}</p>
          <h2>${p.name?'Hôm nay bạn muốn xem gì?':'Tạo hồ sơ để xem cá nhân hơn.'}</h2>
          <p>${p.name?'Chọn một mục bên dưới. Kết quả sẽ tự lưu để bạn xem lại.':'Chỉ cần tên, ngày sinh và giờ sinh. Các thông tin nâng cao là tùy chọn.'}</p>
          <div class="welcome-actions">
            <button class="primary-btn" data-module="personal"><i class="ti ti-sparkles"></i>Xem bản đồ cá nhân</button>
            <button class="secondary-btn" id="heroProfile"><i class="ti ti-user-circle"></i>${p.date?'Cập nhật hồ sơ':'Tạo hồ sơ'}</button>
          </div>
        </div>
        <button class="daily-card" data-view="daily">
          <span class="daily-date">${new Date().toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long'})}</span>
          <div class="daily-symbol">${daily.symbol}</div>
          <h3>${daily.title}</h3><p>${daily.message}</p>
        </button>
      </section>
      <div class="section-head">
        <div><h2>Thư viện huyền học</h2><p>15 hệ thống · engine và dữ liệu độc lập</p></div>
        <div class="segmented">${[['all','Tất cả'],['birth','Lá số'],['cards','Bộ bài'],['east','Đông phương'],['sky','Thiên văn']].map(([id,n])=>`<button data-filter="${id}" class="${state.category===id?'active':''}">${n}</button>`).join('')}</div>
      </div>
      <section class="module-grid">${mods.map(moduleCard).join('')}</section>
      <div class="section-head"><div><h2>Gần đây</h2><p>Các lần xem được lưu trên thiết bị</p></div><button class="ghost-btn" data-view="history">Xem tất cả<i class="ti ti-arrow-right"></i></button></div>
      ${historyPreview()}
    `;
    $('#heroProfile').onclick=openProfile;
  }

  function moduleCard(m) {
    return `<button class="module-card" data-module="${m.id}"><span class="engine-badge">${m.engine}</span><span class="module-icon"><i class="ti ${m.icon}"></i></span><h3>${m.name}</h3><p>${m.desc}</p></button>`;
  }

  function historyPreview() {
    if(!state.history.length)return `<div class="empty"><i class="ti ti-history"></i><h3>Chưa có lịch sử</h3><p>Kết quả đầu tiên của bạn sẽ xuất hiện tại đây.</p></div>`;
    return `<div class="history-list">${state.history.slice(0,3).map(historyItem).join('')}</div>`;
  }

  function renderSearch(q) {
    q=q.trim().toLowerCase();
    if(!q){if(state.view==='home')renderHome();return;}
    const found=MODULES.filter(m=>(m.name+' '+m.desc+' '+m.engine).toLowerCase().includes(q));
    setHeader('TÌM KIẾM',`${found.length} kết quả cho “${q}”`);
    $('#content').innerHTML=`<section class="module-grid">${found.map(moduleCard).join('')}</section>`;
  }

  function openModule(id) {
    const m=moduleById(id);if(!m)return;
    state.activeModule=id;state.view='module';
    $$('.nav-item,.mobile-nav-item').forEach(x=>x.classList.remove('active'));
    $$('.side-module').forEach(x=>x.classList.toggle('active',x.dataset.module===id));
    setHeader(m.engine,m.name);
    $('#content').innerHTML=moduleShell(m,renderModuleControls(id));
    bindModule(id);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function moduleShell(m,body) {
    return `<div class="module-layout">
      <article class="module-main">
        <div class="module-head"><div><p class="eyebrow">${m.engine}</p><h2>${m.name}</h2><p>${m.desc}</p></div><div class="module-hero-icon">${m.symbol}</div></div>
        ${body}<div id="moduleResult" class="result-stack"></div>
      </article>
      <aside class="module-aside">
        <section><h3 class="aside-title">Phương pháp</h3><div class="method-list">${methodInfo(m.id).map(x=>`<div><i class="ti ti-circle-check"></i><span>${x}</span></div>`).join('')}</div></section>
        <section><h3 class="aside-title">Hồ sơ đang dùng</h3>${profileSummary()}</section>
        <section><h3 class="aside-title">Lưu ý</h3><p style="margin:0;color:var(--text-3);font-size:9px;line-height:1.6">Công cụ hỗ trợ tự phản chiếu và khám phá biểu tượng, không thay thế tư vấn y tế, pháp lý hoặc tài chính.</p></section>
      </aside>
    </div>`;
  }

  function profileSummary() {
    const p=state.profile;
    if(!p.date)return `<p style="font-size:10px;color:var(--text-3)">Chưa có ngày sinh.</p><button class="secondary-btn" onclick="document.querySelector('#openProfileTop').click()">Tạo hồ sơ</button>`;
    return `<div class="tag-row"><span class="tag">${esc(p.name||'Ẩn danh')}</span><span class="tag">${fmtDate(new Date(p.date+'T12:00:00'))}</span><span class="tag">${esc(p.time||'12:00')}</span></div><p style="font-size:9px;color:var(--text-3)">${esc(p.place||'Chưa có nơi sinh')}</p>`;
  }

  function methodInfo(id) {
    const map={
      tarot:['Bộ 78 lá Major và Minor Arcana','Hỗ trợ lá xuôi/ngược','Trải 1, 3, 5 và Celtic Cross'],
      astrology:['Vị trí hoàng đạo từ Astronomy Engine','Mặt Trời, Mặt Trăng và các hành tinh','Cần ngày, giờ và vị trí sinh'],
      zodiac:['Âm lịch và Can Chi từ lunar-javascript','Nạp âm, trực và ngày âm','Tính theo lịch Đông Á'],
      iching:['Ba đồng xu gieo sáu lần','Nhận diện hào động và quẻ biến','Thứ tự 64 quẻ King Wen'],
      hour:['Can Chi ngày và giờ thực','Kết hợp trực ngày và giờ địa chi','Dữ liệu từ lunar-javascript'],
      fengshui:['Tám quái, phương hướng và ngũ hành','Đề xuất hành động theo tượng quái'],
      divine:['Bộ archetype đa truyền thống','Mỗi archetype có gift, shadow và ritual'],
      personal:['Tổng hợp Bát Tự, số học, Mặt Trăng và thiên văn','Không dùng random cho dữ liệu khai sinh'],
      rune:['Đủ 24 ký tự Elder Futhark','Trải 1, 3 hoặc 5 rune','Diễn giải theo vị trí'],
      moon:['Pha và độ sáng từ SunCalc','Giờ mọc/lặn theo tọa độ hồ sơ','Dữ liệu thời điểm hiện tại'],
      cartomancy:['Bộ đủ 52 lá','Ý nghĩa riêng theo chất, số và vị trí','Trải 1, 3 hoặc 5 lá'],
      dream:['Tìm nhiều biểu tượng trong một giấc mơ','Phân tích thêm cảm xúc và bối cảnh','Không khẳng định điềm báo tuyệt đối'],
      bazi:['Tứ trụ chính xác theo tiết khí từ lunar-javascript','Ngũ hành, nạp âm và Thập Thần','Dùng ngày và giờ sinh trong hồ sơ'],
      numerology:['Hệ Pythagorean','Bảy chỉ số và năm cá nhân','Giữ các Master Number 11, 22, 33'],
      planet:['Kinh độ hoàng đạo từ Astronomy Engine','Theo dõi vị trí hành tinh hiện tại','Dùng thiên văn thật thay vì thứ trong tuần']
    };return map[id]||[];
  }

  function renderModuleControls(id) {
    if(id==='tarot')return questionControls('tarotQuestion','Điều bạn muốn soi chiếu','Rút bài', [1,3,5,10],state.tarotSize);
    if(id==='cartomancy')return questionControls('cardQuestion','Câu hỏi về tình cảm, công việc hoặc tài chính','Xào và rút', [1,3,5],state.cardSize);
    if(id==='rune')return questionControls('runeQuestion','Điều bạn đang cần chỉ dẫn','Rút Rune', [1,3,5],state.runeSize);
    if(id==='iching')return `<div class="field"><label>Câu hỏi</label><textarea id="ichingQuestion" rows="3" placeholder="Hỏi một việc cụ thể, tránh câu hỏi Có/Không..."></textarea></div><button class="primary-btn" id="runAction"><i class="ti ti-coins"></i>Gieo sáu hào</button>`;
    if(id==='dream')return `<div class="field"><label>Giấc mơ của bạn</label><textarea id="dreamText" rows="6" placeholder="Kể lại hình ảnh, cảm xúc, con người và không gian bạn nhớ..."></textarea></div><button class="primary-btn" id="runAction"><i class="ti ti-cloud-search"></i>Phân tích biểu tượng</button>`;
    if(['astrology','zodiac','hour','personal','moon','bazi','numerology','planet'].includes(id))return `${!state.profile.date?`<div class="result-card"><h3>Cần hồ sơ khai sinh</h3><p>Thêm ngày, giờ và nơi sinh để dùng engine chính xác hơn.</p><div class="control-row"><button class="primary-btn" id="needProfile">Tạo hồ sơ</button></div></div>`:''}<button class="primary-btn" id="runAction"><i class="ti ti-sparkles"></i>${actionName(id)}</button>`;
    if(id==='fengshui')return `<div class="field"><label>Không gian cần xem</label><select id="spaceType"><option>Bàn làm việc</option><option>Phòng ngủ</option><option>Nhà ở</option><option>Góc học tập</option></select></div><button class="primary-btn" id="runAction"><i class="ti ti-compass"></i>Bốc quái chỉ dẫn</button>`;
    if(id==='divine')return `<div class="field"><label>Câu hỏi</label><textarea id="divineQuestion" rows="4" placeholder="Điều gì đang cần một góc nhìn khác?"></textarea></div><button class="primary-btn" id="runAction"><i class="ti ti-bolt"></i>Thỉnh Oracle</button>`;
    return `<button class="primary-btn" id="runAction">Khám phá</button>`;
  }

  function questionControls(id,placeholder,action,sizes,current) {
    return `<div class="field"><label>Câu hỏi</label><textarea id="${id}" rows="3" placeholder="${placeholder}..."></textarea></div><div class="control-row">${sizes.map(n=>`<button class="choice ${n===current?'active':''}" data-size="${n}">${n===10?'Celtic 10':n+' lá'}</button>`).join('')}</div><button class="primary-btn" id="runAction"><i class="ti ti-sparkles"></i>${action}</button>`;
  }
  function actionName(id){return({astrology:'Lập bản đồ hành tinh',zodiac:'Xem lịch mệnh',hour:'Xem khí giờ hiện tại',personal:'Tạo bản đồ tổng hợp',moon:'Xem Mặt Trăng hiện tại',bazi:'Lập Bát Tự',numerology:'Tính bản đồ số học',planet:'Quét vị trí hành tinh'})[id]||'Khám phá'}

  function bindModule(id) {
    $('#needProfile')?.addEventListener('click',openProfile);
    $$('[data-size]').forEach(b=>b.onclick=()=>{
      $$('[data-size]').forEach(x=>x.classList.remove('active'));b.classList.add('active');
      if(id==='tarot')state.tarotSize=+b.dataset.size;if(id==='cartomancy')state.cardSize=+b.dataset.size;if(id==='rune')state.runeSize=+b.dataset.size;
    });
    $('#runAction')?.addEventListener('click',()=>runModule(id));
  }

  function runModule(id) {
    const runners={tarot:runTarot,astrology:runAstrology,zodiac:runZodiac,iching:runIChing,hour:runHour,fengshui:runFengshui,divine:runDivine,personal:runPersonal,rune:runRune,moon:runMoon,cartomancy:runCards,dream:runDream,bazi:runBazi,numerology:runNumerology,planet:runPlanet};
    try { runners[id]?.(); } catch(err){ console.error(err); $('#moduleResult').innerHTML=resultCard('Không thể tính kết quả',`Engine trả về lỗi: ${esc(err.message)}. Hãy kiểm tra hồ sơ và thử lại.`); }
  }

  function resultCard(title,text,extra='') { return `<section class="result-card"><h3>${title}</h3><p>${text}</p>${extra}</section>`; }
  function renderResult(html,summary) {
    $('#moduleResult').innerHTML=html;
    if(summary)recordResult(state.activeModule,summary);
  }
  function recordResult(moduleId,summary) {
    const item={id:String(Date.now())+cryptoRand(9999),moduleId,title:moduleById(moduleId)?.name||moduleId,summary,time:new Date().toISOString(),saved:false};
    state.history.unshift(item);state.history=state.history.slice(0,100);save(STORE.history,state.history);
  }

  function runTarot() {
    const n=state.tarotSize,labels=n===1?['Thông điệp']:n===3?['Gốc rễ','Hiện tại','Hướng đi']:n===5?['Nền tảng','Cơ hội','Thử thách','Lời khuyên','Kết quả']:['Hiện tại','Thử thách','Nền tảng','Quá khứ','Khả năng','Tương lai gần','Nội tâm','Môi trường','Hy vọng/Nỗi sợ','Kết quả'];
    const cards=shuffle(TAROT).slice(0,n).map((c,i)=>({...c,reversed:cryptoRand(100)<28,label:labels[i]}));
    const question=$('#tarotQuestion').value.trim();
    const spread=`<div class="tarot-spread">${cards.map((c,i)=>`<button class="tarot-card" data-tarot="${i}"><span class="tarot-card-inner"><span class="tarot-face tarot-front">✦<small>${c.label}</small></span><span class="tarot-face tarot-back"><span>${c.symbol}</span><strong>${c.vi}${c.reversed?' · Ngược':''}</strong></span></span></button>`).join('')}</div>`;
    let html=spread+resultCard('Tổng quan trải bài',`${question?`Với câu hỏi “${esc(question)}”, `:''}${cards.map(c=>`${c.vi} nhấn vào ${c.reversed?c.rev:c.up}`).join('; ')}.`);
    html+=cards.map(c=>resultCard(`${c.symbol} ${c.label} · ${c.vi}${c.reversed?' (Ngược)':''}`,c.reversed?capitalize(c.rev):capitalize(c.up),`<h4>Trọng tâm</h4><p>${c.suit?`${c.suit} liên quan đến ${SUITS[c.suit].theme}.`:c.vi+' đang đặt một bài học lớn vào vị trí này.'}</p>`)).join('');
    renderResult(html,`${cards.map(c=>c.vi).join(' · ')}${question?' — '+question:''}`);
    $$('[data-tarot]').forEach((b,i)=>setTimeout(()=>b.classList.add('flipped'),120+i*90));
  }

  function runCards() {
    const deck=[];Object.values(SUITS).forEach(s=>MINOR_RANKS.slice(0,13).forEach((r,i)=>deck.push({suit:s,rank:['A','2','3','4','5','6','7','8','9','10','J','Q','K'][i],data:r})));
    const n=state.cardSize,labels=n===1?['Thông điệp']:n===3?['Điều đã có','Điều đang diễn ra','Hướng phát triển']:['Gốc rễ','Nguồn lực','Trở ngại','Hành động','Kết quả'];
    const cards=shuffle(deck).slice(0,n),q=$('#cardQuestion').value.trim();
    const spread=`<div class="playing-spread">${cards.map((c,i)=>`<div class="playing-card ${['♥','♦'].includes(c.suit.symbol)?'red':''}"><span>${c.rank}${c.suit.symbol}</span><span class="suit">${c.suit.symbol}</span><small>${labels[i]}</small></div>`).join('')}</div>`;
    let html=spread+resultCard('Thông điệp chung',`${q?`Với câu hỏi “${esc(q)}”, `:''}${cards.map(c=>`${c.rank} ${playingSuit(c.suit.symbol)} mang ${c.data[2]} trong vùng ${c.suit.theme}`).join('; ')}.`);
    html+=cards.map((c,i)=>resultCard(`${c.rank}${c.suit.symbol} · ${labels[i]}`,`${capitalize(c.data[2])}. Chất ${playingSuit(c.suit.symbol)} đưa trọng tâm về ${c.suit.theme}.`,`<h4>Điểm cần tránh</h4><p>${capitalize(c.data[3])}.</p>`)).join('');
    renderResult(html,cards.map(c=>c.rank+c.suit.symbol).join(' · '));
  }

  function runRune() {
    const n=state.runeSize,labels=n===1?['Thông điệp']:n===3?['Gốc rễ','Hiện tại','Chỉ dẫn']:['Quá khứ','Hiện tại','Trở ngại','Nguồn lực','Hướng đi'];
    const runes=shuffle(RUNES).slice(0,n),q=$('#runeQuestion').value.trim();
    let html=resultCard('Rune cast',`${q?`Câu hỏi “${esc(q)}” được soi qua `:'Trải rune mở ra '}${runes.map(r=>r[1]).join(', ')}.`);
    html+=runes.map((r,i)=>resultCard(`${r[0]} ${r[1]} · ${labels[i]}`,capitalize(r[2])+'.',`<h4>Chỉ dẫn</h4><p>${capitalize(r[3])}.</p>`)).join('');
    renderResult(html,runes.map(r=>r[1]).join(' · '));
  }

  function runIChing() {
    const q=$('#ichingQuestion').value.trim(),lines=Array.from({length:6},()=>{const coins=[0,0,0].map(()=>cryptoRand(2)+2),sum=coins.reduce((a,b)=>a+b,0);return{sum,yang:sum===7||sum===9,moving:sum===6||sum===9}});
    const binary=lines.map(x=>x.yang?1:0),changed=lines.map(x=>x.moving?(x.yang?0:1):(x.yang?1:0));
    const idx=bitsToHexIndex(binary),idx2=bitsToHexIndex(changed),moving=lines.map((x,i)=>x.moving?i+1:null).filter(Boolean);
    const visual=`<div class="hex-lines">${lines.map(x=>`<div class="hex-line ${x.moving?'moving':''}">${x.yang?'<span></span>':'<span></span><span></span>'}</div>`).join('')}</div>`;
    const theme=HEX_THEMES[idx%HEX_THEMES.length]||'chuyển hóa theo thời';
    let html=visual+resultCard(`Quẻ chủ ${idx+1} · ${HEX_NAMES[idx]}`,`${q?`Với câu hỏi “${esc(q)}”, `:''}quẻ đặt trọng tâm vào ${theme}. Hãy quan sát hoàn cảnh trước khi cố ép một kết quả.`,`<div class="tag-row"><span class="tag">${moving.length?`Hào động: ${moving.join(', ')}`:'Không có hào động'}</span></div>`);
    if(moving.length)html+=resultCard(`Quẻ biến ${idx2+1} · ${HEX_NAMES[idx2]}`,`Khi các hào động chuyển, tình thế hướng về ${HEX_THEMES[idx2%HEX_THEMES.length]||'một trạng thái mới'}.`,`<h4>Cách đọc</h4><p>Quẻ chủ mô tả hiện trạng; hào động là điểm chuyển; quẻ biến cho thấy xu hướng nếu năng lượng tiếp tục.</p>`);
    renderResult(html,`${HEX_NAMES[idx]}${moving.length?' → '+HEX_NAMES[idx2]:''}`);
  }

  function bitsToHexIndex(bits) {
    const lower=bits[0]+bits[1]*2+bits[2]*4,upper=bits[3]+bits[4]*2+bits[5]*4;
    return (lower*8+upper)%64;
  }

  function runBazi() {
    if(!ensureProfile())return;
    const {solar,lunar,eight}=lunarProfile();
    const pillars=[['Năm',eight.getYear(),eight.getYearWuXing(),eight.getYearNaYin(),eight.getYearShiShenGan()],['Tháng',eight.getMonth(),eight.getMonthWuXing(),eight.getMonthNaYin(),eight.getMonthShiShenGan()],['Ngày',eight.getDay(),eight.getDayWuXing(),eight.getDayNaYin(),'Nhật chủ'],['Giờ',eight.getTime(),eight.getTimeWuXing(),eight.getTimeNaYin(),eight.getTimeShiShenGan()]];
    const counts={Kim:0,Mộc:0,Thủy:0,Hỏa:0,Thổ:0},elementChars={Kim:'金',Mộc:'木',Thủy:'水',Hỏa:'火',Thổ:'土'};pillars.forEach(p=>Object.entries(elementChars).forEach(([e,ch])=>counts[e]+=(p[2].match(new RegExp(ch,'g'))||[]).length));
    const bars=Object.entries(counts).map(([e,n])=>`<div class="element-row"><span>${e}</span><div class="bar"><span style="width:${Math.max(8,n/8*100)}%;background:${elementColor(e)}"></span></div><b>${n}</b></div>`).join('');
    const strong=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0],weak=Object.entries(counts).sort((a,b)=>a[1]-b[1])[0][0];
    const html=resultCard('Tứ Trụ',`Lá số theo tiết khí cho ${esc(state.profile.name||'bạn')}. Nhật chủ là <b>${cn(eight.getDayGan())} · ${cn(eight.getDayWuXing()[0])}</b>.`,`<div class="pillar-grid">${pillars.map(p=>`<div class="pillar"><small>${p[0]}</small><strong>${cn(p[1])}</strong><span>${cn(p[2])} · ${cn(p[4])}</span></div>`).join('')}</div><div class="element-chart">${bars}</div>`)
      +resultCard('Cân bằng Ngũ Hành',`${strong} đang nổi bật, trong khi ${weak} là khí cần được chú ý thêm. Đây là bản đồ cân bằng chứ không phải phán quyết tốt/xấu.`,`<h4>Nạp âm bốn trụ</h4><p>${pillars.map(p=>`${p[0]}: ${NAYIN[p[3]]||cn(p[3])}`).join(' · ')}</p><h4>Lịch âm</h4><p>Ngày ${lunar.getDay()} tháng ${lunar.getMonth()} năm ${lunar.getYear()} · Trực ${cn(lunar.getZhiXing())}</p>`);
    renderResult(html,`${pillars.map(p=>cn(p[1])).join(' · ')} — mạnh ${strong}, thiếu ${weak}`);
  }

  function runZodiac() {
    if(!ensureProfile())return;
    const {lunar}=lunarProfile(),animal=cn(lunar.getYearShengXiao()),gz=cn(lunar.getYearInGanZhiExact()),nayin=NAYIN[lunar.getYearNaYin()]||cn(lunar.getYearNaYin());
    const html=resultCard(`${animal} · ${gz}`,`Năm sinh của bạn thuộc chi ${animal}, can chi ${gz}, nạp âm ${nayin}.`,`<div class="tag-row"><span class="tag">Âm lịch ${lunar.getDay()}/${lunar.getMonth()}/${lunar.getYear()}</span><span class="tag">Thái Tuế: ${cn(lunar.getYearPositionTaiSuiDesc())}</span></div>`)
      +resultCard('Khí chất năm sinh',`Con giáp mô tả nhịp xã hội và cách bạn phản ứng với môi trường; can chi và nạp âm bổ sung lớp ngũ hành.`,`<h4>Ngày sinh âm lịch</h4><p>Ngày ${lunar.getDay()} tháng ${lunar.getMonth()} năm ${lunar.getYear()} · Trực ${cn(lunar.getZhiXing())}.</p>`);
    renderResult(html,`${animal} · ${gz} · ${nayin}`);
  }

  function runHour() {
    const now=new Date(),solar=Solar.fromYmdHms(now.getFullYear(),now.getMonth()+1,now.getDate(),now.getHours(),now.getMinutes(),0),lunar=solar.getLunar();
    const html=resultCard(`Giờ ${cn(lunar.getTimeInGanZhi())} · Ngày ${cn(lunar.getDayInGanZhi())}`,`Khí giờ hiện tại đi qua địa chi ${cn(lunar.getTimeZhi())}, kết hợp với Trực ${cn(lunar.getZhiXing())} của ngày.`,`<div class="tag-row"><span class="tag">Tuần ${cn(lunar.getTimeXun())}</span><span class="tag">Không vong ${cn(lunar.getTimeXunKong())}</span><span class="tag">Hỷ thần ${cn(lunar.getTimePositionXiDesc())}</span></div>`)
      +resultCard('Việc nên ưu tiên',`Nên: ${translateActions(lunar.getDayYi()).slice(0,5).join(', ')||'giữ nhịp ổn định'}.`,`<h4>Việc cần cân nhắc</h4><p>${translateActions(lunar.getDayJi()).slice(0,5).join(', ')||'tránh quyết định vội'}</p>`);
    renderResult(html,`Giờ ${cn(lunar.getTimeInGanZhi())} · Trực ${cn(lunar.getZhiXing())}`);
  }

  function runMoon() {
    const p=state.profile,lat=Number.isFinite(+p.lat)?+p.lat:10.8231,lng=Number.isFinite(+p.lng)?+p.lng:106.6297,now=new Date();
    const ill=SunCalc.getMoonIllumination(now),times=SunCalc.getMoonTimes(now,lat,lng),phase=moonPhaseName(ill.phase);
    const html=resultCard(`${phase} · ${Math.round(ill.fraction*100)}% sáng`,`Mặt Trăng hiện ở chu kỳ ${ill.phase<.5?'đang lớn':'đang khuyết'}, góc pha ${Math.round(ill.angle*180/Math.PI)}°.`,`<div class="tag-row"><span class="tag">Mọc ${times.rise?times.rise.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}):'không quan sát'}</span><span class="tag">Lặn ${times.set?times.set.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}):'không quan sát'}</span></div>`)
      +resultCard('Nhịp thực hành',moonAdvice(ill.phase),`<h4>Vị trí dùng để tính</h4><p>${esc(p.place||'TP. Hồ Chí Minh')} · ${lat.toFixed(3)}, ${lng.toFixed(3)}</p>`);
    renderResult(html,`${phase} · ${Math.round(ill.fraction*100)}%`);
  }

  function runAstrology() {
    if(!ensureProfile())return;
    const date=profileDate(),bodies=['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
    const rows=bodies.map(name=>{const lon=safeLongitude(name,date),z=zodiacAt(lon);return{name,lon,z}});
    const sun=rows[0],moon=rows[1],html=resultCard('Big Two thiên văn',`Mặt Trời ở ${sun.z.sign} ${sun.z.degree.toFixed(1)}°, Mặt Trăng ở ${moon.z.sign} ${moon.z.degree.toFixed(1)}°. Đây là vị trí hoàng đạo tại thời điểm sinh, tính bằng Astronomy Engine.`,`<div class="planet-table">${rows.map(r=>`<div class="planet-row"><b>${planetVi(r.name)}</b><span>${r.z.sign}</span><span>${r.z.degree.toFixed(1)}°</span></div>`).join('')}</div>`)
      +resultCard('Cách đọc',`Mặt Trời mô tả trung tâm ý chí; Mặt Trăng mô tả nhu cầu cảm xúc. Các hành tinh cá nhân cho biết cách tư duy, gắn kết và hành động.`,`<h4>Giới hạn hiện tại</h4><p>V2 tính vị trí hành tinh thật. Hệ nhà và Ascendant sẽ là lớp tiếp theo vì cần chuẩn hóa múi giờ lịch sử và phép tính chân trời.</p>`);
    renderResult(html,`Sun ${sun.z.sign} · Moon ${moon.z.sign}`);
  }

  function runPlanet() {
    const date=new Date(),bodies=['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
    const rows=bodies.map(name=>{const lon=safeLongitude(name,date),z=zodiacAt(lon);return{name,z}});
    const html=resultCard('Bầu trời hiện tại',`Vị trí hoàng đạo của các hành tinh tại ${nowText()}.`,`<div class="planet-table">${rows.map(r=>`<div class="planet-row"><b>${planetVi(r.name)}</b><span>${r.z.sign}</span><span>${r.z.degree.toFixed(1)}°</span></div>`).join('')}</div>`)
      +resultCard('Năng lượng nổi bật',`${planetVi(rows[new Date().getDay()%rows.length].name)} là điểm quan sát trong ngày. Hãy dùng bảng trên để theo dõi transit thay vì gán một lời tiên tri cố định.`);
    renderResult(html,rows.slice(0,4).map(r=>`${planetVi(r.name)} ${r.z.sign}`).join(' · '));
  }

  function runNumerology() {
    if(!ensureProfile())return;
    const p=state.profile,[y,m,d]=p.date.split('-').map(Number),name=normalizeName(p.name||'');
    const life=reduceNum(sumDigits(`${y}${m}${d}`)),birthday=reduceNum(d),expression=reduceNum([...name].reduce((s,c)=>s+letterNum(c),0));
    const vowels=new Set('AEIOUY'),soul=reduceNum([...name].filter(c=>vowels.has(c)).reduce((s,c)=>s+letterNum(c),0)),personality=reduceNum([...name].filter(c=>!vowels.has(c)).reduce((s,c)=>s+letterNum(c),0));
    const attitude=reduceNum(m+d),personalYear=reduceNum(d+m+new Date().getFullYear());
    const nums=[['Đường đời',life],['Ngày sinh',birthday],['Biểu đạt',expression],['Linh hồn',soul],['Nhân cách',personality],['Thái độ',attitude],['Năm cá nhân',personalYear]];
    const html=resultCard('Bản đồ số học',`Bảy chỉ số được tính từ ngày sinh và tên không dấu theo hệ Pythagorean.`,`<div class="planet-table">${nums.map(([n,v])=>`<div class="planet-row"><b>${n}</b><span>${NUM_DESC[v]?.[0]||'Đặc biệt'}</span><span>${v}</span></div>`).join('')}</div>`)
      +resultCard(`Đường đời ${life} · ${NUM_DESC[life]?.[0]||'Đặc biệt'}`,capitalize(NUM_DESC[life]?.[1]||'một cấu hình hiếm')+'.',`<h4>Năm cá nhân ${personalYear}</h4><p>${NUM_DESC[personalYear]?.[1]||'một chu kỳ chuyển tiếp'}.</p>`);
    renderResult(html,nums.map(([n,v])=>`${n} ${v}`).join(' · '));
  }

  function runDream() {
    const raw=$('#dreamText').value.trim();if(!raw){toast('Hãy kể lại giấc mơ trước');return;}
    const text=raw.toLowerCase(),found=DREAMS.filter(d=>d[0].some(k=>text.includes(k))).slice(0,6),emotion=dreamEmotion(text);
    const symbols=found.length?found:[[[''],'Biểu tượng cá nhân','ký ức và cảm xúc riêng đang tìm cách được gọi tên','Chi tiết nào còn đọng lại mạnh nhất khi tỉnh dậy?']];
    let html=resultCard(`Bầu khí · ${emotion.name}`,emotion.desc,`<div class="tag-row">${symbols.map(s=>`<span class="tag">${s[1]}</span>`).join('')}</div>`);
    html+=symbols.map(s=>resultCard(s[1],capitalize(s[2])+'.',`<h4>Câu hỏi phản chiếu</h4><p>${s[3]}</p>`)).join('');
    html+=resultCard('Nhật ký 3 bước','1. Ghi lại cảm giác cơ thể. 2. Liên hệ với một sự kiện gần đây. 3. Viết một hành động nhỏ giúp bạn đáp lại thông điệp.');
    renderResult(html,`${emotion.name} · ${symbols.map(s=>s[1]).join(', ')}`);
  }

  function runFengshui() {
    const q=pick(BAGUA),space=$('#spaceType').value;
    const html=resultCard(`${q[0]} ${q[1]} · ${q[2]}`,`${space} nhận tượng ${q[1]}: ${q[4].toLowerCase()}.`,`<div class="tag-row"><span class="tag">${q[3]}</span><span class="tag">${q[2]}</span></div>`)
      +resultCard('Điều chỉnh thực tế',q[5],`<h4>Thử trong 7 ngày</h4><p>Dọn một điểm nghẽn, tăng ánh sáng phù hợp và quan sát thay đổi trong cách bạn sử dụng không gian.</p>`);
    renderResult(html,`${space} · ${q[1]} · ${q[3]}`);
  }

  function runDivine() {
    const q=$('#divineQuestion').value.trim(),d=pick(DEITIES);
    const html=resultCard(`${d[0]} · ${d[1]}`,`${q?`Trước câu hỏi “${esc(q)}”, `:''}${d[2]}.`,`<h4>Shadow</h4><p>${d[3]}.</p>`)
      +resultCard('Ritual hành động',d[4],`<p style="margin-top:10px">Oracle không quyết định thay bạn; nó đưa ra một archetype để bạn đối thoại với tình huống.</p>`);
    renderResult(html,`${d[0]} · ${d[1]}`);
  }

  function runPersonal() {
    if(!ensureProfile())return;
    const {lunar,eight}=lunarProfile(),[y,m,d]=state.profile.date.split('-').map(Number),life=reduceNum(sumDigits(`${y}${m}${d}`)),moon=SunCalc.getMoonIllumination(profileDate()),sun=zodiacAt(safeLongitude('Sun',profileDate()));
    const html=resultCard('Bản đồ tổng hợp',`${esc(state.profile.name||'Bạn')} mang Nhật chủ ${cn(eight.getDayGan())} (${cn(eight.getDayWuXing()[0])}), Đường đời ${life}, Mặt Trời ${sun.sign} và sinh dưới pha ${moonPhaseName(moon.phase)}.`,`<div class="tag-row"><span class="tag">${cn(lunar.getYearShengXiao())}</span><span class="tag">${cn(eight.getDay())}</span><span class="tag">Life Path ${life}</span><span class="tag">${sun.sign}</span></div>`)
      +resultCard('Mẫu năng lượng',`Bát Tự mô tả cấu trúc khí; số học mô tả nhịp phát triển; chiêm tinh mô tả vị trí hành tinh; pha trăng thêm bối cảnh cảm xúc của thời điểm sinh.`,`<h4>Câu hỏi tích hợp</h4><p>Làm sao bạn dùng phẩm chất ${NUM_DESC[life]?.[1]||'độc đáo'} để biểu đạt Nhật chủ ${cn(eight.getDayGan())} một cách cân bằng hơn?</p>`);
    renderResult(html,`${cn(eight.getDay())} · Life ${life} · Sun ${sun.sign}`);
  }

  function renderDaily() {
    setHeader('THÔNG ĐIỆP NGÀY','Một điểm dừng cho hôm nay');
    const d=getDailySignal(),moon=SunCalc.getMoonIllumination(new Date()),bagua=BAGUA[new Date().getDate()%8];
    $('#content').innerHTML=`<div class="welcome">
      <div class="welcome-main"><p class="eyebrow">${fmtDate()}</p><h2>${d.title}</h2><p>${d.message}</p><div class="welcome-actions"><button class="primary-btn" data-module="${d.module}">Đi sâu vào ${moduleById(d.module).name}</button></div></div>
      <div class="daily-card"><span class="daily-date">Mặt Trăng</span><div class="daily-symbol">${moonPhaseSymbol(moon.phase)}</div><h3>${moonPhaseName(moon.phase)}</h3><p>${Math.round(moon.fraction*100)}% được chiếu sáng</p></div>
    </div>${resultCard(`${bagua[0]} Quái ${bagua[1]} trong ngày`,bagua[5],`<div class="tag-row"><span class="tag">${bagua[2]}</span><span class="tag">${bagua[3]}</span></div>`)}<div class="section-head"><div><h2>Ba câu hỏi cuối ngày</h2></div></div>${['Điều gì đã cho bạn năng lượng?','Điều gì đang cần được khép lại?','Ngày mai bạn muốn giữ lại một điều gì?'].map((q,i)=>resultCard(`0${i+1}`,q)).join('')}`;
  }

  function renderHistory(savedOnly) {
    setHeader(savedOnly?'BỘ SƯU TẬP':'LỊCH SỬ',savedOnly?'Những kết quả bạn giữ lại':'Dòng thời gian khám phá');
    const items=savedOnly?state.history.filter(x=>x.saved):state.history;
    $('#content').innerHTML=`${!savedOnly&&items.length?'<div class="section-head"><div><p>Lưu tối đa 100 kết quả trên thiết bị.</p></div><button class="secondary-btn" id="clearHistory"><i class="ti ti-trash"></i>Xóa lịch sử</button></div>':''}${items.length?`<div class="history-list">${items.map(historyItem).join('')}</div>`:`<div class="empty"><i class="ti ${savedOnly?'ti-bookmark':'ti-history'}"></i><h3>${savedOnly?'Chưa lưu kết quả nào':'Chưa có lịch sử'}</h3><p>Mỗi lần xem sẽ được lưu tại đây.</p></div>`}`;
  }
  function historyItem(x) {
    const m=moduleById(x.moduleId)||{icon:'ti-sparkles'};
    return `<article class="history-item"><span class="history-icon"><i class="ti ${m.icon}"></i></span><div><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p></div><div><time>${new Date(x.time).toLocaleString('vi-VN',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</time><button class="ghost-btn" data-save-result="${x.id}" aria-label="Lưu">${x.saved?'<i class="ti ti-bookmark-filled"></i>':'<i class="ti ti-bookmark"></i>'}</button></div></article>`;
  }
  function toggleSaved(id) {
    const item=state.history.find(x=>x.id===id);if(!item)return;item.saved=!item.saved;save(STORE.history,state.history);toast(item.saved?'Đã lưu kết quả':'Đã bỏ lưu');renderHistory(state.view==='saved');
  }
  function clearHistory() {
    state.history=[];save(STORE.history,state.history);toast('Đã xóa lịch sử');renderHistory(false);
  }

  function ensureProfile() { if(state.profile.date)return true;toast('Hãy tạo hồ sơ khai sinh trước');openProfile();return false; }
  function profileDate() {
    const p=state.profile,[y,m,d]=p.date.split('-').map(Number),[h,min]=(p.time||'12:00').split(':').map(Number);
    return new Date(Date.UTC(y,m-1,d,h-(p.timezone??7),min));
  }
  function lunarProfile() {
    const p=state.profile,[y,m,d]=p.date.split('-').map(Number),[h,min]=(p.time||'12:00').split(':').map(Number),solar=Solar.fromYmdHms(y,m,d,h,min,0),lunar=solar.getLunar();
    return{solar,lunar,eight:lunar.getEightChar()};
  }
  function safeLongitude(name,date) {
    try { return mod(Astronomy.EclipticLongitude(Astronomy.Body[name],date),360); } catch {
      try { const v=Astronomy.GeoVector(Astronomy.Body[name],date,true);return mod(Math.atan2(v.y,v.x)*180/Math.PI,360); } catch { return 0; }
    }
  }
  function zodiacAt(lon) { const signs=['Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ','Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'],i=Math.floor(mod(lon,360)/30);return{sign:signs[i],degree:mod(lon,30)}; }
  function planetVi(n){return({Sun:'Mặt Trời',Moon:'Mặt Trăng',Mercury:'Sao Thủy',Venus:'Sao Kim',Mars:'Sao Hỏa',Jupiter:'Sao Mộc',Saturn:'Sao Thổ',Uranus:'Thiên Vương',Neptune:'Hải Vương',Pluto:'Diêm Vương'})[n]||n}
  function moonPhaseName(p){return p<.03||p>.97?'Trăng Mới':p<.22?'Lưỡi Liềm Đầu Tháng':p<.28?'Thượng Huyền':p<.47?'Trăng Khuyết Lớn Dần':p<.53?'Trăng Tròn':p<.72?'Trăng Khuyết Nhỏ Dần':p<.78?'Hạ Huyền':'Lưỡi Liềm Cuối Tháng'}
  function moonPhaseSymbol(p){return p<.03||p>.97?'●':p<.25?'☽':p<.5?'◐':p<.53?'○':p<.75?'◑':'☾'}
  function moonAdvice(p){if(p<.1||p>.9)return'Giai đoạn đặt ý định và giảm nhiễu. Chọn một hạt giống nhỏ cho chu kỳ mới.';if(p<.45)return'Giai đoạn xây lực. Hành động đều và theo dõi thứ đang lớn lên.';if(p<.6)return'Giai đoạn soi sáng. Nhìn rõ kết quả, cảm xúc và điều đã bị che.';return'Giai đoạn thu hoạch và buông. Hoàn tất, dọn bớt và trả năng lượng về.'}
  function elementColor(e){return({Kim:'#d8e0ea',Mộc:'#75b798',Thủy:'#79a7d8',Hỏa:'#d86e6e',Thổ:'#d6b36a'})[e]||'#aaa'}
  function cn(v=''){let out=String(v);Object.entries({...NAYIN,...CN}).sort((a,b)=>b[0].length-a[0].length).forEach(([from,to])=>{out=out.split(from).join(to)});return out.replace(/(Giáp|Ất|Bính|Đinh|Mậu|Kỷ|Canh|Tân|Nhâm|Quý)(Tý|Sửu|Dần|Mão|Thìn|Tỵ|Ngọ|Mùi|Thân|Dậu|Tuất|Hợi)/g,'$1 $2')}
  function translateActions(items=[]){return items.map(x=>DAY_ACTIONS[x]||cn(x))}
  function sumDigits(v){return[...String(v)].reduce((s,n)=>s+(+n||0),0)}
  function reduceNum(n){while(n>9&&![11,22,33].includes(n))n=sumDigits(n);return n||0}
  function normalizeName(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z]/g,'')}
  function letterNum(c){return((c.charCodeAt(0)-65)%9)+1}
  function mod(n,m){return((n%m)+m)%m}
  function capitalize(s=''){return s.charAt(0).toUpperCase()+s.slice(1)}
  function playingSuit(symbol){return({'♥':'Cơ','♦':'Rô','♣':'Tép','♠':'Bích'})[symbol]||symbol}
  function dreamEmotion(t){if(/sợ|hoảng|đuổi|chạy|rơi|ngã|máu|khóc|lo|đau|tối/.test(t))return{name:'Căng thẳng',desc:'Tiềm thức có thể đang xử lý cảnh giác, áp lực hoặc điều chưa được giải quyết.'};if(/vui|tự do|đẹp|sáng|bình yên|hạnh phúc|cười/.test(t))return{name:'Mở rộng',desc:'Giấc mơ mang sắc thái tích hợp, hy vọng hoặc khám phá khả năng mới.'};return{name:'Trung tính',desc:'Tâm trí đang sắp xếp ký ức và biểu tượng mà chưa tạo cảm xúc áp đảo.'}}
  function getDailySignal(){const pool=[{symbol:'✦',title:'Điều rõ ràng cần được chọn',message:'Đừng hỏi mọi khả năng cùng lúc. Chọn một câu hỏi đủ thật để đi sâu.',module:'tarot'},{symbol:'☯',title:'Dừng để thấy điểm chuyển',message:'Một thay đổi nhỏ ở đúng vị trí có thể làm toàn bộ tình thế đổi hướng.',module:'iching'},{symbol:'☾',title:'Lắng nghe nhịp bên trong',message:'Năng lượng không phải lúc nào cũng cần được đẩy lên; đôi khi nó cần được thu về.',module:'moon'},{symbol:'命',title:'Trở về cấu trúc gốc',message:'Điều đang thiếu có thể không phải nỗ lực, mà là một cách phân phối năng lượng khác.',module:'bazi'}];return pool[Math.floor(Date.now()/86400000)%pool.length]}
  function buildTarot(){
    const cards=TAROT_MAJOR.map(x=>({name:x[0],vi:x[1],up:x[2],rev:x[3],symbol:x[4],major:true}));
    Object.entries(SUITS).forEach(([suit,s])=>MINOR_RANKS.forEach((r,i)=>cards.push({name:`${r[0]} of ${suit}`,vi:`${r[1]} ${s.vi}`,up:`${r[2]} trong ${s.theme}`,rev:`${r[3]} trong ${s.theme}`,symbol:s.symbol,suit})));
    return cards;
  }
  function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;$('#toastRegion').append(t);setTimeout(()=>t.remove(),2400)}

  function drawSky() {
    const c=$('#sky'),x=c.getContext('2d');let stars=[];
    function resize(){const d=Math.min(devicePixelRatio||1,2);c.width=innerWidth*d;c.height=innerHeight*d;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';x.setTransform(d,0,0,d,0,0);stars=Array.from({length:Math.min(160,Math.floor(innerWidth*innerHeight/8500))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1+.2,a:Math.random()*.45+.08}));}
    function draw(){x.clearRect(0,0,innerWidth,innerHeight);stars.forEach(s=>{x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fillStyle=`rgba(214,179,106,${s.a})`;x.fill()});requestAnimationFrame(draw)}
    resize();addEventListener('resize',resize);draw();
  }
})();
