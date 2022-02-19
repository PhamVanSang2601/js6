const submit = document.getElementById("submit").onclick = function () {
    const x = +document.getElementById("x").value;
    const n = +document.getElementById("n").value;
    const result2 = document.getElementById("result2");
    let s = 0 ;
    if (n >= 1){
        for (let i = 1 ; i <= n; i++){
            s += Math.pow(x, i);
        }
    } else if (0 <= n  && n < 1){
        s += x + Math.pow(x,n);
    } else if (n < 0){
        for (;n < 0; n++){
            s += Math.pow(x,n)
        }
    }
    result2.style.display = "block";
    result2.innerHTML += `${s}`
    
}