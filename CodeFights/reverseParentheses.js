function reverseParentheses(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);

        } else if (s[i] === ')') {
            s = reversStr(s, stack.pop(), i);
            i -= 2;
        }
    }
    return s
}

function reversStr(s, start, end) {
    let arr = s.split('');
    for (let j = 0; j < Math.ceil((end - start) / 2); j++) {
        let temp = arr[start + j];
        arr[start + j] = arr[end - j];
        arr[end - j] = temp;
    }

    arr.splice(start, 1);
    arr.splice(end - 1, 1);
    return arr.join('');
}


console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));