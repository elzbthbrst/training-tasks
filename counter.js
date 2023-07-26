var createCounter = function (init) {
    let counts = init
    return {
        increment: () => {
            return counts += 1
        },
        decrement: () => {
            return counts -= 1
        },
        reset: () => {
            counts = init
            return counts
        },
        
    }
};


const counter = createCounter(0)
console.log(counter.increment());// 6
console.log(counter.increment());// 6

console.log(counter.reset());// 5
console.log(counter.decrement());// 4

