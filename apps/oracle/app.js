(function () {
  'use strict';

  const cards = [
    ['0','Kẻ Khờ','ti ti-balloon','Một khởi đầu đang mở ra. Hôm nay, sự tò mò sẽ đưa bạn đi xa hơn một kế hoạch hoàn hảo.','Đâu là bước nhỏ bạn có thể thử mà không cần biết trước toàn bộ kết quả?'],
    ['I','Nhà Ảo Thuật','ti ti-wand','Bạn đã có đủ công cụ để bắt đầu. Điều còn thiếu không phải năng lực, mà là quyết định dùng nó vào đâu.','Hôm nay, bạn muốn chủ động tạo ra điều gì?'],
    ['II','Nữ Tư Tế','ti ti-moon','Có một điều bạn đã cảm thấy nhưng chưa gọi thành tên. Hãy để khoảng lặng nói trước khi tìm thêm lời khuyên bên ngoài.','Cảm giác đầu tiên của bạn đang cố nhắc điều gì?'],
    ['III','Hoàng Hậu','ti ti-flower','Năng lượng nuôi dưỡng đang hiện diện. Hãy chăm điều bạn muốn lớn lên bằng sự kiên nhẫn và dịu dàng.','Điều gì trong đời bạn đang cần được chăm sóc thay vì thúc ép?'],
    ['IV','Hoàng Đế','ti ti-building-castle','Một ranh giới rõ ràng sẽ mang lại bình an. Hôm nay phù hợp để sắp xếp, quyết định và đứng vững trong lựa chọn của mình.','Bạn cần đặt lại trật tự ở đâu?'],
    ['V','Giáo Hoàng','ti ti-book','Một nguyên tắc cũ đang cho bạn điểm tựa. Hãy học từ kinh nghiệm, nhưng chỉ giữ lại điều còn thật sự phù hợp.','Giá trị nào bạn không muốn đánh đổi?'],
    ['VI','Tình Nhân','ti ti-heart','Một lựa chọn cần sự đồng thuận giữa trái tim và lý trí. Điều đúng thường là điều giúp bạn sống thật hơn với chính mình.','Lựa chọn nào phản ánh con người thật của bạn?'],
    ['VII','Cỗ Xe','ti ti-car','Đà tiến đang đến, nhưng cần một hướng đi duy nhất. Thu năng lượng đang phân tán và đặt nó vào điều quan trọng nhất.','Đích đến nào xứng đáng với toàn bộ sự tập trung hôm nay?'],
    ['VIII','Sức Mạnh','ti ti-paw','Sức mạnh hôm nay không nằm ở ép buộc. Sự điềm tĩnh, kiên nhẫn và tử tế với chính mình sẽ giúp bạn đi qua điều khó.','Bạn có thể mềm lại mà vẫn giữ vững điều gì?'],
    ['IX','Ẩn Sĩ','ti ti-lamp','Lùi lại một nhịp không có nghĩa là bỏ cuộc. Khoảng riêng tư sẽ giúp bạn nghe được câu trả lời vốn đã ở bên trong.','Bạn cần tạm rời tiếng ồn nào?'],
    ['X','Bánh Xe Số Phận','ti ti-refresh','Nhịp cũ đang chuyển. Đừng cố giữ mọi thứ đứng yên; hãy chú ý cơ hội xuất hiện khi hoàn cảnh thay đổi.','Bạn có thể thích nghi với thay đổi này như thế nào?'],
    ['XI','Công Lý','ti ti-scale','Sự rõ ràng đến từ việc nhìn cả mong muốn lẫn hậu quả. Hãy lựa chọn dựa trên sự thật, không chỉ cảm xúc tức thời.','Điều gì là công bằng với cả bạn và người liên quan?'],
    ['XII','Người Treo Ngược','ti ti-perspective','Một góc nhìn mới quan trọng hơn việc cố tiến lên. Tạm dừng có chủ ý sẽ hé lộ điều mà sự vội vàng che khuất.','Nếu nhìn ngược lại, bạn sẽ thấy điều gì khác?'],
    ['XIII','Chuyển Hóa','ti ti-butterfly','Một chương đang khép lại để tạo chỗ cho điều mới. Buông bỏ đúng lúc là một hành động sống, không phải mất mát.','Điều gì đã hoàn thành vai trò của nó?'],
    ['XIV','Tiết Chế','ti ti-droplets','Hôm nay cần sự pha trộn vừa đủ: làm và nghỉ, nói và nghe, mong muốn và thực tế. Đừng đi đến cực đoan.','Bạn cần điều chỉnh nhịp độ ở đâu?'],
    ['XV','Bóng Tối','ti ti-link','Một thói quen hoặc nỗi sợ đang khiến lựa chọn có vẻ ít hơn thực tế. Gọi đúng tên nó là bước đầu để lấy lại tự do.','Điều gì đang giữ bạn lại vì bạn cho phép nó?'],
    ['XVI','Tòa Tháp','ti ti-bolt','Một sự thật có thể làm rung cấu trúc cũ, nhưng cũng giải phóng bạn khỏi điều không còn vững. Hãy giữ phần cốt lõi, để phần giả tạo rơi xuống.','Điều gì cần được xây lại trên nền thật hơn?'],
    ['XVII','Ngôi Sao','ti ti-sparkles','Sau những ngày nặng nề, hy vọng đang trở lại theo cách yên tĩnh. Hãy tin vào quá trình hồi phục và tiếp tục nuôi ánh sáng nhỏ.','Điều gì vẫn khiến bạn tin vào ngày mai?'],
    ['XVIII','Mặt Trăng','ti ti-moon-stars','Mọi thứ chưa hoàn toàn rõ ràng. Đừng vội kết luận khi cảm xúc đang phóng đại bóng tối; hãy đi chậm và kiểm chứng.','Đâu là sự thật, đâu là điều bạn đang lo sợ?'],
    ['XIX','Mặt Trời','ti ti-sun','Một nguồn sáng rõ ràng đang hiện diện. Cho phép mình vui, được nhìn thấy và ghi nhận điều đang tiến triển tốt.','Bạn có thể ăn mừng điều gì ngay hôm nay?'],
    ['XX','Thức Tỉnh','ti ti-bell-ringing','Đã đến lúc nhìn lại mà không tự kết tội. Bài học cũ đang gọi bạn bước sang một phiên bản thành thật hơn.','Bạn đã sẵn sàng trả lời lời gọi nào?'],
    ['XXI','Thế Giới','ti ti-world','Một vòng tròn đang hoàn tất. Hãy ghi nhận quãng đường đã đi trước khi mở cánh cửa tiếp theo.','Bạn cần công nhận thành tựu nào của chính mình?']
  ];
  const englishNames = ['THE FOOL','THE MAGICIAN','THE HIGH PRIESTESS','THE EMPRESS','THE EMPEROR','THE HIEROPHANT','THE LOVERS','THE CHARIOT','STRENGTH','THE HERMIT','WHEEL OF FORTUNE','JUSTICE','THE HANGED MAN','DEATH','TEMPERANCE','THE DEVIL','THE TOWER','THE STAR','THE MOON','THE SUN','JUDGEMENT','THE WORLD'];
  const rankThemes = {
    1: ['Mầm khởi đầu đang xuất hiện; hãy đón nhận tiềm năng trước khi đòi hỏi một kết quả hoàn chỉnh.','Bạn muốn gieo hạt giống nào?'],
    2: ['Hai hướng đang cần được cân bằng. Đừng chọn chỉ để thoát khỏi cảm giác lưỡng lự.','Điều gì giúp hai phía cùng được lắng nghe?'],
    3: ['Năng lượng phát triển đến từ kết nối, trao đổi và cùng nhau tạo nên điều lớn hơn.','Ai hoặc điều gì có thể đồng hành với bạn?'],
    4: ['Sự ổn định đang cần thiết, nhưng hãy để ý khi an toàn biến thành trì trệ hoặc khép kín.','Bạn đang bảo vệ điều gì quá chặt?'],
    5: ['Một thử thách đang phơi bày điểm yếu cần được nhìn thẳng. Đây là ma sát để trưởng thành, không phải dấu chấm hết.','Bài học nào nằm bên trong khó khăn này?'],
    6: ['Dòng chảy bắt đầu hài hòa hơn. Hãy nhận sự hỗ trợ và cũng nhớ trao lại điều mình có thể.','Bạn cần nhận hay cần cho nhiều hơn?'],
    7: ['Bạn đang được thử thách về niềm tin và sự kiên định. Hãy kiểm tra thực tế trước khi tiếp tục đầu tư năng lượng.','Điều gì thật sự xứng đáng để bạn kiên trì?'],
    8: ['Mọi thứ đang chuyển động nhanh. Sự tập trung và hành động đúng lúc sẽ quan trọng hơn suy nghĩ thêm.','Bước nào có thể thực hiện ngay hôm nay?'],
    9: ['Bạn đã đi gần hết một chặng đường. Giữ ranh giới và sức bền, nhưng đừng tự cô lập mình.','Bạn cần bảo vệ năng lượng theo cách nào?'],
    10: ['Một chu kỳ đã đầy và mang theo cả thành quả lẫn sức nặng. Đã đến lúc hoàn tất hoặc chia bớt gánh.','Bạn có thể buông bớt trách nhiệm nào?']
  };
  const suitInfo = {
    gay: { vi:'Gậy', en:'WANDS', icon:'ti ti-flame', focus:'hành động, động lực và tham vọng', files:(n)=>`gay ${n}.png` },
    ly: { vi:'Ly', en:'CUPS', icon:'ti ti-cup', focus:'cảm xúc, tình yêu và các mối quan hệ', files:(n)=>`ly (${n}).png` },
    kiem: { vi:'Kiếm', en:'SWORDS', icon:'ti ti-sword', focus:'suy nghĩ, giao tiếp và những xung đột', files:(n)=>`kiem (${n}).png` },
    xu: { vi:'Xu', en:'PENTACLES', icon:'ti ti-coin', focus:'tiền bạc, công việc và nền tảng thực tế', files:(n)=>`xu (${n}).png` }
  };
  const courtInfo = {
    Pages: ['Tiểu Đồng','PAGE','Một thông tin hoặc cách học mới đang mở ra. Hãy giữ tâm thế tò mò thay vì vội chứng minh mình đã biết.','Bạn đang được mời học điều gì?'],
    Knights: ['Kỵ Sĩ','KNIGHT','Năng lượng muốn tiến về phía trước. Hãy hành động có chủ đích để nhiệt huyết không biến thành hấp tấp.','Bạn đang theo đuổi điều gì và vì sao?'],
    Queens: ['Nữ Hoàng','QUEEN','Sự trưởng thành nằm ở khả năng làm chủ thế giới bên trong và nuôi dưỡng điều có ý nghĩa.','Bạn có thể tin vào phẩm chất nào của mình?'],
    Kings: ['Quốc Vương','KING','Đây là lời gọi bước vào vai trò chủ động, có trách nhiệm và nhìn xa hơn cảm xúc nhất thời.','Bạn cần lãnh đạo phần nào trong cuộc sống?']
  };
  function buildDeck() {
    const major = cards.map((card,index) => ({ number:card[0], name:card[1], english:englishNames[index], icon:card[2], meaning:card[3], reflection:card[4], image:`${index}.png` }));
    const minor = [];
    Object.entries(suitInfo).forEach(([key,suit]) => {
      for (let rank=1; rank<=10; rank++) {
        if (key === 'gay' && rank === 2) continue;
        minor.push({ number:String(rank), name:`${rank} ${suit.vi}`, english:`${rank} OF ${suit.en}`, icon:suit.icon, meaning:`Trong lĩnh vực ${suit.focus}, ${rankThemes[rank][0].toLowerCase()}`, reflection:rankThemes[rank][1], image:suit.files(rank) });
      }
      Object.entries(courtInfo).forEach(([file,[vi,en,meaning,reflection]]) => minor.push({ number:en, name:`${vi} ${suit.vi}`, english:`${en} OF ${suit.en}`, icon:suit.icon, meaning:`Liên quan đến ${suit.focus}: ${meaning}`, reflection, image:`${file} ${key}.png` }));
    });
    return major.concat(minor);
  }
  const fullDeck = buildDeck();
  const screens = ['startScreen','setupScreen','drawScreen','resultScreen'];
  const state = { mode: 'daily', context: 'Thông điệp hôm nay', selected: [], shuffled: false, targetCount: 1, positions: [] };
  const $ = (id) => document.getElementById(id);
  const secureRandom = (max) => {
    if (window.crypto && crypto.getRandomValues) { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % max; }
    return Math.floor(Math.random() * max);
  };
  function show(id) { screens.forEach((s) => $(s).classList.toggle('is-active', s === id)); window.scrollTo({top:0,behavior:'smooth'}); }
  function beginDraw(context) {
    state.context = context; state.shuffled = false; state.selected = [];
    state.targetCount = state.mode === 'daily' ? 1 : 3;
    state.positions = state.mode === 'daily'
      ? ['Năng lượng hôm nay']
      : state.mode === 'topic'
        ? ['Hiện trạng','Điều đang ẩn','Hướng đi']
        : ['Cốt lõi câu hỏi','Điều cần biết','Lời khuyên'];
    $('drawContext').textContent = context; $('resultContext').textContent = context;
    $('fan').innerHTML = ''; $('deck').hidden = false; $('deck').classList.remove('is-shuffling'); $('shuffleButton').hidden = false; $('shuffleButton').disabled = false;
    $('drawTitle').textContent = 'Hít một hơi thật chậm'; $('drawHint').textContent = 'Chạm để xào bài, rồi chọn lá khiến bạn chú ý nhất.';
    show('drawScreen');
  }
  document.querySelectorAll('[data-mode]').forEach((button) => button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    if (state.mode === 'daily') return beginDraw('Thông điệp hôm nay');
    const isTopic = state.mode === 'topic';
    $('setupEyebrow').textContent = isTopic ? 'Chọn chủ đề' : 'Đặt câu hỏi';
    $('setupTitle').textContent = isTopic ? 'Điều gì đang gọi bạn?' : 'Bạn muốn nhìn rõ điều gì?';
    $('topicPicker').hidden = !isTopic; $('questionForm').hidden = isTopic; show('setupScreen');
    if (!isTopic) setTimeout(() => $('questionInput').focus(), 350);
  }));
  $('setupBack').addEventListener('click', () => show('startScreen'));
  document.querySelectorAll('[data-topic]').forEach((button) => button.addEventListener('click', () => beginDraw(button.dataset.topic)));
  $('questionInput').addEventListener('input', (event) => $('charCount').textContent = `${event.target.value.length}/160`);
  $('questionForm').addEventListener('submit', (event) => { event.preventDefault(); const value = $('questionInput').value.trim(); if (!value) { $('questionInput').focus(); return; } beginDraw(value); });
  function shuffle() {
    if (state.shuffled) return;
    state.shuffled = true; $('deck').classList.add('is-shuffling'); $('shuffleButton').disabled = true;
    setTimeout(() => {
      $('deck').hidden = true; $('shuffleButton').hidden = true; $('drawTitle').textContent = state.targetCount === 1 ? 'Chọn một lá' : 'Chọn lá thứ nhất'; $('drawHint').textContent = state.targetCount === 1 ? 'Đừng phân tích. Hãy chạm vào lá đầu tiên kéo sự chú ý của bạn.' : `Bạn sẽ rút ${state.targetCount} lá. Hãy chọn từng lá theo trực giác.`;
      const fan = $('fan');
      const choiceCount = 15;
      for (let i = 0; i < choiceCount; i++) {
        const button = document.createElement('button'); button.className = 'fan-card'; button.setAttribute('aria-label', `Chọn lá bài số ${i + 1}`);
        const center = (choiceCount - 1) / 2;
        const distance = i - center;
        const angle = distance * 5.6;
        const x = distance * 16.5;
        const y = Math.abs(distance) * 2.1;
        button.style.cssText = `z-index:${i};animation-delay:${i * 30}ms;--fan-x:${x}px;--fan-y:${y}px;--fan-angle:${angle}deg`;
        button.innerHTML = '<span class="card-back"></span>';
        button.addEventListener('click', () => chooseCard(button)); fan.appendChild(button);
      }
    }, 1080);
  }
  $('deck').addEventListener('click', shuffle); $('deck').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shuffle(); }}); $('shuffleButton').addEventListener('click', shuffle);
  function chooseCard(button) {
    button.disabled = true; button.classList.add('is-chosen');
    createSelectionBurst();
    let drawn;
    do { drawn = fullDeck[secureRandom(fullDeck.length)]; } while (state.selected.some((item) => item.card.image === drawn.image));
    state.selected.push({ card:drawn, reversed:secureRandom(100) < 28 });
    const complete = state.selected.length === state.targetCount;
    setTimeout(() => {
      if (complete) {
        document.querySelectorAll('.fan-card').forEach((card) => { if (card !== button) card.classList.add('is-dismissed'); });
        setTimeout(() => { prepareResult(); show('resultScreen'); }, 360);
      } else {
        button.classList.remove('is-chosen'); button.classList.add('is-dismissed');
        $('drawTitle').textContent = `Chọn lá thứ ${state.selected.length + 1}`;
        $('drawHint').textContent = `${state.selected.length}/${state.targetCount} lá đã chọn`;
      }
    }, 420);
  }
  function createSelectionBurst() {
    const burst = document.createElement('span'); burst.className = 'selection-burst';
    for (let i=0; i<10; i++) {
      const spark = document.createElement('i');
      spark.style.setProperty('--angle', `${i * 36}deg`);
      spark.style.animationDelay = `${i * 12}ms`;
      burst.appendChild(spark);
    }
    $('ritual').appendChild(burst);
    setTimeout(() => burst.remove(), 900);
  }
  function prepareResult() {
    $('reading').classList.remove('is-visible'); $('flipNote').hidden = false;
    $('resultTitle').textContent = state.targetCount === 1 ? 'Lá bài tìm đến bạn' : 'Trải bài của bạn';
    const resultCards = $('resultCards'); resultCards.innerHTML = ''; resultCards.classList.toggle('is-multi', state.targetCount > 1);
    state.selected.forEach((selection,index) => {
      const {card,reversed} = selection;
      const wrap = document.createElement('div'); wrap.className = 'result-card-wrap';
      wrap.innerHTML = `<button class="tarot-card" aria-label="Lật ${state.positions[index]}">
        <span class="card-inner">
          <span class="card-face card-back result-back"><small>Chạm để lật</small></span>
          <span class="card-face card-front${reversed ? ' is-reversed' : ''}">
            <img src="../../assets/tarot/${encodeURIComponent(card.image)}" alt="Lá bài ${card.name}" decoding="async">
            <span class="card-inscription card-inscription-top">${card.number}</span>
            <span class="card-inscription card-inscription-bottom${card.english.length > 18 ? ' is-very-long' : card.english.length > 13 ? ' is-long' : ''}">${card.english}</span>
          </span>
        </span>
      </button>
      <div class="result-card-meta"><em>${state.positions[index]}</em><strong>${card.name}</strong><small>${reversed ? 'Lá ngược' : 'Lá xuôi'}</small></div>`;
      const button = wrap.querySelector('.tarot-card');
      button.addEventListener('click', () => revealCard(button,wrap));
      resultCards.appendChild(wrap);
    });
    buildReading();
  }
  function revealCard(button,wrap) {
    if (button.classList.contains('is-flipped')) return;
    button.classList.add('is-flipped');
    setTimeout(() => {
      button.classList.add('is-settled'); wrap.classList.add('is-revealed');
      const allRevealed = [...document.querySelectorAll('.result-card-wrap')].every((item) => item.classList.contains('is-revealed'));
      if (allRevealed) { $('flipNote').hidden = true; $('reading').classList.add('is-visible'); }
    }, 740);
  }
  function buildReading() {
    $('cardReadings').innerHTML = state.selected.map((selection,index) => {
      const prefix = selection.reversed ? 'Năng lượng này đang bị chặn, chậm lại hoặc hướng vào bên trong. ' : '';
      return `<section class="card-reading"><small>${state.positions[index]}</small><strong>${selection.card.name} · ${selection.reversed ? 'Ngược' : 'Xuôi'}</strong><p>${prefix}${selection.card.meaning}</p></section>`;
    }).join('');
    const names = state.selected.map((item) => item.card.name).join(', ');
    $('readingText').textContent = state.targetCount === 1
      ? `Trọng tâm của hôm nay nằm ở ${state.selected[0].card.name}. Đừng xem đây là một kết luận cố định; hãy dùng nó để nhận ra điều bạn đang bỏ sót.`
      : `Nhìn tổng thể, ${names} tạo thành một tiến trình: nhận diện điều đang diễn ra, nhìn phần chưa được nói ra, rồi chọn một hướng hành động có ý thức. Câu trả lời không nằm ở riêng từng lá mà ở cách ba thông điệp nối tiếp nhau.`;
    $('reflectionText').textContent = state.selected[state.selected.length - 1].card.reflection;
  }
  function reset() { state.shuffled = false; state.selected = null; $('deck').classList.remove('is-shuffling'); $('shuffleButton').disabled = false; show('startScreen'); }
  $('newReading').addEventListener('click', reset); $('resetButton').addEventListener('click', reset);
})();
