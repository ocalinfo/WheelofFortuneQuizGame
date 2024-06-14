document.addEventListener('DOMContentLoaded', function () {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spin-button');
    const questionElement = document.getElementById('question');
    const answerContainer = document.getElementById('answer-container');
    const alphabetContainer = document.getElementById('alphabet');
    const scoreValue = document.getElementById('score-value');
    const gameOverModal = document.getElementById('game-over-modal');
    const finalScoreMessage = document.getElementById('final-score-message');
    const restartButton = document.getElementById('restart-button');
    const gameCompletedModal = document.getElementById('game-completed-modal');
    const completionMessage = document.getElementById('completion-message');
    const restartCompletedButton = document.getElementById('restart-completed-button');
    const rulesButton = document.getElementById('rules-button');
    const rulesModal = document.getElementById('rules-modal');
    const closeRulesButton = document.getElementById('close-rules-button');
    const rulesClose = document.getElementById('rules-close');
    const exitButton = document.getElementById('exit-button');
    const exitModalButton = document.getElementById('exit-modal-button');
    const exitCompletedButton = document.getElementById('exit-completed-button');

    let currentScore = 0;
    let currentQuestion = null;
    let currentAnswer = null;
    let incorrectGuesses = 0; // Yanlış tahmin sayısını sıfırla
    let canSpin = true;

    const questionsAndAnswers = {
        5: [
            { question: "Where do you watch movies?", answer: "CINEMA", label: "5" },
            { question: "What is the opposite of hot?", answer: "COLD", label: "5" },
            { question: "What fruit is king of fruits?", answer: "MANGO", label: "5" },
            { question: "What do bees make?", answer: "HONEY", label: "5" },
            { question: "Who is man's best friend?", answer: "DOG", label: "5" }
        ],
        10: [
            { question: "What is the study of past events called?", answer: "HISTORY", label: "10" },
            { question: "Which science studies living organisms?", answer: "BIOLOGY", label: "10" },
            { question: "How many planets are there in the solar system?", answer: "EIGHT", label: "10" },
            { question: "What is the name of the longest river in the world?", answer: "THE NILE", label: "10" },
            { question: "What is the capital city of France?", answer: "PARIS", label: "10" }
        ],
        15: [
            { question: "What measures temperature?", answer: "THERMOMETER", label: "15" },
            { question: "What converts sound to signals?", answer: "MICROPHONE", label: "15" },
            { question: "What is paper folding called?", answer: "ORIGAMI", label: "15" },
            { question: "What is a house made of ice?", answer: "IGLOO", label: "15" },
            { question: "What organ cleans blood?", answer: "KIDNEY", label: "15" }
        ],
        20: [
            { question: "How many legs do spiders have?", answer: "EIGHT", label: "20" },
            { question: "What device is used to measure temperature?", answer: "THERMOMETER", label: "20" },
            { question: "Which country is known for constructing the Great Wall?", answer: "CHINA", label: "20" },
            { question: "What is the primary ingredient in chocolate?", answer: "COCOA", label: "20" },
            { question: "What is the largest continent on Earth?", answer: "ASIA", label: "20" }
        ],
        25: [
            { question: "Largest desert?", answer: "SAHARA", label: "25" },
            { question: "Largest ocean?", answer: "PACIFIC", label: "25" },
            { question: "What measures pressure?", answer: "BAROMETER", label: "25" },
            { question: "Who built Machu Picchu?", answer: "INCA", label: "25" },
            { question: "Main in miso soup?", answer: "SOYBEAN", label: "25" }
        ],
        30: [
            { question: "What gas do plants absorb from the air for photosynthesis?", answer: "CARBONDIOXIDE", label: "30" },
            { question: "Which planet is known as the Red Planet?", answer: "MARS", label: "30" },
            { question: "What is the main chemical element in water?", answer: "HYDROGEN", label: "30" },
            { question: "Which country is famous for its ancient pyramids?", answer: "EGYPT", label: "30" },
            { question: "Which continent is known for having the largest desert in the world, the Sahara?", answer: "AFRICA", label: "30" }
        ],
        35: [
            { question: "How do plants eat?", answer: "PHOTOSYNTHESIS", label: "35" },
            { question: "Longest river?", answer: "NILE", label: "35" },
            { question: "Name of cell division?", answer: "MITOSIS", label: "35" },
            { question: "Father of philosophy?", answer: "SOCRATES", label: "35" },
            { question: "Study of heredity?", answer: "GENETICS", label: "35" }
        ],
        40: [
            { question: "Who wrote the famous play titled 'Romeo and Juliet'?", answer: "SHAKESPEARE", label: "40" },
            { question: "What is the term for the study of stars and planets?", answer: "ASTRONOMY", label: "40" },
            { question: "What do we call the force that pulls objects toward the center of the Earth?", answer: "GRAVITY", label: "40" },
            { question: "Which city is known as the birthplace of democracy?", answer: "ATHENS", label: "40" },
            { question: "What is the name of the sea bordered by Europe to the north and North Africa to the south?", answer: "MEDITERRANEAN", label: "40" }
        ],
        45: [
            { question: "Best conductor?", answer: "SILVER", label: "45" },
            { question: "Who proposed relativity?", answer: "EINSTEIN", label: "45" },
            { question: "Most abundant gas?", answer: "NITROGEN", label: "45" },
            { question: "Capital of Iceland?", answer: "REYKJAVIK", label: "45" },
            { question: "Smallest life unit?", answer: "CELL", label: "45" }
        ],
        50: [
            { question: "Which of the gases in our planet's atmosphere has the majority?", answer: "NITROGEN", label: "50" },
            { question: "Which organ is responsible for filtering blood in the human body?", answer: "KIDNEY", label: "50" },
            { question: "What is the hardest natural material on Earth?", answer: "DIAMOND", label: "50" },
            { question: "Which Italian city is famous for its canals?", answer: "VENICE", label: "50" },
            { question: "What type of animal is native to Australia and known for carrying its young in a pouch?", answer: "KANGAROO", label: "50" }
        ],
        55: [
            { question: "Origin of universe theory?", answer: "BIGBANG", label: "55" },
            { question: "What is energy loss in an unstable nucleus?", answer: "RADIOACTIVITY", label: "55" },
            { question: "Planet closest to the sun?", answer: "MERCURY", label: "55" },
            { question: "Hardest body part?", answer: "ENAMEL", label: "55" },
            { question: "What measures wind speed?", answer: "ANEMOMETER", label: "55" }
        ],
        60: [
            { question: "What is the name of the largest ocean on Earth?", answer: "PACIFIC", label: "60" },
            { question: "Who invented the light bulb?", answer: "EDISON", label: "60" },
            { question: "What is the main ingredient in glass production?", answer: "SAND", label: "60" },
            { question: "Who wrote the epic poem 'The Odyssey'?", answer: "HOMER", label: "60" },
            { question: "What is the smallest planet in our solar system?", answer: "MERCURY", label: "60" }
        ],
        65: [
            { question: "Largest internal organ?", answer: "LIVER", label: "65" },
            { question: "Country with most lakes?", answer: "CANADA", label: "65" },
            { question: "Lowest atmosphere layer?", answer: "TROPOSPHERE", label: "65" },
            { question: "Element with highest melting point?", answer: "TUNGSTEN", label: "65" },
            { question: "Part of brain for seeing?", answer: "OCCIPITAL LOBE", label: "65" }
        ],
        70: [
            { question: "What do you call a baby kangaroo?", answer: "JOEY", label: "70" },
            { question: "Which fruit is known for having its seeds on the outside?", answer: "STRAWBERRY", label: "70" },
            { question: "What is the term for a piece of land surrounded by water on three sides?", answer: "PENINSULA", label: "70" },
            { question: "What do you call the art of folding paper into various shapes and figures?", answer: "ORIGAMI", label: "70" },
            { question: "What natural resource is primarily used to produce nuclear energy?", answer: "URANIUM", label: "70" }
        ],
        75: [
            { question: "What general term is used for vehicles capable of flying?", answer: "AIRCRAFT", label: "75" },
            { question: "What science involves classifying and naming organisms?", answer: "TAXONOMY", label: "75" },
            { question: "What is the seasonal wind bringing heavy rain in South Asia?", answer: "MONSOON", label: "75" },
            { question: "What is the study of metals and their properties called?", answer: "METALLURGY", label: "75" },
            { question: "What do you call the process of liquid turning into gas?", answer: "EVAPORATION", label: "75" }
        ],
        80: [
            { question: "Who is the physicist famous for the theory of relativity?", answer: "EINSTEIN", label: "80" },
            { question: "Who is the famous composer of the classical music piece 'The Fifth Symphony'?", answer: "BEETHOVEN", label: "80" },
            { question: "Who is the philosopher known for the allegory of the cave?", answer: "PLATO", label: "80" },
            { question: "What device is used to measure earthquakes?", answer: "SEISMOGRAPH", label: "80" },
            { question: "Which element is essential for the construction of electronic circuits and is represented by the symbol 'Si'?", answer: "SILICON", label: "80" }
        ],
        85: [
            { question: "What was the first artificial satellite sent into space?", answer: "SPUTNIK", label: "85" },
            { question: "What is the most abundant gas in the Earth's atmosphere?", answer: "NITROGEN", label: "85" },
            { question: "What is the name of the longest river located in Asia?", answer: "YANGTZE", label: "85" },
            { question: "What term describes the total mass of living organisms in an area?", answer: "BIOMASS", label: "85" },
            { question: "What is the current geological epoch called that we are living in?", answer: "HOLOCENE", label: "85" }
        ],
        90: [
            { question: "What is the name of the layer of the Earth's atmosphere closest to the surface?", answer: "TROPOSPHERE", label: "90" },
            { question: "What is the chemical element with the highest electrical conductivity at standard conditions?", answer: "SILVER", label: "90" },
            { question: "Which ancient civilization invented the concept of zero?", answer: "MAYANS", label: "90" },
            { question: "Which element is known for its high resistance to corrosion and is often used in jewelry making?", answer: "GOLD", label: "90" },
            { question: "What is the term used to describe the study of human history through the excavation of sites and the analysis of artifacts and other physical remains?", answer: "ARCHAEOLOGY", label: "90" }
        ],
        95: [
            { question: "What material conducts electricity under specific conditions?", answer: "SEMICONDUCTOR", label: "95" },
            { question: "What is the name of the deepest part of the world's oceans?", answer: "MARIANA", label: "95" },
            { question: "Who authored 'Crime and Punishment'?", answer: "DOSTOEVSKY", label: "95" },
            { question: "Which philosopher famously declared, 'I think, therefore I am'?", answer: "DESCARTES", label: "95" },
            { question: "What term describes a word that reads the same forwards and backwards?", answer: "PALINDROME", label: "95" }
        ],
        100: [
            { question: "Who painted the ceiling of the Sistine Chapel?", answer: "MICHELANGELO", label: "100" },
            { question: "What type of rock is formed from volcanic activity?", answer: "IGNEOUS", label: "100" },
            { question: "Who wrote the novel 'Pride and Prejudice'?", answer: "AUSTEN", label: "100" },
            { question: "Which ancient civilization is known for inventing the wheel?", answer: "SUMERIANS", label: "100" },
            { question: "Who is the scientist known for formulating the laws of motion and universal gravitation?", answer: "NEWTON", label: "100" }
        ]
    };

    function spinWheel() {
        if (isSpinning) return; // Do not proceed if the wheel is already spinning
        isSpinning = true; // Set flag indicating the wheel is spinning
        isAccelerating = true; // Enable acceleration state
        angVelMax = rand(0.25, 0.40); // Randomly determine maximum angular velocity
        questionElement.textContent = 'Spinning...'; // Update the question section
        answerContainer.innerHTML = ''; // Clear the answer container
        alphabetContainer.innerHTML = ''; // Clear the alphabet container

        engine(); // Start the wheel spinning engine

        setTimeout(() => {
            isSpinning = false; // Stop the spinning
            const sectorIndex = getIndex(); // Get the index of the sector where the wheel stopped
            labelValue = parseInt(sectors[sectorIndex].label); // Get the label value of the sector
            presentQuestion(labelValue); // Display the question for this label value
            spinButton.disabled = true; // Disable spin button when question is presented
        }, 3000); // Set the spin duration
    }

    function presentQuestion(label) {
        const selectedQuestions = questionsAndAnswers[label]; // Get questions for the given label
        const randomQuestionIndex = Math.floor(Math.random() * selectedQuestions.length); // Select a random question
        currentQuestion = selectedQuestions[randomQuestionIndex].question;
        currentAnswer = selectedQuestions[randomQuestionIndex].answer;

        questionElement.textContent = currentQuestion; // Display the question
        answerContainer.innerHTML = ''; // Clear the answer container

        // Create letter boxes for the answer
        for (let i = 0; i < currentAnswer.length; i++) {
            const letterBox = document.createElement('div');
            letterBox.classList.add('letter-box');
            letterBox.textContent = ''; // Initially, the boxes are empty
            answerContainer.appendChild(letterBox);
        }
        createAlphabet(); // Recreate the alphabet buttons
    }

    function createAlphabet() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // Split the alphabet into an array
        alphabet.forEach(letter => {
            const letterButton = document.createElement('button');
            letterButton.textContent = letter;
            letterButton.disabled = false;
            letterButton.addEventListener('click', () => selectLetter(letter, letterButton));
            alphabetContainer.appendChild(letterButton);
        });
    }

    function selectLetter(letter, button) {
        let found = false;
        button.disabled = true;

        for (let i = 0; i < currentAnswer.length; i++) {
            if (currentAnswer[i] === letter) {
                if (answerContainer.children[i].textContent === '') { // If the letter is not already shown
                    answerContainer.children[i].textContent = letter;
                    found = true;
                }
            }
        }

        // If the guess was incorrect
        if (!found) {
            incorrectGuesses++;
            if (incorrectGuesses >= 3) { // Limit incorrect guesses to 3
                gameOver(); // End the game if incorrect guesses reach 3
            }
        }

        checkAnswerComplete(); // Check if the answer is complete
    }

    function updateScore(points) {
        currentScore += points; // Update the current score
        scoreValue.textContent = currentScore.toFixed(2); // Display the updated score

        if (currentScore >= 1000) {
            gameCompleted(); // If the score reaches 1000, mark the game as completed
        }
    }

    function checkAnswerComplete() {
        const filled = [...answerContainer.children].every(box => box.textContent !== ''); // Check if all boxes are filled
        if (filled) {
            const correctlyGuessed = [...answerContainer.children].every((box, index) => box.textContent === currentAnswer[index]);
            if (correctlyGuessed) {
                updateScore(labelValue); // Correct answer, add full label value
            }
            disableAllButtons(); // Disable all buttons
            setTimeout(resetForNextRound, 2000); // Reset for the next round after 2 seconds
        }
    }

    function disableAllButtons() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true); // Disable all buttons
        restartButton.disabled = false; // Ensure the restart button is not disabled
        restartCompletedButton.disabled = false; // Ensure the restart completed button is not disabled
        exitModalButton.disabled = false; // Ensure the exit button in modal is not disabled
        exitCompletedButton.disabled = false; // Ensure the exit button in completed modal is not disabled
    }

    function resetForNextRound() {
        questionElement.textContent = ''; // Clear the question text
        answerContainer.innerHTML = ''; // Clear the answer container
        alphabetContainer.innerHTML = ''; // Clear the alphabet container
        incorrectGuesses = 0; // Reset incorrect guesses
        spinButton.disabled = false; // Enable the spin button
        canSpin = true; // Allow spinning
        enableAllButtons(); // Enable all buttons for the new round
    }

    function enableAllButtons() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.disabled = false); // Enable all buttons
    }

    function gameCompleted() {
        completionMessage.textContent = `Congratulations! You have completed the game. Your score: ${currentScore.toFixed(2)}`;
        gameCompletedModal.style.display = 'block'; // Show the game completed modal
        disableAllButtons(); // Disable all buttons
    }

    function gameOver() {
        finalScoreMessage.textContent = `Game Over! Final Score: ${currentScore.toFixed(2)}`;
        gameOverModal.style.display = 'block'; // Show the game over modal
        disableAllButtons(); // Disable all buttons
    }

    spinButton.addEventListener('click', spinWheel); // Add event listener to the spin button

    restartButton.addEventListener('click', () => {
        currentScore = 0; // Reset the score
        scoreValue.textContent = '0'; // Update the displayed score
        gameOverModal.style.display = 'none'; // Hide the game over modal
        resetForNextRound(); // Reset for the next round
    });

    restartCompletedButton.addEventListener('click', () => {
        currentScore = 0; // Reset the score
        scoreValue.textContent = '0'; // Update the displayed score
        gameCompletedModal.style.display = 'none'; // Hide the game completed modal
        resetForNextRound(); // Reset for the next round
    });

    rulesButton.addEventListener('click', () => {
        rulesModal.style.display = 'block'; // Show the rules modal
    });

    closeRulesButton.addEventListener('click', () => {
        rulesModal.style.display = 'none'; // Hide the rules modal
    });

    rulesClose.addEventListener('click', () => {
        rulesModal.style.display = 'none'; // Hide the rules modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === rulesModal) {
            rulesModal.style.display = 'none'; // Hide the rules modal if clicked outside
        }
    });

    exitButton.addEventListener('click', () => {
        window.location.href = 'intro.html'; // Redirect to intro.html
    });

    exitModalButton.addEventListener('click', () => {
        window.location.href = 'intro.html'; // Redirect to intro.html
    });

    exitCompletedButton.addEventListener('click', () => {
        window.location.href = 'intro.html'; // Redirect to intro.html
    });
});

