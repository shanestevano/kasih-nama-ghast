const input = document.getElementById("nameInput");
const resultBox = document.getElementById("resultBox");
const submitBtn = document.getElementById("submitBtn");
const copyBtn = document.getElementById("copyBtn");

submitBtn.addEventListener("click", () => {
    const petName = input.value.trim();
    
    if (petName === "") {
        resultBox.textContent = "Kasih nama dulu dong 😅";
        return;
    }

    const message = `Aku namain ${petName} 🥹💖`;
    resultBox.textContent = message;
    copyBtn.style.display = "inline-block";

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(message);
        copyBtn.textContent = "Disalin ✅";
        setTimeout(() => {
            copyBtn.textContent = "Salin Ke Chat 📋";
        }, 2000);
    };
});
