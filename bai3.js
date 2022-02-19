const submit2 = document.getElementById("submit2").onclick = function (){
    const y = +document.getElementById("y").value;
    const result3 = document.getElementById("result3");
    let f = 1;
    if (y > 0 && y % 1 === 0){
        for(let i = 1; i <= y; i++){
            f = f * i;
        }
    } else if (y === 0){
        f = 1;  
    } else if (y < 0 || y % 1 !== 0){
        f = 0;
    }
    result3.style.display = "block";
    if (f === 0){
        result3.innerHTML += `N\A`;
    } else {
        result3.innerHTML += `${f}`;
    }
}