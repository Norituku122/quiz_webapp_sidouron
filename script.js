
const questions = [
  "1958年以降、学習指導要領は告示されるようになり、（__）を持つようになった",
  "（__）の実現に向けた授業改善を通して、...",
  "...創意工夫を生かした特色のある教育活動を展開する中で生徒に（__）を育む事を目指すものとする",
  "(__)を確実に習得させ、これらを活用して課題を解決するために必要な...",
  "...(__)を育むとともに、主体的に学習に取り組む態度を養い、個性を生かし多様な人々との協働を促す教育の充実に努めること。...",
  "...思考力、判断力、表現力等を育むとともに、(__)を養い、個性を生かし多様な人々との協働を促す教育の充実に努めること。...",
  "...その際、生徒の発達の段階を考慮して、生徒の(__)など、学習の基盤をつくる活動を充実するとともに、...",
  "...(__)を図りながら、生徒の学習習慣が確立するよう配慮すること。",
  "...教育活動の充実を図るものとする。その際、生徒の(__)を踏まえつつ、...",
  "...1(__)が習得されるようにすること。",
  "...2(__)を育成すること。",
  "...3(__)を活養すること。",
  "...教育の目的や目標の実現に必要な教育の内容等を(__)な視点で組み立てていくことが求められている",
  "...組織的かつ計画的に教育活動の質の向上を図っていくることを(__)という。",
  "...(__)、情報活用能力(情報モラルを含む。)、問題発見・解決能力等の学習の基盤となる...",
  "...言語能力、(__)(情報モラルを含む。)、問題発見・解決能力等の学習の基盤となる...",
  "...言語能力、情報活用能力(情報モラルを含む。)、(__)等の学習の基盤となる...",
  "教育課程の編成に当たっては、学校段階間の(__)を図ものとする。",
  "各教科等の特質に応じた物事を捉える視点や考え方を(__)という。",
  "各教科等の指導に当たっては、(__)や題材など内容や時間のまとまりの見通しに配慮する必要がある。",
  "生徒が各教科等の特質に応じた「見方・考え方」を働かせながら、(__)を相互に関連付けてより深く理解したり、...",
  "生徒が各教科等の特質に応じた「見方・考え方」を働かせながら、知識を(__)に関連付けてより深く理解したり、...",
  "...思いや考えを基に創造したりすることに向かう(__)の充実を図ること。",
  "(__)の育成を図るため、必要な言語環境を整えるとともに、国語科を要としつつ各教科等の特質に応じて、生徒の言語活動を充実すること。",
  "言語能力の育成を図るため、必要な言語環境を整えるとともに、国語科を(__)としつつ各教科等の特質に応じて、生徒の言語活動を充実すること。",
  "(__)の育成を図るため、コンピュータや情報通信ネットワークなどの情報手段を活用するために必要な環境を整え、これらを適切に活用した学習活動の充実を図ること。",
  "情報活用能力の育成を図るため、コンピュータや情報通信ネットワークなどの(__)を活用するために必要な環境を整え、これらを適切に活用した学習活動の充実を図ること。",
  "生徒の(__)や進歩の状況などを積極的に評価し、学習したことの意義や価値を実感できるようにすること。",
  "生徒のよい点や(__)の状況などを積極的に評価し、学習したことの意義や価値を実感できるようにすること。",
  "生徒のよい点や進歩の状況などを積極的に評価し、学習したことの(__)を実感できるようにすること。",
  "...学習の過程や成果を評価し、指導の改善や(__)の向上を図り、資質・能力の育成に生かすようにすること。",
  "学習評価の観点は、(__)と思考・判断・表現と主体的に学習に取り組む態度の3観点に整理されている。",
  "学習評価の観点は、知識・技能と(__)と主体的に学習に取り組む態度の3観点に整理されている。",
  "学習評価の観点は、知識・技能と思考・判断・表現と(__)の3観点に整理されている。",
  "主体的に学習に取り組む態度資質・能力を育成するための学習評価を行っていくためには、(__)を図り、多面的・多角的な評価がめられる。"
];
const answers = [
  "法的拘束力", "主体的・対話的で深い学び", "生きる力", "基礎的・基本的な知識及び技能", "思考力、判断力、表現力等",
  "主体的に学習に取り組む態度", "言語活動", "家庭との連携", "発達の段階や特性等", "知識及び技能",
  "思考力、判断力、表現力等", "学びに向かう力、人間性等", "教科等横断的", "カリキュラム・マネジメント", "言語能力",
  "情報活用能力", "問題発見・解決能力", "接続", "「見方・考え方」", "単元", "知識", "相互",
  "過程を重視した学習", "言語能力", "要", "情報活用能力", "情報手段", "よい点", "進歩", "意義や価値",
  "学習意欲", "知識・技能", "思考・判断・表現", "主体的に学習に取り組む態度", "指導と評価の一体化"
];

let range = [], current = 0, correct = 0, mistakes = [];

function startQuiz() {
  const start = parseInt(document.getElementById('start').value, 10) - 1;
  const end = parseInt(document.getElementById('end').value, 10) - 1;
  const mode = document.getElementById('mode').value;

  range = [];
  for (let i = start; i <= end; i++) range.push(i);
  if (mode === 'random') range = shuffle(range);

  current = 0;
  correct = 0;
  mistakes = [];

  document.getElementById('settings').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  if (current < range.length) {
    document.getElementById('question').textContent = questions[range[current]];
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
  } else {
    showResults();
  }
}

function submitAnswer() {
  const input = document.getElementById('answer').value.trim();
  const correctAns = answers[range[current]];
  const feedback = document.getElementById('feedback');

  if (input === correctAns) {
    feedback.textContent = '正解！';
    correct++;
  } else {
    feedback.textContent = `不正解：正答は「${correctAns}」です。`;
    mistakes.push(range[current]);
  }

  current++;
  setTimeout(showQuestion, 1000);
}

function endQuiz() {
  showResults();
}

function showResults() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('summary').textContent = `全${range.length}問中、${range.length - mistakes.length}問正解、${mistakes.length}問間違えました。`;

  const mArea = document.getElementById('mistakes');
  if (mistakes.length === 0) {
    mArea.innerHTML = '<p>全問正解！おめでとうございます！</p>';
  } else {
    const ul = document.createElement('ul');
    mistakes.forEach(idx => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Q:</strong> ${questions[idx]}<br><strong>A:</strong> ${answers[idx]}`;
      ul.appendChild(li);
    });
    mArea.innerHTML = '';
    mArea.appendChild(ul);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
