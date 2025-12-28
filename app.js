/* =========================
 * 상수/라벨
 * ========================= */
const DIM_LABELS = {
  quant: "정량 처리",
  theory: "이론 구조",
  memory: "암기 범위",
  data: "자료 해석",
  judgment: "판단 개방성",
  time: "시간 압박"
};
const DIM_KEYS = Object.keys(DIM_LABELS);

/* =========================
 * 24문항(상황형)
 * ========================= */
const QUESTIONS = [
  // A 정량
  { id:"A1", dim:"quant", prompt:" (학습) 탐구 문제에 고려해야 할 조건이 많다. 이때 나는?", choices:[
    "숫자로 된 조건은 부담돼서 말로 풀어쓴 설명이 더 좋다",
    "숫자는 참고만 하고 전체 흐름 위주로 본다",
    "핵심 숫자 몇 개를 정리해 보며 이해한다",
    "조건을 수치로 정리해야 명확해진다"
  ]},
  { id:"A2", dim:"quant", prompt:"(학습) 문제 풀이 과정에 비율관계·증감·수치 비교가 나오면?", choices:[
    "어떻게 해야 할지 잘 모르겠고 이해가 느려진다",
    "말로 다시 풀어주면 이해가 된다",
    "수치가 있어서 오히려 이해가 잘 된다",
    "수치적 관계가 핵심이라고 느낀다"
  ]},
  { id:"A3", dim:"quant", prompt:"(일상) 상품 구매 시 가격을 비교할 때 나는?", choices:[
    "큰 고민 없이 그냥 감으로 고른다",
    "대략 유리해 보이는 걸 고른다",
    "몇 가지 기준을 가지고 비교한다",
    "가능한 한 정량적으로 비교한다"
  ]},
  { id:"A4", dim:"quant", prompt:"(학습) 풀이 과정에 개념보다 계산이 포함된 문제를 보면?", choices:[
    "계산 때문에 손이 안 간다",
    "계산이 많으면 피하고 싶다",
    "계산이 있어도 원리가 보이면 괜찮다",
    "계산이 있어야 오히려 확신이 든다"
  ]},

  // B 이론
  { id:"B1", dim:"theory", prompt:"(학습) 새로운 개념을 배울 때 나는?", choices:[
    "결과만 알면 된다",
    "예시를 통해 익히면 충분하다",
    "왜 그렇게 되는지 궁금해진다",
    "원리→적용 구조가 보여야 이해된다"
  ]},
  { id:"B2", dim:"theory", prompt:"(학습) 많은 개념이 한 단원에 한꺼번에 등장할 때 나는?", choices:[
    "각각 따로 외운다",
    "비슷한 것만 묶어서 본다",
    "개념 간 연결을 의식하며 정리한다",
    "전체 구조를 먼저 잡고 들어간다"
  ]},
  { id:"B3", dim:"theory", prompt:"(일상) 친구가 신기한 지식을 설명해줄 때 나는?", choices:[
    "과정보다 결과만 들으면 된다",
    "너무 자세한 설명은 지루하다",
    "이유가 있으면 더 이해하기 쉽다",
    "논리적 흐름이 없으면 납득이 안된다"
  ]},
  { id:"B4", dim:"theory", prompt:"(학습) 별로 어렵지도 않은 탐구 문제를 틀렸을 때 나는?", choices:[
    "정답만 확인하고 납득하고 넘어간다",
    "풀이를 한번 자세히 읽어본다",
    "왜 틀렸는지 원인을 찾는다",
    "개념이 부실한 부분이 있는지 점검한다"
  ]},

  // C 암기
  { id:"C1", dim:"memory", prompt:"(학습) 외워야 할 내용이 많을 때 나는?", choices:[
    "양이 많으면 포기하고 싶다",
    "중요한 것만 추려 외운다",
    "정리하면 감당할 수 있다",
    "많아도 반복 정리로 충분히 소화한다"
  ]},
  { id:"C2", dim:"memory", prompt:"(학습) 시험 범위가 넓게 주어지면 나는?", choices:[
    "어디부터 해야 할지 막막하다",
    "선택과 집중! 몇몇 과목만 공부한다",
    "범위를 세분화한 다음 계획적으로 공부한다",
    "날짜별로 공부 내용을 정리해 조직적으로 관리한다"
  ]},
  { id:"C3", dim:"memory", prompt:"(일상) 선생님의 수행평가 안내 멘트가 길 때 나는?", choices:[
    "잘 기억하지 못한다",
    "필요한 부분만 기억한다",
    "메모하거나 정리해서 기억한다",
    "정리하면 웬만한 건 기억한다"
  ]},
  { id:"C4", dim:"memory", prompt:"(학습) 한 번 배운 내용을 나는?", choices:[
    "자주 복습하지 않아 금방 잊는 편이다",
    "자주 보면 그래도 대부분 기억난다",
    "정리하면서 복습하면 오래 기억한다",
    "꼼꼼히 정리한 건 잘 잊지 않는다"
  ]},

  // D 자료
  { id:"D1", dim:"data", prompt:"(학습) 표나 그래프가 포함된 문제가 나오면 나는?", choices:[
    "표나 그래프를 설명한 발문부터 본다",
    "그래프는 참고하여 발문으로 문제를 이해한다.",
    "그래프를 위주로 문제의 흐름을 파악한다",
    "그래프가 핵심이라고 느껴 가장 집중한다"
  ]},
  { id:"D2", dim:"data", prompt:"(학습) 자료 여러 개가 함께 제시되면 나는?", choices:[
    "정보가 많아 어디서부터 해석해야 할지 혼란스럽다",
    "하나씩 차례대로 골라서 본다",
    "각 자료들을 연결해서 이해하려 노력한다",
    "종합해서 결론 내리는 게 익숙하다"
  ]},
  { id:"D3", dim:"data", prompt:"(일상) 설명서나 안내 책자를 볼 때 나는?", choices:[
    "글로 된 설명이 더 편하다",
    "그림은 그냥 참고만 한다",
    "표로 정리된 자료가 있으면 이해하기 편하다",
    "자료가 있어야 설명이 정확히 이해된다"
  ]},
  { id:"D4", dim:"data", prompt:"(학습) 자료 해석 문제를 풀 때 나는?", choices:[
    "직관을 이용해서 찍는 경우가 있다",
    "핵심만 빠르게 본다",
    "자료를 차분히 읽는다",
    "단위·축·조건부터 꼼꼼히 본다"
  ]},

  // E 판단
  { id:"E1", dim:"judgment", prompt:"(학습) 정답이 하나로 딱 정해지지 않은 문제를 보면?", choices:[
    "불편하고 어렵다",
    "애매해서 가능하면 풀기 싫다",
    "이런 문제가 더 흥미롭다",
    "최대한 조건을 따져 판단한다"
    
  ]},
  { id:"E2", dim:"judgment", prompt:"(학습) 서로 다른 주장/해석이 가능한 상황에서 나는?", choices:[
    "하나만 맞다고 생각한다",
    "정답 기준이 있었으면 좋겠다",
    "상황에 따라 다를 수 있다고 본다",
    "여러 관점을 비교하는 게 재미있다"
  ]},
  { id:"E3", dim:"judgment", prompt:"(일상) 밸런스게임(ex. 엉덩이 1개 vs 2개?)에 대해 나는?", choices:[
    "빨리 결론이 나야 편하다",
    "다수 의견을 따른다",
    "이유를 듣고 판단한다",
    "기준을 세워 스스로 판단한다"
  ]},
  { id:"E4", dim:"judgment", prompt:"(학습) 평가 기준이 '가장 적절한 것'일 때 나는?", choices:[
    "기준이 애매해 불안하다",
    "요령이 필요하다고 느낀다",
    "논리를 세워 접근한다",
    "사고력을 보여줄 수 있어 좋다"
  ]},

  // F 시간
  { id:"F1", dim:"time", prompt:"(학습) 시간 제한이 있는 풀이에서 나는?", choices:[
    "아는 것도 자주 틀린다",
    "실수가 늘어난다",
    "집중해서 비교적 잘 푼다",
    "오히려 몰입이 잘 된다"
  ]},
  { id:"F2", dim:"time", prompt:"(학습) 문제가 안 풀릴 때 나는?", choices:[
    "한 문제에 오래 매달린다",
    "넘어가기가 어렵다",
    "일단 넘어갔다가 돌아온다",
    "빠르게 전략을 바꾼다"
  ]},
  { id:"F3", dim:"time", prompt:"(일상) 마감 시간이 있는 일을 할 때 나는?", choices:[
    "항상 촉박하다",
    "여유가 거의 없다",
    "계획을 세워 맞춘다",
    "시간 배분을 잘하는 편이다"
  ]},
  { id:"F4", dim:"time", prompt:"(학습) 시험 중 시간 관리에 대해 나는?", choices:[
    "항상 부족하다",
    "끝까지 풀기 힘들다",
    "대체로 맞춘다",
    "시간 전략이 분명하다"
  ]},
];

