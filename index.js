// Array of flag objects, 
//each containing the name and source of a flag image.

const flags = [
    {name: "India", src:"flags/images/india.jpg"},
    {name: "Canada", src:"flags/images/Canada.jpg"},
    {name: "Nepal", src:"flags/images/nepal.jpg"},
    {name: "South Africa", src:"flags/images/SouthAfrica.png"},
    {name: "USA", src:"flags/images/UnitedStates.jpg"}
];

// Variable to hold the currently displayed flag
let currentFlag;

//Varialble to keep track of the users score
let score = 0;

//Function to get a random flag from the flags array
function getRandomFlag(){
    return flags[Math.floor(Math.random() * flags.length)];
}

//Function to display a new flag and options
function displayFlag(){
    //select random flag
    currentFlag = getRandomFlag();

    //update the flag image src to the selected flag
    document.getElementById("flag-img").src = currentFlag.src;

    // Get the options container element where the options will be displayed
    const optionsContainer = document.getElementById("options-container");
    // Clear any existing options from the container
    optionsContainer.innerHTML = '';

    // Create a shuffled version of the flags array for the options
    const shuffledFlags = [...flags].sort(() => Math.random() - 0.5);
    
    // Loop through the shuffled flags and create option elements
    shuffledFlags.forEach(flag => {
        // Create a new div element for each option
        const option = document.createElement("div");
        // Add a class to the option for styling
        option.className = "option";
        // Set the text content to the flag's name
        option.textContent = flag.name;
        // Add an onclick event to the option that checks the answer when clicked
        option.onclick = () => checkAnswer(flag);
        // Append the option to the options container
        optionsContainer.appendChild(option);
    });
}

// Function to check if the selected option is correct
function checkAnswer(selectedFlag) {
    // Check if the selected flag's name matches the current flag's name
    if (selectedFlag.name === currentFlag.name) {
        // If correct, increment the score and show a success message
        score++;
        alert("Correct!");
    } else {
        // If wrong, show an error message with the correct answer
        alert("Wrong! The correct answer was " + currentFlag.name);
    }
    // Update the score displayed on the page
    document.getElementById("score").textContent = score;
    // Display a new flag and options for the next question
    displayFlag();
}

// Set up an event listener for the "Next" button to load a new flag when clicked
document.getElementById("next-btn").onclick = displayFlag;

// Initialize the quiz by displaying the first flag and options
displayFlag();
