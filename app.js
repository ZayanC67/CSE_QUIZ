let questions = {
  
  history: [
    { q: "Who founded Maurya Empire?", options: ["Ashoka","Chandragupta Maurya","Akbar","Harsha"], answer: 1 },
    { q: "Indus Valley Civilization river?", options: ["Ganga","Yamuna","Indus","Krishna"], answer: 2 },
    { q: "Who wrote Arthashastra?", options: ["Kalidasa","Chanakya","Tulsidas","Valmiki"], answer: 1 },
    { q: "Ashoka belonged to which dynasty?", options: ["Gupta","Maurya","Mughal","Chola"], answer: 1 },
    { q: "Capital of Magadha?", options: ["Delhi","Pataliputra","Agra","Ujjain"], answer: 1 },
    { q: "Vedas are written in?", options: ["Hindi","Sanskrit","Tamil","Urdu"], answer: 1 },
    { q: "Who built Sanchi Stupa?", options: ["Ashoka","Akbar","Shivaji","Harsha"], answer: 0 },
    { q: "Oldest Veda?", options: ["Rigveda","Samaveda","Yajurveda","Atharvaveda"], answer: 0 },
    { q: "Gupta period known for?", options: ["War","Golden Age","Trade","Colonization"], answer: 1 },
    { q: "Nalanda was a?", options: ["Temple","University","Fort","Palace"], answer: 1 }
  ],

  tech: [
    { q: "AI stands for?", options: ["Artificial Intelligence","Auto Input","Advanced Internet","None"], answer: 0 },
    { q: "HTML is?", options: ["Programming Language","Markup Language","Database","OS"], answer: 1 },
    { q: "Time complexity of binary search?", options: ["O(n)","O(log n)","O(n^2)","O(1)"], answer: 1 },
    { q: "Which protocol is used for secure web communication?", options: ["HTTP","FTP","HTTPS","SMTP"], answer: 2 },
    { q: "Which data structure uses FIFO?", options: ["Stack","Queue","Tree","Graph"], answer: 1 },
    { q: "Which layer does IP work on?", options: ["Transport","Application","Network","Data Link"], answer: 2 },
    { q: "What is RAM?", options: ["Permanent memory","Volatile memory","Cache","Storage"], answer: 1 } ,  
    { q: "Full form of URL?", options: ["Uniform Resource Locator","Universal Resource Link","User Resource Link","None"], answer: 0 },
    { q: "Database example?", options: ["MySQL","HTML","CSS","JS"], answer: 0 },
    { q: "AI chatbot example?", options: ["Google","ChatGPT","Windows","Linux"], answer: 1 }
  ]

};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz(category) {
  document.getElementById("category-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");

  currentQuiz = questions[category];
  loadQuestion();
}

function loadQuestion() {
  let q = currentQuiz[currentIndex];
document.getElementById("question").innerText =
  `Q${currentIndex + 1}: ` + q.q;
  let optionsHTML = "";
  q.options.forEach((opt, i) => {
    optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").classList.add("hidden");

  document.getElementById("feedback").innerText = 
  `Question ${currentIndex + 1} of ${currentQuiz.length}`;
  let progress = ((currentIndex) / currentQuiz.length) * 100;
document.getElementById("progressBar").style.width = progress + "%";
}

function checkAnswer(selected) {
  let correct = currentQuiz[currentIndex].answer;

  // disable buttons after click
  let buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback").innerText =
      "❌ Wrong! Correct: " + currentQuiz[currentIndex].options[correct];
  }

  document.getElementById("nextBtn").classList.remove("hidden");
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