/**T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
// Program number 36
function makeShirt(size:number,message:string):string
{
    let summary:string="The size of the shirt is: "+size+" and the message to printed is '"+message+"'";
    return summary;
}
let Summary:string=makeShirt(34,"I am queen of my own world!");
console.log(Summary);