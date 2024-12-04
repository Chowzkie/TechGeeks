document.getElementById('hamburger').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu when hamburger is clicked
});

function filterProfiles() {
    // Get the category that the user selected from the dropdown
    var selectedCategory = document.getElementById('category').value;

    // If a category is selected, format it to look nicer (replace hyphens with spaces and capitalize each word)
    // If no category is selected, default to "Our People"
    var professionName = selectedCategory ? selectedCategory.replace(/-/g, ' ').replace(/\b\w/g, function(char) { return char.toUpperCase(); }) : "Our People";
    
    // Update the heading (<h1>) with the category name (formatted)
    document.querySelector('h1').textContent = professionName;

    // Get all the profile elements on the page
    var profiles = document.querySelectorAll('.profile');

    // Loop through each profile and decide if it should be visible or hidden
    profiles.forEach(function(profile) {
        // Show the profile if it matches the selected category, or if no category is selected, show the first 6 profiles
        profile.style.display = profile.dataset.category === selectedCategory || !selectedCategory && Array.from(profiles).indexOf(profile) < 6 ? 'block' : 'none';
    });
}