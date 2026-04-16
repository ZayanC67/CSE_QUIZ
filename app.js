let questions = {

  history: [

    {
      q: "The earliest urban civilization in India is:",
      options: ["Vedic Civilization","Indus Valley Civilization","Mauryan Civilization","Gupta Civilization"],
      answer: 1,
      explanation: "Indus Valley Civilization was the first urban civilization with planned cities like Harappa."
    },
    {
      q: "The author of Arthashastra is:",
      options: ["Kalidasa","Chanakya","Panini","Patanjali"],
      answer: 1,
      explanation: "Chanakya (Kautilya) wrote Arthashastra on politics and economics."
    },
    {
      q: "The oldest Veda is:",
      options: ["Yajurveda","Samaveda","Rigveda","Atharvaveda"],
      answer: 2,
      explanation: "Rigveda is the oldest Veda and contains early hymns."
    },
    {
      q: "The Upanishads primarily deal with:",
      options: ["Warfare","Rituals","Philosophy","Trade"],
      answer: 2,
      explanation: "Upanishads focus on philosophy, self, and ultimate reality (Brahman)."
    },
    {
      q: "Ashoka adopted Buddhism after:",
      options: ["Battle of Panipat","Battle of Kalinga","Battle of Plassey","Battle of Talikota"],
      answer: 1,
      explanation: "The Kalinga war led Ashoka to embrace Buddhism due to its violence."
    },
    {
      q: "Sanchi is famous for:",
      options: ["Temples","Forts","Stupa","Palaces"],
      answer: 2,
      explanation: "Sanchi is known for its famous Buddhist Stupa built by Ashoka."
    },
    {
      q: "Satyagraha means:",
      options: ["War strategy","Truth-force","Trade system","Governance"],
      answer: 1,
      explanation: "Satyagraha means insistence on truth, a concept by Mahatma Gandhi."
    },
    {
      q: "Nalanda University was known for:",
      options: ["Military training","Religious rituals","Higher learning","Trade"],
      answer: 2,
      explanation: "Nalanda was one of the world's first great residential universities."
    },
    {
      q: "The Iron Pillar of Delhi is known for:",
      options: ["Height","Rust resistance","Decoration","Size"],
      answer: 1,
      explanation: "It is famous for its corrosion resistance despite being centuries old."
    },
    {
      q: "Krishnadevaraya was ruler of:",
      options: ["Chola Empire","Vijayanagara Empire","Hoysala Kingdom","Kakatiya Kingdom"],
      answer: 1,
      explanation: "Krishnadevaraya was a famous ruler of the Vijayanagara Empire."
    }

  ],

  tech: [

    {
      q: "India’s space agency is:",
      options: ["NASA","ISRO","DRDO","HAL"],
      answer: 1,
      explanation: "ISRO is responsible for India's space missions."
    },
    {
      q: "ISRO stands for:",
      options: ["Indian Satellite Research Org","Indian Space Research Organisation","International Space Org","Indian Science Org"],
      answer: 1,
      explanation: "ISRO = Indian Space Research Organisation."
    },
    {
      q: "India’s first satellite was:",
      options: ["INSAT","Aryabhata","Rohini","Chandrayaan"],
      answer: 1,
      explanation: "Aryabhata was India's first satellite launched in 1975."
    },
    {
      q: "India’s first indigenous fighter aircraft is:",
      options: ["Tejas","BrahMos","Agni","Prithvi"],
      answer: 0,
      explanation: "Tejas is India's indigenously developed fighter jet."
    },
    {
      q: "Missile Man of India is:",
      options: ["Vikram Sarabhai","A.P.J. Abdul Kalam","Homi Bhabha","M.S. Swaminathan"],
      answer: 1,
      explanation: "Dr. APJ Abdul Kalam led India's missile programs."
    },
    {
      q: "Chandrayaan-3 landed in:",
      options: ["2019","2023","2024","2025"],
      answer: 1,
      explanation: "India achieved a historic Moon landing in 2023."
    },
    {
      q: "Mangalyaan reached Mars in:",
      options: ["Second attempt","First attempt","Third attempt","With NASA help"],
      answer: 1,
      explanation: "India became the first country to reach Mars on first attempt."
    },
    {
      q: "Father of Indian Space Programme:",
      options: ["A.P.J. Abdul Kalam","Vikram Sarabhai","Homi Bhabha","C.V. Raman"],
      answer: 1,
      explanation: "Vikram Sarabhai is known as the father of Indian space program."
    },
    {
      q: "Gaganyaan is:",
      options: ["Mars Mission","Human spaceflight","Satellite","Rocket"],
      answer: 1,
      explanation: "Gaganyaan is India's mission to send humans to space."
    },
    {
      q: "Aditya-L1 studies:",
      options: ["Moon","Sun","Mars","Venus"],
      answer: 1,
      explanation: "Aditya-L1 is India's mission to study the Sun."
    }

  ]

};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz(category) {
  document.getElementById("category-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");

  currentQuiz = questions[category];
  currentIndex = 0;
  score = 0;

  loadQuestion();
}

function loadQuestion() {
  let q = currentQuiz[currentIndex];

  document.getElementById("question").innerText =
    `Q${currentIndex + 1}: ${q.q}`;

  let optionsHTML = "";
  q.options.forEach((opt, i) => {
    optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;

  document.getElementById("feedback").innerText =
    `Question ${currentIndex + 1} of ${currentQuiz.length}`;

  document.getElementById("nextBtn").classList.add("hidden");

  let progress = (currentIndex / currentQuiz.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function checkAnswer(selected) {
  let q = currentQuiz[currentIndex];
  let correct = q.answer;

  let buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    document.getElementById("feedback").innerText =
      "✅ Correct!\n" + q.explanation;
  } else {
    document.getElementById("feedback").innerText =
      "❌ Wrong!\nCorrect: " + q.options[correct] +
      "\n" + q.explanation;
  }

  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("nextBtn").scrollIntoView({ 
  behavior: "smooth",
  block: "center"
});
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("score-box").classList.remove("hidden");

  document.getElementById("score").innerText = score;
}