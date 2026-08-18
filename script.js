const questions = [

    {
        question: "The outbreak has just begun. You hear screaming outside. What do you do?",
        answers: [
            ["Run outside to see what's happening", 0],
            ["Secure the house, gather supplies and plan an escape route", 4],
            ["Look through the window", 1],
            ["Lock everything and assess the situation", 3]
            
        ]
    },

    {
        question: "You have 10 minutes to leave your house. What do you take?",
        answers: [
            ["Carefully chosen survival essentials and as much water as possible", 4],
            ["Whatever is closest", 0],
            ["Phone, wallet and some food", 1],
            ["Water, food, medicine and basic equipment", 3]
            
        ]
    },

    {
        question: "You encounter someone who appears injured and asks for help.",
        answers: [
            ["Immediately run to them", 0],
            ["Help them without asking questions", 1],
            ["Stay protected and determine whether they're actually safe before approaching", 4],
            ["Keep your distance and assess them first", 3]
            
        ]
    },

    {
        question: "Your group wants to enter a supermarket for supplies.",
        answers: [
            ["Scout the building first", 3],
            ["Assess entrances, exits and surroundings before deciding", 4],
            ["Rush in before someone else gets there", 0],
            ["Go in with the group", 1]
            
        ]
    },

    {
        question: "Your vehicle runs out of fuel in an unfamiliar area.",
        answers: [
            ["Panic", 0],
            ["Check the surroundings, secure supplies and choose the safest route", 4],
            ["Abandon everything and start walking", 1],
            ["Take essential supplies and continue on foot", 3]
        ]
    },

    {
        question: "Someone in your group is bitten.",
        answers: [
            ["Pretend nothing happened", 0],
            ["Isolate them immediately and make a difficult decision", 4],
            ["Let them stay with everyone", 1],
            ["Separate them and figure out what happened", 3]
            
        ]
    },

    {
        question: "Your food supply is running low.",
        answers: [
            ["Start rationing", 3],
            ["Ration immediately and establish a sustainable source of food and water", 4],
            ["Keep eating normally", 0],
            ["Wait until it's almost gone", 1]
        ]
    },

    {
        question: "You find an apparently abandoned house.",
        answers: [
            ["Walk straight inside", 0],
            ["Check the building carefully", 3],
            ["Check the main entrance", 1],
            ["Observe it from outside first and check entrances and exits", 4]
        ]
    },

    {
        question: "You hear someone screaming for help nearby.",
        answers: [
            ["Assume it could be a trap and investigate from a protected position", 4],
            ["Run toward them", 0],
            ["Shout back to them", 1],
            ["Observe the area before approaching", 3]
        ]
    },

    {
        question: "Your group has discovered a safe location. What is your priority?",
        answers: [
            ["Find food", 1],
            ["Secure the entrances", 3],
            ["Make yourself comfortable", 0],
            ["Establish security, water, food storage, escape routes and watch rotations", 4]
        ]
    },

    {
        question: "Another group offers to trade supplies with you.",
        answers: [
            ["Keep your distance, verify their intentions and never reveal how much you have", 4],
            ["Give them everything they want", 0],
            ["Trust them because they seem friendly", 1],
            ["Trade carefully", 3]
        ]
    },

    {
        question: "Winter is approaching.",
        answers: [
            ["Deal with it when it arrives", 0],
            ["Find some blankets", 1],
            ["Prepare shelter, heating, clothing, food and backup plans", 4],
            ["Stockpile fuel, food and warm clothing", 3]
        ]
    },

    {
        question: "Your group is arguing about what to do next.",
        answers: [
            ["Pick a side and start fighting", 0],
            ["Let everyone do whatever they want", 1],
            ["Try to reach an agreement", 3],
            ["Establish clear leadership, listen to everyone and make a decision", 4]
        ]
    },

    {
        question: "You discover that the zombies are becoming faster and more dangerous.",
        answers: [
            ["Keep doing what you've been doing", 0],
            ["Hope they don't find you", 1],
            ["Change your plans and become more cautious", 3],
            ["Completely reassess your survival strategy", 4]
        ]
    },

    {
        question: "You finally find a functioning settlement offering safety.",
        answers: [
            ["Investigate its leadership, security, resources and rules first", 4],
            ["Walk straight through the gates", 0],
            ["Join immediately", 1],
            ["Observe the settlement before joining", 3]
        ]
    }

];


