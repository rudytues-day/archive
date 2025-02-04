var verifyageButton = document.getElementById("verifyage-button");
var verifyageCheckbox = document.getElementById("verifyage-checkbox");

// add age verification to local storage

verifyageButton.addEventListener("click", () => {
    if (verifyageCheckbox.checked) {
        localStorage.setItem("ageVerified", "✓");
        if (window.location = window.location.search.startsWith("?returnto=")) {
            window.location = window.location.search.substring("?returnto=".length);
        } else {
            window.location = "/";
        }
    } else {
        alert("you must be 18 years or older to submit");
    }
});