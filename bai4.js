const submit3El = document.getElementById("submit3").onclick = function(){
    console.log(1)
    const noDivEl = +document.getElementById("noDiv").value ;
    const createDiv = document.getElementById("createDiv");
    let p;
    for(let n = 1; n <= noDivEl; n++ ){
        n += 0;
        createDiv.innerHTML += `<div id="${n}" class"create-new h-25">abc</div>`;
    }
    createDiv.style.display = "block";

}