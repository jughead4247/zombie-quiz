const questions = [
    // DAY 1 — THE OUTBREAK

    {
        question: "Day 1: The outbreak has just begun. You hear screaming outside. What do you do?",
        answers: [
            ["Look outside to understand what is happening", 2],
            ["Lock the doors, gather essentials and plan your next move", 4],
            ["Leave immediately before the streets become crowded", 3],
            ["Go outside to help whoever is screaming", 0]
        ]
    },

    {
        question: "Day 1: You have ten minutes before you need to leave. What is most important?",
        answers: [
            ["Food, water and a few useful tools", 3],
            ["Take valuables in case money becomes useful later", 1],
            ["Water, medicine, food and something to carry everything", 4],
            ["Grab whatever can fit in your backpack", 2]
        ]
    },

    {
        question: "Day 1: You reach a road filled with abandoned vehicles. What do you do?",
        answers: [
            ["Walk through the vehicles looking for supplies", 2],
            ["Take the first vehicle that looks usable", 1],
            ["Move around the area and find the least exposed route", 4],
            ["Stay on the road because it is the fastest route", 3]
        ]
    },


    // DAY 2 — ON THE MOVE

    {
        question: "Day 2: Your group needs water. You find a stream outside the town.",
        answers: [
            ["Drink from it after checking that it looks clean", 1],
            ["Fill containers and treat the water before drinking", 4],
            ["Take only enough for today", 2],
            ["Search for bottled water instead", 3]
        ]
    },

    {
        question: "Day 2: You spot a small pharmacy that appears abandoned.",
        answers: [
            ["Enter quickly before someone else arrives", 1],
            ["Ignore it and keep moving", 2],
            ["Observe the building and surroundings before entering", 4],
            ["Send one person inside while everyone waits outside", 3]
        ]
    },

    {
        question: "Day 2: You hear several zombies nearby but they haven't noticed you.",
        answers: [
            ["Stay quiet and take a longer route around them", 4],
            ["Run before they get any closer", 1],
            ["Wait until they move away", 3],
            ["Try to distract them and pass through", 2]
        ]
    },


    // DAY 3 — SHELTER

    {
        question: "Day 3: Your group finds an apparently abandoned house.",
        answers: [
            ["Check the main rooms quickly", 2],
            ["Search the house thoroughly for supplies", 3],
            ["Observe it from outside and check entrances before going in", 4],
            ["Enter immediately because night is approaching", 1]
        ]
    },

    {
        question: "Day 3: You have secured the house. What should you do next?",
        answers: [
            ["Rest while everyone is still feeling strong", 2],
            ["Organize supplies and establish watches", 4],
            ["Search the neighborhood for more food", 3],
            ["Barricade every door and stay inside", 3]
        ]
    },

    {
        question: "Day 3: Someone in your group has a deep wound.",
        answers: [
            ["Clean and treat the wound using available supplies", 4],
            ["Tell them to rest and see if it improves", 2],
            ["Use whatever medicine you can find", 3],
            ["Ignore it unless it becomes serious", 0]
        ]
    },


    // DAY 4 — PEOPLE

    {
        question: "Day 4: A stranger approaches your shelter asking for food.",
        answers: [
            ["Give them food immediately", 1],
            ["Tell them to leave", 2],
            ["Speak from a safe position and assess the situation first", 4],
            ["Invite them inside to hear their story", 2]
        ]
    },

    {
        question: "Day 4: Another survivor offers to trade useful supplies.",
        answers: [
            ["Trade carefully without revealing everything you have", 4],
            ["Trust them if they seem friendly", 1],
            ["Trade whatever they ask for", 0],
            ["Refuse all contact with outsiders", 2]
        ]
    },

    {
        question: "Day 4: Two members of your group strongly disagree about where to go.",
        answers: [
            ["Let the group vote on everything", 2],
            ["Choose the route yourself without discussion", 1],
            ["Hear both sides and make a decision based on risk", 4],
            ["Follow whoever has the most experience", 3]
        ]
    },


    // DAY 5 — RESOURCES

    {
        question: "Day 5: Your food supply is running low.",
        answers: [
            ["Reduce portions and start looking for a sustainable source", 4],
            ["Keep eating normally until the food is gone", 0],
            ["Send everyone out searching for food", 2],
            ["Save most of the food for emergencies", 3]
        ]
    },

    {
        question: "Day 5: Heavy rain has made the roads dangerous.",
        answers: [
            ["Continue because stopping wastes time", 1],
            ["Wait for conditions to improve while protecting supplies", 4],
            ["Find a shortcut through unfamiliar terrain", 2],
            ["Split the group so some can continue ahead", 0]
        ]
    },

    {
        question: "Day 5: You discover a large amount of canned food, but carrying everything will slow you down.",
        answers: [
            ["Take everything and deal with the weight later", 2],
            ["Take only what can be carried comfortably", 3],
            ["Prioritize high-value supplies while keeping the group mobile", 4],
            ["Leave it because stopping is too risky", 1]
        ]
    },


    // DAY 6 — ESCALATION

    {
        question: "Day 6: You discover that the zombies have become faster than before.",
        answers: [
            ["Keep using the same survival strategy", 0],
            ["Avoid populated areas and change your plans", 4],
            ["Travel only during daylight", 3],
            ["Move faster and take more risks", 1]
        ]
    },

    {
        question: "Day 6: Your vehicle breaks down far from your destination.",
        answers: [
            ["Stay with the vehicle and hope someone finds you", 1],
            ["Take essential supplies and plan the safest route on foot", 4],
            ["Walk directly toward the nearest town", 2],
            ["Spend the day trying to repair it", 3]
        ]
    },

    {
        question: "Day 6: Your group discovers that another large group is approaching your location.",
        answers: [
            ["Hide and observe before deciding what to do", 4],
            ["Confront them immediately", 0],
            ["Leave everything behind and run", 1],
            ["Approach them openly and ask what they want", 2]
        ]
    },


    // DAY 7 — THE ENDGAME

    {
        question: "Day 7: You finally reach a settlement claiming to be safe.",
        answers: [
            ["Enter immediately because safety is more important", 1],
            ["Stay outside and observe the settlement first", 4],
            ["Ask the guards about their rules and resources", 3],
            ["Leave because no settlement can be trusted", 2]
        ]
    },

    {
        question: "Day 7: The settlement offers you a permanent place to stay. What matters most before accepting?",
        answers: [
            ["How comfortable the accommodation is", 1],
            ["How much food they provide", 2],
            ["Their security, leadership, resources and rules", 4],
            ["Whether other survivors seem friendly", 3]
        ]
    },

    {
        question: "Day 7: You survived the first week. What is your biggest priority now?",
        answers: [
            ["Find a better weapon", 2],
            ["Rest and stop worrying about the future", 1],
            ["Build a sustainable supply of food, water, shelter and security", 4],
            ["Travel farther away from the outbreak", 3]
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

    const day = Math.floor(currentQuestion / 3) + 1;
const questionInDay = (currentQuestion % 3) + 1;

questionNumber.textContent =
    `Day ${day} • Question ${questionInDay} of 3`;

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

    }
}