/* =========================
 * 과목 요구 벡터(1~5) -> 1~4 변환
 * ========================= */
const SUBJECTS_1to5 = [
  { name:"물리학Ⅰ", v:{ quant:4, theory:4, memory:2, data:2, judgment:1, time:4 } },
  { name:"물리학Ⅱ", v:{ quant:5, theory:5, memory:2, data:2, judgment:1, time:5 } },
  { name:"화학Ⅰ",   v:{ quant:4, theory:4, memory:3, data:2, judgment:1, time:4 } },
  { name:"화학Ⅱ",   v:{ quant:5, theory:5, memory:3, data:2, judgment:1, time:5 } },
  { name:"생명과학Ⅰ", v:{ quant:2, theory:3, memory:5, data:3, judgment:2, time:2 } },
  { name:"생명과학Ⅱ", v:{ quant:3, theory:4, memory:5, data:3, judgment:2, time:3 } },
  { name:"지구과학Ⅰ", v:{ quant:3, theory:3, memory:3, data:5, judgment:2, time:2 } },
  { name:"지구과학Ⅱ", v:{ quant:4, theory:4, memory:3, data:5, judgment:2, time:3 } },
  { name:"한국지리", v:{ quant:2, theory:3, memory:4, data:5, judgment:2, time:2 } },
  { name:"세계지리", v:{ quant:2, theory:3, memory:4, data:5, judgment:2, time:2 } },
  { name:"동아시아사", v:{ quant:1, theory:3, memory:5, data:2, judgment:2, time:1 } },
  { name:"세계사",   v:{ quant:1, theory:3, memory:5, data:2, judgment:2, time:1 } },
  { name:"경제",     v:{ quant:4, theory:4, memory:2, data:4, judgment:3, time:4 } },
  { name:"정치와 법", v:{ quant:2, theory:4, memory:3, data:2, judgment:4, time:2 } },
  { name:"사회문화", v:{ quant:2, theory:3, memory:4, data:4, judgment:3, time:2 } },
  { name:"생활과 윤리", v:{ quant:1, theory:4, memory:3, data:1, judgment:5, time:1 } },
  { name:"윤리와 사상", v:{ quant:1, theory:5, memory:4, data:1, judgment:5, time:1 } },
];

