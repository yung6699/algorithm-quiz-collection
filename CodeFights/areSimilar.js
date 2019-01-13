function areSimilar(a, b) {
    const arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            arr.push(i);
        }
    }

    return arr.length === 0 || arr.length === 2 && a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]];
}
console.log(areSimilar([1, 2, 2], [2, 1, 2]));
