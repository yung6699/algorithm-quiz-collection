const array = [5, 19, 46, 20, 10, 16, 18, 15, 15, 29, 47, 20];

function monotoneStack(arr){
    const stack = [];
    while(arr.length){
        (!stack.length || stack[stack.length -1] <= arr[0]) ? 
            stack.push(arr.shift()) : arr.push(stack.pop());
    }
    return stack;
}

console.log(monotoneStack(array));

