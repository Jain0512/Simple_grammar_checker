// Function to check grammar using LanguageTool API
function checkGrammar(text) {
  fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `text=${encodeURIComponent(text)}&language=en-US`
  })
    .then(response => response.json())
    .then(data => {
      if (data.matches.length > 0) {
        let message = "Grammar Issues Found:\n\n";

        data.matches.forEach(match => {
          message += "Error: " + match.message + "\n";
          if (match.replacements.length > 0) {
            message += "Suggestion: " + match.replacements[0].value + "\n\n";
          }
        });

        alert(message);
      }
    })
    .catch(error => console.error("Error:", error));
}

// Listen for typing in input and textarea
document.addEventListener("blur", function (event) {
  const element = event.target;

  if (element.tagName === "TEXTAREA" || element.tagName === "INPUT") {
    if (element.value.length > 10) {
      checkGrammar(element.value);
    }
  }
}, true);