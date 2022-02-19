const submit = document.getElementById("submit").onclick = function () {
    const x = +document.getElementById("x").value;
    const n = +document.getElementById("n").value;
    const result2 = document.getElementById("result2");
    let s = 0;
    for(let i = 1; i <= n; i++){
        s += Math.pow(x, i);
    }
    result2.style.display = "block";
    result2.innerHTML += `${s}`
}