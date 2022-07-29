/* 
Write a function, fibsSum(n), that finds the sum of the first n fibonacci numbers recursively. 
Assume n > 0. Note that for this problem, the fibonacci sequence starts with [1, 1].


Pseudo Code 

HELPER FUNCTION 
1. BASE CASE: IF NUMBER IS 1 OR 2 RETURN 1


Fibonaci Sequence 1 1 2 3 5 8 13 21 34 55 89 144 233 377
                  1 2 3 4 5 6 7 8 
*/

const fibsSum = (num) => {   // 4
   if (num === 1) return 1
   if (num === 2) return 2
   
   return fibsSum(num-1) + fibonacci(num)
   // 4 + 3
}
const fibonacci = (num) => {
   if (num === 1) return 1
   if (num === 2) return 1

   return fibonacci(num-1) + fibonacci(num-2)
}


console.log(fibsSum(4))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))