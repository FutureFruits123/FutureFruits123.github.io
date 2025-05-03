/*
function switchScene() {
    const scene1 = document.getElementById("scene1")
    const scene2 = document.getElementById("scene2")

    if (scene1.style.display !== 'none') {
        scene1.style.display = 'none';
        scene2.style.display = 'block';
    }
    
    else {
        scene1.style.display = 'block';
        scene2.style.display = 'none';
    }

}
*/
var activePage = 0

function project1Page() {
    const home = document.getElementById("home")
    const project1 = document.getElementById("project1")
    const project2 = document.getElementById("project2")

    if (activePage !== 1) {
        home.style.display = 'none';
        project1.style.display = 'block';
        project2.style.display = 'none';
        
        activePage = 1
    }
}

function homePage() {
    const home = document.getElementById("home")
    const project1 = document.getElementById("project1")
    const project2 = document.getElementById("project2")

    if (activePage !== 0) {
        home.style.display = 'block';
        project1.style.display = 'none';
        project2.style.display = 'none';
        
        activePage = 0
    }
}