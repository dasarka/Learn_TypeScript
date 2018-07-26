var message = 'To be, or not to be, that is the question.';
 
console.log(message.endsWith('question.')); // true
let message1;
message1='abc';
let endsWithC=(<string>message).endsWith('c');
let alternativeway=(message as string).endsWith('c');
console.log("endsWithC ",endsWithC);
console.log("alternativeway ",alternativeway)