async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value;
    if (!userText) return;

    chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;
    input.value = "";

    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();

        chatBox.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        chatBox.innerHTML += `<p style="color:red;">Error connecting to AI</p>`;
    }
}
