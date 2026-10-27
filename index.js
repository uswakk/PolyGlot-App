const form = document.getElementById("form");

function handleSubmit(event) {
    event.preventDefault();
    console.log("Translation submitted!");
    const  blockOne = document.getElementById("block-one");
    blockOne.style.display = "none";

    const blockTwo = document.getElementById("block-two");
    blockTwo.style.display = "block";
}

form.addEventListener("submit", handleSubmit);

/*Functionality to start over*/
const startOver = document.getElementById("prev");

function goBack(event) {
    event.preventDefault();
    console.log("Go back!");
    const  blockOne = document.getElementById("block-one");
    blockOne.style.display = "block";

    const blockTwo = document.getElementById("block-two");
    blockTwo.style.display = "none";
}

startOver.addEventListener("click", goBack);