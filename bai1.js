const resultEl = document.getElementById("result");
let i = 1
for (let sum = 0; sum < 10000; i++){
    sum += i;
}
console.log(i)
resultEl.innerHTML += `<p>SỐ NGUYÊN DƯƠNG NHỎ NHẤT: ${i - 1}</p>`;

