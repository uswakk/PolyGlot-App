const submitButton = document.getElementById("submit-button");

function handleSubmit(event) {
    event.preventDefault();
    console.log("Translation submitted!");
}

submitButton.addEventListener("submit", handleSubmit);