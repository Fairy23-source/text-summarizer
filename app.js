function generateSummary() {
    let text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        alert("Please enter a paragraph!");
        return;
    }

    
    localStorage.setItem("paragraphData", text);

    
    window.location.href = "result.html";
}


window.onload = function () {
    let output = document.getElementById("summaryText");

    if (output) {
        let text = localStorage.getItem("paragraphData");

        if (text) {
            output.innerText = summarizeText(text);
        }
    }
};


function summarizeText(text) {
    let sentences = text.split(". ");

    
    let summary = sentences.slice(0, 2).join(". ");

    return summary + ".";
}