let currentQuestion = 0;
let score = 0;


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);


function startQuiz() {

    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;

    answersContainer.innerHTML = "";

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;


    current.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer[0];

        button.addEventListener("click", () => {
            selectAnswer(answer[1]);
        });

        answersContainer.appendChild(button);

    });
}


function selectAnswer(points) {

    score += points;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


function showResult() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("final-score").textContent = score;

    let title;
    let description;
    let survival;
    let icon;


    if (score <= 15) {

        title = "☠️ Zombie Food";
        description =
            "You probably wouldn't make it very far. Your biggest enemy isn't necessarily the zombies — it's your decision-making.";
        survival = "Hours to a few days";
        icon = "☠️";

    } else if (score <= 30) {

        title = "🧟 Short-Term Survivor";
        description =
            "You might survive the initial chaos, but long-term survival would be difficult. Panic and poor preparation could eventually catch up with you.";
        survival = "Several days to a few weeks";
        icon = "🧟";

    } else if (score <= 45) {

        title = "🏃 Survivor";
        description =
            "You have a decent chance. You understand that surviving isn't just about fighting zombies. Food, water, shelter and information matter.";
        survival = "Several weeks to a few months";
        icon = "🏃";

    } else if (score <= 55) {

        title = "🔥 Apocalypse Survivor";
        description =
            "You're surprisingly difficult to kill. You plan ahead, avoid unnecessary risks and understand that other survivors can be dangerous.";
        survival = "Several months to several years";
        icon = "🔥";

    } else {

        title = "👑 The Last Human Alive";
        description =
            "You don't merely survive the apocalypse — you've basically turned it into a long-term project. You prepare before everyone else realizes there's a problem.";
        survival = "5+ years";
        icon = "👑";
    }


    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;
    document.getElementById("survival-time").textContent = survival;
    document.getElementById("result-icon").textContent = icon;

    progressBar.style.width = "100%";
}


function restartQuiz() {

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

} async function shareResult() {

    const title = document.getElementById("result-title").textContent;
    const survival = document.getElementById("survival-time").textContent;
    const finalScore = document.getElementById("final-score").textContent;

    const shareText =
        `🧟 I scored ${finalScore}/60 on the Zombie Apocalypse Survival Test!\n\n` +
        `${title}\n` +
        `Estimated survival: ${survival}\n\n` +
        `How long would YOU survive?`;

    const shareData = {
        title: "Zombie Apocalypse Survival Test",
        text: shareText,
        url: "https://jughead4247.github.io/zombie-quiz/"
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText + "\n\nhttps://jughead4247.github.io/zombie-quiz/"
            );

            alert("Your result has been copied! You can paste it anywhere.");

        }

    } catch (error) {

        console.log("Sharing cancelled.");

    }async function challengeFriend() {

    const survival = document.getElementById("survival-time").textContent;

    const challengeText =
        `🧟 I would survive ${survival} in a Zombie Apocalypse!\n\n` +
        `I challenge YOU to beat my survival time! 😈\n\n` +
        `Take the quiz: https://jughead4247.github.io/zombie-quiz/`;

    const shareData = {
        title: "Zombie Apocalypse Survival Challenge",
        text: challengeText,
        url: "https://jughead4247.github.io/zombie-quiz/"
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(challengeText);

            alert("Challenge copied! Send it to your friend.");

        }

    } catch (error) {

        console.log("Challenge cancelled.");

    }
}
}