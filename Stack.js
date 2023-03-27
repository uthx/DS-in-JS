/*
 LIFO: Last In First Out
 Operations: push, pop, peek, length, isEmpty and print
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.length() - 1];
  }
  length() {
    return this.items.length;
  }
  isEmpty() {
    return this.length() === 0;
  }
  print() {
    console.log(this.items.toString());
  }
}

// Check if bracket expression is balanced

let stringExp = "[()]{}{[()()]()}";
let notBalanced = "[(])";
// console.log(isBalanced(stringExp))

/*
Pseudo code
Assumption: We have a mapping of opening and closing brackets
1- traverse the string
2- If the element is an opening tag then push it in stack
3- If it's an closing tag
    check if the top element is an opening tag, if it is
        it's corresponding closing tag should match with ith element
            if matching, then pop, else push
4- After traversing the string completes, if the stack is empty then the string was balanced, otherwise it's not
*/

const isBalancedNew = (expr) => {
  const bracketMapping = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  // Sanity checks
  if (typeof expr !== "string" || !expr.length) return false;
  const stack = new Stack();
  for (let i = 0; i < expr.length; i++) {
    const item = expr[i];
    const mappedBracket = bracketMapping[item];
    if (!mappedBracket) {
      // this means it's a closing tag
      if (bracketMapping[stack.peek()] === item) {
        stack.pop();
        continue;
      }
    }
    stack.push(item);
  }
  return stack.length() ? false : true;
};
// console.log(isBalancedNew(stringExp));

// Reverse a string using stack
/*
1- Traverse the string and push all elements in a stack
2- Pop all elements of stack and push them in a string, until the stack is empty
*/
const isStringValid = (str) => {
    return typeof str === 'string' && str.length
}
const reverseString = (string) => {
    if(!isStringValid(string)) return 'Invalid string';
    const stack = new Stack();
    let resultString = '';
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        stack.push(element)
    };
    while(!stack.isEmpty()){
        resultString += stack.pop()
    }
    return resultString;
}
let reverseStringInput = 'Rahul'
// console.log(reverseString(reverseStringInput))
const isPalindrome = (string) => {
    if(!isStringValid(string)) return 'Invalid Input';
    const reversedString = reverseString(string)
    return reversedString === string;
}
const isPalindromeInput = "racecar";
console.log(isPalindrome(isPalindromeInput))