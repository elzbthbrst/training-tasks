const initialValue = `
The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"
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