function rescale5to4(x5){ return 1 + (x5 - 1) * 3 / 4; }
const SUBJECTS = SUBJECTS_1to5.map(s => ({
  name: s.name,
  v: Object.fromEntries(DIM_KEYS.map(k => [k, rescale5to4(s.v[k])]))
}));

/* =========================
 * 유사도/리포트
 * ========================= */
function simBand(sim){
  if (sim >= 0.92) return "A";
  if (sim >= 0.85) return "B";
  if (sim >= 0.75) return "C";
  return "D";
}
function bandHeadline(b){ return ({A:"강력 추천", B:"추천", C:"조건부 추천", D:"주의 필요"})[b]; }

function topDimsBy(studentV, n=2, dir="high"){
  const arr = DIM_KEYS.map(k => ({k, val: studentV[k]}));
  arr.sort((a,b)=> dir==="high" ? b.val-a.val : a.val-b.val);
  return arr.slice(0,n).map(x => DIM_LABELS[x.k]);
}
function computeWarnings(studentV, subjectV){
  const warnings = [];
  for (const k of DIM_KEYS){
    if (subjectV[k] >= 3.25 && studentV[k] <= 2.25){
      warnings.push(`${DIM_LABELS[k]} 부담`);
    }
  }
  return warnings.slice(0,3);
}
function buildReportText({band, sim, studentV, warnings}){
  const strong = topDimsBy(studentV, 2, "high").join(" · ");
  const weak = topDimsBy(studentV, 1, "low")[0];
  const base = `당신의 프로필은 <b>${strong}</b> 쪽 성향이 상대적으로 두드러집니다.`;

  if (band === "A") return `
    <b>이 과목은 당신의 학습 요구 패턴과 매우 잘 맞습니다.</b> (적합도 ${sim.toFixed(3)})<br/>
    ${base}<br/>
    개념을 이해→적용하는 과정에서 스트레스가 비교적 적고, 성취감을 얻기 쉬운 편입니다.<br/>
    ${warnings.length ? `다만 <b>${warnings.join(", ")}</b> 포인트는 초반에 전략적으로 대비하면 좋아요.` : `특별히 큰 부담 요인은 두드러지지 않습니다.`}
  `;

  if (band === "B") return `
    <b>전반적으로 잘 맞는 과목입니다.</b> (적합도 ${sim.toFixed(3)})<br/>
    ${base}<br/>
    대부분의 단원/문항 유형에서 무난하게 맞을 가능성이 큽니다.<br/>
    ${warnings.length ? `다만 <b>${warnings.join(", ")}</b> 쪽에서 부담이 생길 수 있어 ‘보완 전략’을 곁들이면 좋습니다.` : `부담 요인이 크지 않다면 안정적으로 선택할 수 있어요.`}
  `;

  if (band === "C") return `
    <b>일부는 잘 맞지만 준비가 필요한 과목입니다.</b> (적합도 ${sim.toFixed(3)})<br/>
    ${base}<br/>
    특히 <b>${weak}</b> 쪽 요구가 높은 단원에서 체감 난도가 올라갈 수 있습니다.<br/>
    ${warnings.length ? `주의 포인트: <b>${warnings.join(", ")}</b>. 선택한다면 기출/오답으로 ‘취약 지점’을 먼저 확인해두세요.` : `선택한다면 초반에 학습 루틴을 빨리 안정화하는 게 중요합니다.`}
  `;

  return `
    <b>학습 요구 패턴 차이가 커서 신중한 선택이 필요합니다.</b> (적합도 ${sim.toFixed(3)})<br/>
    ${base}<br/>
    ${warnings.length ? `특히 <b>${warnings.join(", ")}</b>에서 부담이 커질 수 있습니다.` : `과목이 요구하는 방식이 현재 프로필과 거리가 있습니다.`}<br/>
    비슷한 계열 중 TOP2~TOP3 과목을 함께 비교해보는 것을 권합니다.
  `;
}

