// Dummy data for profiles
const profiles = [
    {
        name: "Jane Doe",
        project: "AI Chatbot",
        stack: "Python, TensorFlow, Flask",
        domain: "Artificial Intelligence",
        code: "def greet(name):\n    return f'Hello, {name}!'",
    },
    {
        name: "John Smith",
        project: "Web3 Wallet",
        stack: "Solidity, React, Node.js",
        domain: "Blockchain",
        code: "contract MyContract {\n    uint public count;\n}",
    },
    // Add more profiles here
];

let currentIndex = 0;

// DOM Elements
const profileCard = document.getElementById("profile-card");
const userName = document.getElementById("user-name");
const leftSwipe = document.getElementById("left-swipe");
const rightSwipe = document.getElementById("right-swipe");

// Load a profile into the card
function loadProfile(index) {
    if (index >= profiles.length) {
        alert("No more profiles to show!");
        return;
    }
    const profile = profiles[index];
    userName.textContent = profile.name;
    profileCard.querySelector("p:nth-of-type(1)").innerHTML = `<strong>Favourite Project:</strong> ${profile.project}`;
    profileCard.querySelector("p:nth-of-type(2)").innerHTML = `<strong>Tech Stack:</strong> ${profile.stack}`;
    profileCard.querySelector("p:nth-of-type(3)").innerHTML = `<strong>Domain:</strong> ${profile.domain}`;
    profileCard.querySelector(".code-snippet").textContent = profile.code;
}

// Swipe Left: Skip to the next profile
leftSwipe.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < profiles.length) {
        loadProfile(currentIndex);
    } else {
        alert("No more profiles to show!");
    }
});

// Swipe Right: Redirect to chat page
rightSwipe.addEventListener("click", () => {
    const selectedProfile = profiles[currentIndex];
    const name = encodeURIComponent(selectedProfile.name);
    window.location.href = `chat.html?name=${name}`;
});

// Load the first profile on page load
loadProfile(currentIndex);
