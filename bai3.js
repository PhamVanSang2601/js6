const submit2 = document.getElementById("submit2").onclick = function (){
    const y = +document.getElementById("y").value;
    const result3 = document.getElementById("result3");
    let f = 1;
    for(let i = 1; i <= y; i++){
        f = f * i;
    }
    console.log(f);
    result3.style.display = "block";
    result3.innerHTML += `${f}`;
}