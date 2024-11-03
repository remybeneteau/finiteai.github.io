const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        displayMessage("You", userMessage);

        // Generate AI response
        const aiMessage = generateAIResponse(userMessage);
        displayMessage("AI", aiMessage);

        // Clear input field
        userInput.value = "";
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Basic responses based on keywords
    if (userMessage.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you?";
    } else if (userMessage.toLowerCase().includes("weather")) {
        return "I can't check the weather, but it’s always a good day to code!";
    } else {
        return "I'm still learning! Could you ask something else?";
    }
}
