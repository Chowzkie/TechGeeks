const popup = document.getElementById("popup");

function submitForm(event) {
    const form = event.target; 
    // Prevent form submission
    event.preventDefault();
    //Reset the text
    form.reset(); 
    openPopup();
}

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}