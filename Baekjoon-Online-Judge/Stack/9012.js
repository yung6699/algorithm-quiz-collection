/*
    백준 알고리즘 9012번 괄호
    https://www.acmicpc.net/problem/9012
 */

function bracketPairCheck(element) {
    const stack = [];
    for (let i = 0, max = element.length; i < max; i++) {
        switch (element[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(element[i])
                break;
            case ')':
            case '}':
            case ']':
                let open_ch = stack.pop();
                if (open_ch === '(' && element[i] !==')'||
                    open_ch === '{' && element[i] !=='}'||
                    open_ch === '[' && element[i] !==']' || !open_ch){
                    return false
                }
                break;
            default:
                break;
        }
    }

    return (stack.length !== 0)? false : true;
}

// console.log(bracketPairCheck('()()'));
// console.log(bracketPairCheck('({[}])'));
// console.log(bracketPairCheck('({}[(){}])'));
// console.log(bracketPairCheck('(){}()[][}'));

// console.log(bracketPairCheck("(hello)()"))
// console.log(bracketPairCheck(")("))
console.log(bracketPairCheck(")"))