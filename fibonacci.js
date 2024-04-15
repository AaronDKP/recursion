function fibs(num) {
    let arr = [];

    for(let i = 0; i < num; i++){
        if(i == 0){
            arr.push(0);
        } else if(i == 1 || i == 2){
            arr.push(1);
        } else {
            arr.push((arr[i - 2]) + (arr[i - 1]));
        }
    }
        
    return arr;
}

function fibsRec(num) {
    let arr = [];

    function fib(n){
        if(n < 2){
            return n;
        } 
            return fib(n - 1) + fib(n - 2);
    };

    for (let i = 0; i < num; i++) {
        arr.push(fib(i));
    }

    return arr;
}

console.log(`fibs iterative = ${fibs(8)}`);
console.log(`fibs recursive = ${fibsRec(8)}`);