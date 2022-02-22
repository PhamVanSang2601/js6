const submit3El = document.getElementById("submit3").onclick = function(){
    console.log(1)
    const noDivEl = +document.getElementById("noDiv").value ;
    const createDiv = document.getElementById("createDiv");
    let p;
    for(let n = 1; n <= noDivEl; n++ ){
        n += 0;  
        if (n % 2 === 0) {
            createDiv.innerHTML += `<div class="alert alert-success m-0">${n}</div>`;           
        } else if (n % 2 !== 0){
            createDiv.innerHTML += `<div class="alert alert-dark m-0">${n}</div>`;
        }
    }
    
    
    
    
    
    createDiv.style.display = "block";
}