/* =========================
 * 코사인 유사도
 * ========================= */
function dot(a,b){ return DIM_KEYS.reduce((s,k)=> s + a[k]*b[k], 0); }
function norm(a){ return Math.sqrt(DIM_KEYS.reduce((s,k)=> s + a[k]*a[k], 0)); }
function cosineSimilarity(a,b){
  const na = norm(a), nb = norm(b);
  if (na === 0 || nb === 0) return 0;
  return dot(a,b) / (na*nb);
}
function computeStudentVector(answers){
  const byDim = Object.fromEntries(DIM_KEYS.map(k => [k, []]));
  for (const q of QUESTIONS) byDim[q.dim].push(answers[q.id]);

  const v = {};
  for (const k of DIM_KEYS){
    const xs = byDim[k];
    v[k] = xs.reduce((s,x)=>s+x,0) / xs.length; // 1~4
  }
  return v;
}
function rankSubjects(studentV){
  return SUBJECTS.map(s => {
    const sim = cosineSimilarity(studentV, s.v);
    const band = simBand(sim);
    const warnings = computeWarnings(studentV, s.v);
    return { name:s.name, sim, band, warnings, subjectV:s.v };
  }).sort((a,b)=> b.sim - a.sim);
}

/* =========================
 * UI 상태
 * ========================= */
const elIntro  = document.getElementById("screen-intro");
const elTest   = document.getElementById("screen-test");
const elResult = document.getElementById("screen-result");

const elStep = document.getElementById("stepText");
const elProg = document.getElementById("progressBar");
const elHost = document.getElementById("questionHost");

const elPrev = document.getElementById("btn-prev");
const elNext = document.getElementById("btn-next");
const elReset = document.getElementById("btn-reset");
const elSubmit = document.getElementById("btn-submit");
const elAnswered = document.getElementById("answeredText");

const elTop3 = document.getElementById("top3");
const elDims = document.getElementById("dims");
const elGuide = document.getElementById("guide");
const elAgain = document.getElementById("btn-again");

let currentIndex = 0;
let answers = {}; // { qid: 1..4 }

document.getElementById("btn-start").addEventListener("click", () => {
  elIntro.classList.add("hide");
  elTest.classList.remove("hide");
  currentIndex = 0;
  answers = {};
  renderQuestion("enter");
  updateNav();
  updateProgress();
});

elReset.addEventListener("click", () => {
  answers = {};
  currentIndex = 0;
  renderQuestion("enter");
  updateNav();
  updateProgress();
});

elPrev.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  animateOut("left", () => {
    currentIndex--;
    renderQuestion("enter");
    updateNav();
    updateProgress();
  });
});

elNext.addEventListener("click", () => {
  if (currentIndex >= QUESTIONS.length - 1) return;
  animateOut("right", () => {
    currentIndex++;
    renderQuestion("enter");
    updateNav();
    updateProgress();
  });
});

