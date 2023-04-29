for (let i = 1; i < 10; i++) {
    if (i % 2 ===0) continue;
    for (let j = 1; j < 10; j++) {
        if (j % 2 ===0) continue;
        let k = i * j
        if (k % 2 ===0) continue;
        else console.log( i + "x" + j + "=" + k);
             
        
    }
}
// 구구단 짝수없이 출력 