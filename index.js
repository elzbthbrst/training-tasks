const initialValue = `
C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup
`
const space  = /(\r\n|\n|\r)/gm
const p = /[^a-zA-Z $]/gm

const answer  = initialValue.replace(space," ")
.split('.')
.map(el => el.replace(p, '').trim())
.join(' ')
.split(' ')
.map(el => el.split('').reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr)
    }
    return acc
}, [])[0])
.reduce((acc, curr, i, array) => {
    if(array.filter(el => el === curr).length < 2) {
        acc.push(curr)
    }
    return acc
}, [])[0]


console.log(initialValue);
console.log(answer);
