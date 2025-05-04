//var activePage = 0

function pageSwitch(pageNumber, pageBlock, pageNone1, pageNone2) {
    const home = document.getElementById("home")
    const project1 = document.getElementById("project1")
    const project2 = document.getElementById("project2")

    if (activePage !== pageNumber) {
        pageBlock.style.display = 'block';
        pageNone1.style.display = 'none';
        pageNone2.style.display = 'none';
        
        activePage = pageNumber
    }

    pageBlock.style.display = 'block';
    pageNone1.style.display = 'none';
    pageNone2.style.display = 'none';
        

    
}