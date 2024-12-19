// Simulate connected user
//const chatPartnerName = "John Doe"; // Replace with dynamic data based on swipe
//document.getElementById("chat-partner-name").textContent = chatPartnerName;
// Get the user's name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const chatPartnerName = urlParams.get("name") || "Unknown User";

// Set the chat partner's name dynamically
document.getElementById("chat-partner-name").textContent = chatPartnerName;

// Handle sending and displaying messages
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// Add message to the chat
function addMessage(content, type) {
    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
}

// Handle form submission
chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        // Add the sent message
        addMessage(message, "sent");
        chatInput.value = "";

        // Simulate a response (in real-world applications, use WebSocket or AJAX)
        setTimeout(() => {
            addMessage("That's an interesting idea!", "received");
        }, 1000);
    }
});


// Rest of the chat.js remains the same
