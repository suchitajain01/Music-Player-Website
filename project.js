function homeClick() 
{
    alert("Home clicked");
}

function openSearch() {
    alert("Search clicked");
}

function openVideo() {
    alert("Video clicked");
}

function closeApp() {
    alert("Close clicked");
}

function openCharts() {
    alert("Charts clicked");
}

function openSettings() {
    alert("Settings clicked");
}

let lastScrollTop = 0;

window.addEventListener('wheel', function(event) {
  // Check if user scrolls UP (deltaY is negative)
  if (event.deltaY < 0) {
    // Redirect to home page
    window.location.href = 'page2.html'; // Change to your homepage filename if different
  }
});