elSubmit.addEventListener("click", () => {
  if (!isAllAnswered()) return;
  const studentV = computeStudentVector(answers);
  const ranked = rankSubjects(studentV);
  renderResult(studentV, ranked.slice(0,3));
  elTest.classList.add("hide");
  elResult.classList.remove("hide");
});

elAgain.addEventListener("click", () => {
  elResult.classList.add("hide");
  elIntro.classList.remove("hide");
});

function renderQuestion(mode="enter"){
  const q = QUESTIONS[currentIndex];
  const selected = answers[q.id];
  elStep.textContent = `${currentIndex + 1} / ${QUESTIONS.length}`;

  elHost.innerHTML = `
    <div id="qCard" class="${mode==="enter" ? "anim-enter" : ""}">
      <div class="q-meta">
        <div class="q-dim">${DIM_LABELS[q.dim]}</div>
        <div class="q-id">${q.id}</div>
      </div>
      <div class="q-prompt">${q.prompt}</div>

      <div class="choices" role="radiogroup" aria-label="choices">
        ${q.choices.map((c,i)=> {
          const val = i+1;
          return `
            <label class="choice ${selected===val ? "selected" : ""}">
              <input type="radio" name="${q.id}" value="${val}" ${selected===val ? "checked" : ""}/>
              <div><b>${val}</b> · ${c}</div>
            </label>
          `;
        }).join("")}
      </div>

      <div class="small" style="margin-top:10px;">선택하면 자동 저장됩니다.</div>
    </div>
  `;

elHost.querySelectorAll(`label.choice`).forEach(label => {
  const radio = label.querySelector('input[type="radio"]');

  label.addEventListener("click", () => {
    // 같은 질문의 모든 카드 선택 해제
    elHost.querySelectorAll(`label.choice`).forEach(l => l.classList.remove("selected"));

    // 현재 카드 선택
    radio.checked = true;
    label.classList.add("selected");

    answers[q.id] = parseInt(radio.value, 10);
    updateProgress();
    updateNav();
  });
});
}

function animateOut(direction, cb){
  const card = document.getElementById("qCard");
  if (!card){ cb(); return; }
  card.classList.add(direction === "left" ? "anim-exit-left" : "anim-exit-right");
  setTimeout(cb, 220);
}

function updateNav(){
  const qid = QUESTIONS[currentIndex].id;
  const answeredThis = answers[qid] !== undefined;

  elPrev.disabled = currentIndex === 0;
  elNext.disabled =
    currentIndex === QUESTIONS.length - 1 || !answeredThis;

  elSubmit.disabled = !isAllAnswered();
}

function updateProgress(){
  const done = Object.keys(answers).length;
  elAnswered.textContent = `${done} / ${QUESTIONS.length} 문항 응답`;
  elProg.style.width = `${Math.round((done/QUESTIONS.length)*100)}%`;
}

function isAllAnswered(){
  return QUESTIONS.every(q => answers[q.id] >= 1 && answers[q.id] <= 4);
}

function renderResult(studentV, top3){
  elDims.innerHTML = "";
  for (const k of DIM_KEYS){
    const div = document.createElement("div");
    div.className = "dimrow";
    div.innerHTML = `<span class="small">${DIM_LABELS[k]}</span><span>${studentV[k].toFixed(2)}</span>`;
    elDims.appendChild(div);
  }

  const highs = topDimsBy(studentV, 2, "high").join(", ");
  const lows  = topDimsBy(studentV, 2, "low").join(", ");
  elGuide.innerHTML = `강점 축: <b>${highs}</b><br/>보완하면 좋은 축: <b>${lows}</b><br/><span class="small">※ 적합도는 과목 요구 패턴과의 닮은 정도입니다.</span>`;

  elTop3.innerHTML = "";
  top3.forEach((r, idx) => {
    const pct = Math.max(0, Math.min(100, r.sim * 100));
    const pills = r.warnings.map(w => `<span class="pill warn">${w}</span>`).join(" ");
    const report = buildReportText({ band:r.band, sim:r.sim, studentV, warnings:r.warnings });

    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <h3>${idx+1}) ${r.name} · ${bandHeadline(r.band)}</h3>
      <div class="small">적합도(코사인): <b>${r.sim.toFixed(3)}</b></div>
      <div class="meter"><div style="width:${pct.toFixed(0)}%"></div></div>
      <div style="margin-top:8px;">${pills || `<span class="pill">주의 포인트 없음</span>`}</div>
      <div class="hr"></div>
      <div class="small">${report}</div>
    `;
    elTop3.appendChild(item);
  });
}