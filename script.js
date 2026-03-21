function summarizeText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter some text!");
        return;
    }

    // Split into sentences
    let sentences = text.match(/[^.!?]+[.!?]+/g);

    if (!sentences) {
        document.getElementById("outputText").value = text;
        return;
    }

    // Simple scoring based on sentence length
    sentences.sort((a, b) => b.length - a.length);

    // Take top 2 sentences
    let summary = sentences.slice(0, 2).join(" ");

    document.getElementById("outputText").value = summary;
}