// Sector data for the wheel
const sectors = [
    { color: "#f82", label: "5" },
    { color: "#0bf", label: "10" },
    { color: "#fb0", label: "15" },
    { color: "#0fb", label: "20" },
    { color: "#b0f", label: "25" },
    { color: "#f0b", label: "30" },
    { color: "#bf0", label: "35" },
    { color: "#f82", label: "40" },
    { color: "#0bf", label: "45" },
    { color: "#fb0", label: "50" },
    { color: "#0fb", label: "55" },
    { color: "#b0f", label: "60" },
    { color: "#f0b", label: "65" },
    { color: "#bf0", label: "70" },
    { color: "#b0f", label: "75" },
    { color: "#f0b", label: "80" },
    { color: "#bf0", label: "85" },
    { color: "#f82", label: "90" },
    { color: "#0bf", label: "95" },
    { color: "#fb0", label: "100" },
];

// Generates a random float between min and max
const rand = (m, M) => Math.random() * (M - m) + m;

const tot = sectors.length; // Total number of sectors
const elSpin = document.querySelector("#spin"); // Spin element
const ctx = document.querySelector("#wheel").getContext('2d'); // Canvas context
const dia = ctx.canvas.width; // Canvas diameter
const rad = dia / 2; // Radius
const PI = Math.PI; // PI constant
const TAU = 2 * PI; // Tau constant
const arc = TAU / tot; // Arc length
const friction = 0.991; // Friction coefficient
const angVelMin = 0.002; // Minimum angular velocity
let angVelMax = 0; // Maximum angular velocity
let angVel = 0; // Current angular velocity
let ang = 0; // Angle rotation in radians
let isSpinning = false; // Spinning state flag
let isAccelerating = false; // Accelerating state flag
let animFrame = null; // Animation frame for the engine

