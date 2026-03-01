<script>
let currentScene = 1;
let totalScenes = 0;
let backgrounds = {};

async function loadScenes() {
    const response = await fetch('https://raw.githubusercontent.com/username/repo/main/scenes.json');
    backgrounds = await response.json();
    totalScenes = Object.keys(backgrounds).length;

    // Initialize first scene background
    document.body.style.backgroundImage = `url("${backgrounds[currentScene]}")`;
    document.getElementById("scene" + currentScene).style.display = "block";
}

// Call this on page load
loadScenes();

function changeScene(direction) {
    document.getElementById("scene" + currentScene).style.display = "none";

    currentScene += direction;
    if (currentScene < 1) currentScene = 1;
    if (currentScene > totalScenes) currentScene = totalScenes;

    document.getElementById("scene" + currentScene).style.display = "block";
    document.body.style.backgroundImage = `url("${backgrounds[currentScene]}")`;
}
</script>
