
// Showing the hambuger menu if screen width < 768px

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});




 // Select the text container
const copyTextElement = document.getElementById('Copy-text');

// Add a click event listener
copyTextElement.addEventListener('click', () => {
// Copy the text content to the clipboard
const textToCopy = copyTextElement.textContent;

// Use the Clipboard API
navigator.clipboard.writeText(textToCopy)
    .then(() => {
        alert('Text copied to clipboard: ' + textToCopy);
        })
    .catch(err => {
        console.error('Failed to copy text: ', err);
        });
    });