// Get index of current sector
const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

// Draw sectors and prizes texts to canvas
const drawSector = (sector, i) => {
    const ang = arc * i; // Calculate angle for the sector
    ctx.save();
    // COLOR
    ctx.beginPath(); // Start drawing path
    ctx.fillStyle = sector.color; // Set fill color
    ctx.moveTo(rad, rad); // Move to center
    ctx.arc(rad, rad, rad, ang, ang + arc); // Draw arc
    ctx.lineTo(rad, rad); // Draw line to center
    ctx.fill(); // Fill the sector
    // TEXT
    ctx.translate(rad, rad); // Move context to center
    ctx.rotate(ang + arc / 2); // Rotate context
    ctx.textAlign = "right"; // Align text to the right
    ctx.fillStyle = "#fff"; // Set text color
    ctx.font = "bold 30px sans-serif"; // Set font style
    ctx.fillText(sector.label, rad - 10, 10); // Draw text
    ctx.restore(); // Restore context state
};

// CSS rotate CANVAS Element
const rotate = () => {
    const sector = sectors[getIndex()]; // Get the current sector
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`; // Rotate the canvas
    elSpin.textContent = !angVel ? sector.label : sector.label; // Update spin text
    elSpin.style.background = sector.color; // Update spin background color
};

const frame = () => {
    if (!isSpinning) return; // Stop if not spinning

    if (angVel >= angVelMax) isAccelerating = false; // Stop accelerating if max velocity is reached

    // Accelerate
    if (isAccelerating) {
        angVel ||= angVelMin; // Initial velocity kick
        angVel *= 1.06; // Accelerate
    }

    // Decelerate
    else {
        isAccelerating = false;
        angVel *= friction; // Decelerate by friction  

        // SPIN END:
        if (angVel < angVelMin) {
            isSpinning = false;
            angVel = 0;
            cancelAnimationFrame(animFrame); // Stop animation
        }
    }

    ang += angVel; // Update angle
    ang %= TAU;    // Normalize angle
    rotate();      // CSS rotate!
};

const engine = () => {
    frame(); // Call the frame function
    animFrame = requestAnimationFrame(engine); // Request next animation frame
};

// INIT!
sectors.forEach(drawSector); // Draw all sectors
rotate(); // Initial rotation
