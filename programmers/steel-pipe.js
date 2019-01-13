function solution(arr) {
    var answer = 0;
    const stack = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            stack.push(arr[i]);
        } else if(arr[i] === ')'){
            stack.pop();
            if(arr[i-1] ==='('){
                answer += stack.length;
            } else {
                answer += 1
            }
        }
    }
    return answer;
}

console.log(solution("()(((()())(())()))(())"));