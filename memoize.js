// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.



function memoize(fn) {
    let cache = []
    return function (...args) {
        let obj = {
            'fn': fn,
            'args': args
        }
        let elem = cache.find(el => el.args === args)
        if (elem) {
            return elem.answer
        } else {
            let answer = fn(...args)
            cache.push({ ...obj, 'answer': answer })
            return answer
        }
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3));// 5 

console.log(memoizedFn(2, 3));// 5 
console.log(memoizedFn(23, 3));// 5 
console.log(memoizedFn(2, 3));// 5 

console.log(callCount) // 1 
// console.log([1, 2] === [1, 2]);