// 36. T-shirts: Write a function called make_shirt() that accepts a size and the text of a message that should be 
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
// printed on it. Call the function.

function makeShirt(size: string, text: string): void {
    console.log(`you order a ${size} shirt with print ${text}`)
}
makeShirt('large', '"But Coffee First"')
makeShirt('medium', '"Awaken The Legacy"')
makeShirt('small', '"Together Is Better"')